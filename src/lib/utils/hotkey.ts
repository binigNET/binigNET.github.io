import { vkCodes, type VkCode } from '$lib/data/vk-codes';

export const HOTKEY_MODIFIERS = ['Shift', 'Ctrl', 'Alt'] as const;
export type HotkeyModifier = (typeof HOTKEY_MODIFIERS)[number];

const HEX_PATTERN = /^0x[0-9a-f]{1,2}$/i;

const byName = new Map<string, VkCode>(vkCodes.map((vk) => [vk.name.toUpperCase(), vk]));
const byCode = new Map<string, VkCode>(vkCodes.map((vk) => [toHexCode(vk.code).toLowerCase(), vk]));

function toHexCode(code: number): string {
	return `0x${code.toString(16)}`;
}

function findByName(name: string): VkCode | undefined {
	return byName.get(name.toUpperCase());
}

function findByCode(hex: string): VkCode | undefined {
	return byCode.get(hex.toLowerCase());
}

function splitModifier(value: string): { modifier: HotkeyModifier | undefined; rest: string } {
	for (const modifier of HOTKEY_MODIFIERS) {
		if (value.length > modifier.length && value.toUpperCase().startsWith(modifier.toUpperCase())) {
			return { modifier, rest: value.slice(modifier.length) };
		}
	}
	return { modifier: undefined, rest: value };
}

export function toDisplayHotkey(raw: string): string {
	const value = raw.trim();
	if (!value) return '';

	const { modifier, rest } = splitModifier(value);

	let resolved: string;
	if (HEX_PATTERN.test(rest)) {
		resolved = findByCode(rest)?.name ?? rest;
	} else {
		resolved = findByName(rest)?.name ?? (rest.length === 1 ? rest.toUpperCase() : rest);
	}

	return (modifier ?? '') + resolved;
}

export function toFileHotkey(display: string): string {
	const value = display.trim();
	if (!value) return '';

	const { modifier, rest } = splitModifier(value);

	const found = findByName(rest);
	const hex = found ? toHexCode(found.code) : HEX_PATTERN.test(rest) ? rest.toLowerCase() : rest;

	return (modifier ?? '') + hex;
}
