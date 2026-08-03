import type { CoreSection } from '$lib/utils/configLod';

export const coreSections: CoreSection[] = [
	{
		id: 'HOTKEYS',
		title: 'Hotkeys',
		description:
			'Enter keys in friendly form, e.g. "Q", "F2", or with a modifier: "AltQ", "ShiftF2". Leave blank to disable. Written to the config file in the game\'s hex format automatically.',
		fields: [
			{ key: 'SkillSlot1', label: 'Skill Slot 1', type: 'hotkey', default: '' },
			{ key: 'SkillSlot2', label: 'Skill Slot 2', type: 'hotkey', default: '' },
			{ key: 'SkillSlot3', label: 'Skill Slot 3', type: 'hotkey', default: '' },
			{ key: 'SkillSlot4', label: 'Skill Slot 4', type: 'hotkey', default: '' },
			{
				key: 'SkillSlot5',
				label: 'Skill Slot 5',
				type: 'hotkey',
				default: '',
				hint: 'Also used to learn "Attribute bonus" in the hero skills menu.'
			},
			{ key: 'SkillSlot6', label: 'Skill Slot 6', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot1', label: 'Autocast Skill Slot 1', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot2', label: 'Autocast Skill Slot 2', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot3', label: 'Autocast Skill Slot 3', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot4', label: 'Autocast Skill Slot 4', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot5', label: 'Autocast Skill Slot 5', type: 'hotkey', default: '' },
			{ key: 'ASkillSlot6', label: 'Autocast Skill Slot 6', type: 'hotkey', default: '' },
			{ key: 'BindMove', label: 'Rebind: Move', type: 'hotkey', default: '' },
			{ key: 'BindStop', label: 'Rebind: Stop', type: 'hotkey', default: '' },
			{ key: 'BindHold', label: 'Rebind: Hold Position', type: 'hotkey', default: '' },
			{ key: 'BindAttack', label: 'Rebind: Attack', type: 'hotkey', default: '' },
			{ key: 'BindPatrol', label: 'Rebind: Patrol', type: 'hotkey', default: '' },
			{
				key: 'BindOpenHeroSkills',
				label: 'Rebind: Open Hero Skills',
				type: 'hotkey',
				default: ''
			},
			{
				key: 'RealPatrol',
				label: 'Patrol Hotkey',
				type: 'hotkey',
				default: 'P',
				hint: 'Only a single hotkey allowed.'
			},
			{
				key: 'RealStop',
				label: 'Stop Hotkey',
				type: 'hotkey',
				default: 'S',
				hint: 'Only a single hotkey allowed.'
			},
			{
				key: 'RealHold',
				label: 'Hold Hotkey',
				type: 'hotkey',
				default: 'H',
				hint: 'Only a single hotkey allowed.'
			},
			{
				key: 'RealMove',
				label: 'Move Hotkey',
				type: 'hotkey',
				default: 'M',
				hint: 'Only a single hotkey allowed.'
			},
			{ key: 'ItemSlot1', label: 'Item Slot 1 (top-left)', type: 'hotkey', default: '' },
			{ key: 'ItemSlot2', label: 'Item Slot 2 (top-right)', type: 'hotkey', default: '' },
			{ key: 'ItemSlot3', label: 'Item Slot 3 (middle-left)', type: 'hotkey', default: '' },
			{ key: 'ItemSlot4', label: 'Item Slot 4 (middle-right)', type: 'hotkey', default: '' },
			{ key: 'ItemSlot5', label: 'Item Slot 5 (bottom-left)', type: 'hotkey', default: '' },
			{ key: 'ItemSlot6', label: 'Item Slot 6 (bottom-right)', type: 'hotkey', default: '' },
			{ key: 'ShopsQWERTY', label: 'QWERTY Shop Hotkeys', type: 'checkbox', default: 'false' },
			{
				key: 'DisplayNeutralsSpawnAreaHotkey',
				label: 'Show Neutral Spawn Area Hotkey',
				type: 'hotkey',
				default: '0x12',
				hint: 'Single key only, no modifiers: e.g. "Space", "F1", or "Alt".'
			},
			{
				key: 'DisplayTowerRangeHotkey',
				label: 'Show Tower Range Hotkey',
				type: 'hotkey',
				default: '0x12',
				hint: 'Single key only, no modifiers: e.g. "Space", "F1", or "Alt".'
			}
		]
	},
	{
		id: 'GAMEOPTIONS',
		title: 'Game Options',
		fields: [
			{ key: 'MaxFPS', label: 'Max FPS', type: 'number', default: '60' },
			{ key: 'AutoFPSLimit', label: 'Auto FPS Limit', type: 'checkbox', default: 'false' },
			{
				key: 'LockMouseAtWindow',
				label: 'Lock Mouse in Window',
				type: 'checkbox',
				default: 'false'
			},
			{ key: 'AutoselectHero', label: 'Autoselect Hero', type: 'checkbox', default: 'true' },
			{ key: 'DotA2HPBars', label: 'DotA 2 Style HP Bars', type: 'checkbox', default: 'false' },
			{ key: 'DisplayManabars', label: 'Display Mana Bars', type: 'checkbox', default: 'true' },
			{ key: 'WideScreen', label: 'Widescreen', type: 'checkbox', default: 'false' },
			{
				key: 'TeleportationCanOnlyBeStoppedSoft',
				label: 'Teleport Interrupt (Soft)',
				type: 'checkbox',
				default: 'true'
			},
			{
				key: 'TeleportationCanOnlyBeStopped',
				label: 'Teleport Can Only Be Stopped',
				type: 'checkbox',
				default: 'false'
			},
			{
				key: 'AutoselectSummonedUnitsRadius',
				label: 'Autoselect Summoned Units Radius',
				type: 'number',
				default: '2500'
			},
			{
				key: 'CloseWC3EveryGame',
				label: 'Close WC3 Every Game',
				type: 'checkbox',
				default: 'false'
			},
			{
				key: 'DoubleClickHelperEnabled',
				label: 'Double-Click Helper',
				type: 'checkbox',
				default: 'false'
			}
		]
	},
	{
		id: 'VISUALS',
		title: 'Visuals',
		fields: [
			{
				key: 'Weather',
				label: 'Weather',
				type: 'select',
				default: '',
				options: ['', 'off', 'snow', 'rain', 'wind', 'moonlight', 'random']
			},
			{
				key: 'FogDensity',
				label: 'Fog Density',
				type: 'number',
				default: '192',
				hint: '0-255, affects the minimap.'
			},
			{
				key: 'AlwaysDisplayRangeMarkers',
				label: 'Always Display Range Markers',
				type: 'checkbox',
				default: 'false'
			},
			{
				key: 'AlwaysDisplayHPRegen',
				label: 'Always Display HP Regen',
				type: 'checkbox',
				default: 'false'
			},
			{
				key: 'SameSelectionCircleForEveryone',
				label: 'Same Selection Circle for Everyone',
				type: 'checkbox',
				default: 'false'
			},
			{ key: 'AdvancedTooltips', label: 'Advanced Tooltips', type: 'checkbox', default: 'true' },
			{
				key: 'DisplayRegeneration',
				label: 'Display Regeneration',
				type: 'checkbox',
				default: 'true'
			},
			{ key: 'CustomFPSInfo', label: 'Custom FPS Info', type: 'checkbox', default: 'false' },
			{
				key: 'ChatMessageDuration',
				label: 'Chat Message Duration (seconds)',
				type: 'number',
				default: '10.0',
				step: '0.1'
			},
			{ key: 'EscClearsChat', label: 'Esc Clears Chat', type: 'checkbox', default: 'true' },
			{
				key: 'EscClearsPlayersChat',
				label: 'Esc Clears Players Chat',
				type: 'checkbox',
				default: 'true'
			},
			{
				key: 'StaticSkillsLayout',
				label: 'Static Skills Layout',
				type: 'checkbox',
				default: 'true'
			},
			{
				key: 'AlliesAlwaysGreen',
				label: 'Allies Always Green',
				type: 'checkbox',
				default: 'false'
			},
			{ key: 'BetterFPS', label: 'Better FPS', type: 'checkbox', default: 'false' },
			{
				key: 'DisableDefaultSpace',
				label: 'Disable Default Space (camera jump)',
				type: 'checkbox',
				default: 'false'
			},
			{
				key: 'DisableDefaultMouseWheel',
				label: 'Disable Default Mouse Wheel (camera pan)',
				type: 'checkbox',
				default: 'false'
			}
		]
	}
];
