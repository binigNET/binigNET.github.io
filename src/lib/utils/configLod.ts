export type CoreFieldType = 'checkbox' | 'number' | 'text' | 'select';

export interface CoreField {
	key: string;
	label: string;
	type: CoreFieldType;
	default: string;
	options?: string[];
	step?: string;
	hint?: string;
}

export interface CoreSection {
	id: 'HOTKEYS' | 'GAMEOPTIONS' | 'VISUALS';
	title: string;
	description?: string;
	fields: CoreField[];
}

export interface AdvancedOption {
	id: string;
	command: string;
	altCommand?: string;
	paramPlaceholder?: string;
	description: string;
}

export interface FormState {
	core: Record<string, string>;
	advanced: Record<string, { enabled: boolean; param: string }>;
}

export const MAX_START_CHAT_STRINGS = 20; // StartChatString2..StartChatString21

export function createDefaultFormState(
	sections: CoreSection[],
	advancedOptions: AdvancedOption[]
): FormState {
	const core: Record<string, string> = {};
	for (const section of sections) {
		for (const field of section.fields) {
			core[field.key] = field.default;
		}
	}

	const advanced: Record<string, { enabled: boolean; param: string }> = {};
	for (const option of advancedOptions) {
		advanced[option.id] = { enabled: false, param: '' };
	}

	return { core, advanced };
}

export function countEnabledAdvanced(state: FormState): number {
	return Object.values(state.advanced).filter((entry) => entry.enabled).length;
}

const KEY_VALUE_LINE = /^([A-Za-z0-9_]+)=(.*)$/;
const START_CHAT_STRING_KEY = /^StartChatString(\d+)$/;

export interface ParsedConfigLod {
	core: Record<string, string>;
	startChatStrings: string[];
}

export function parseConfigLod(text: string): ParsedConfigLod {
	const core: Record<string, string> = {};
	const startChatStrings: string[] = new Array(MAX_START_CHAT_STRINGS).fill('');

	for (const rawLine of text.split('\n')) {
		const line = rawLine.trim();
		if (!line || line.startsWith('#') || line.startsWith('[')) continue;

		const match = line.match(KEY_VALUE_LINE);
		if (!match) continue;

		const [, key, value] = match;
		const chatStringMatch = key.match(START_CHAT_STRING_KEY);
		if (chatStringMatch) {
			const index = Number(chatStringMatch[1]) - 2; // StartChatString2 -> index 0
			if (index >= 0 && index < MAX_START_CHAT_STRINGS) {
				startChatStrings[index] = value;
			}
			continue;
		}

		core[key] = value;
	}

	return { core, startChatStrings };
}

export function matchAdvancedCommand(
	raw: string,
	advancedOptions: AdvancedOption[]
): { id: string; param: string } | null {
	const value = raw.trim();
	if (!value) return null;

	for (const option of advancedOptions) {
		if (option.paramPlaceholder) continue;
		if (value === option.command || value === option.altCommand) {
			return { id: option.id, param: '' };
		}
	}

	const spaceIndex = value.indexOf(' ');
	const token = spaceIndex === -1 ? value : value.slice(0, spaceIndex);
	const rest = spaceIndex === -1 ? '' : value.slice(spaceIndex + 1).trim();

	for (const option of advancedOptions) {
		if (!option.paramPlaceholder) continue;
		if (token === option.command || token === option.altCommand) {
			return { id: option.id, param: rest };
		}
	}

	return null;
}

export function applyParsedToFormState(
	parsed: ParsedConfigLod,
	sections: CoreSection[],
	advancedOptions: AdvancedOption[]
): { state: FormState; warnings: string[] } {
	const state = createDefaultFormState(sections, advancedOptions);
	const warnings: string[] = [];

	for (const section of sections) {
		for (const field of section.fields) {
			const value = parsed.core[field.key];
			if (value !== undefined) {
				state.core[field.key] = value;
			}
		}
	}

	for (const entry of parsed.startChatStrings) {
		if (!entry) continue;
		const match = matchAdvancedCommand(entry, advancedOptions);
		if (match) {
			state.advanced[match.id] = { enabled: true, param: match.param };
		} else {
			warnings.push(`Unrecognized chat command "${entry}" was ignored`);
		}
	}

	return { state, warnings };
}

export function serializeConfigLod(
	template: string,
	state: FormState,
	sections: CoreSection[],
	advancedOptions: AdvancedOption[]
): string {
	const coreValues = new Map<string, string>();
	for (const section of sections) {
		for (const field of section.fields) {
			coreValues.set(field.key, state.core[field.key] ?? field.default);
		}
	}

	const chatStrings = advancedOptions
		.filter((option) => state.advanced[option.id]?.enabled)
		.map((option) => {
			const param = (state.advanced[option.id]?.param ?? '').trim();
			return param ? `${option.command} ${param}` : option.command;
		});

	let chatStringIndex = 0;

	const lines = template.split('\n').map((line) => {
		const hasTrailingCR = line.endsWith('\r');
		const content = hasTrailingCR ? line.slice(0, -1) : line;
		const trimmed = content.trim();
		if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('[')) return line;

		const match = trimmed.match(KEY_VALUE_LINE);
		if (!match) return line;

		const [, key] = match;
		let newContent: string | undefined;

		if (coreValues.has(key)) {
			newContent = `${key}=${coreValues.get(key)}`;
		} else if (START_CHAT_STRING_KEY.test(key)) {
			const value = chatStrings[chatStringIndex] ?? '';
			chatStringIndex += 1;
			newContent = `${key}=${value}`;
		}

		if (newContent === undefined) return line;
		return hasTrailingCR ? `${newContent}\r` : newContent;
	});

	return lines.join('\n');
}
