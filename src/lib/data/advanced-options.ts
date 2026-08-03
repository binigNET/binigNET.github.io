import type { AdvancedOption } from '$lib/utils/configLod';

// Hand-transcribed from "Dota Chat Commands (6.88a4, updated) - English.csv", OPTIONS section.
// Rows whose 3rd column already names a config.lod key are skipped as redundant with the core
// fields in config-schema.ts (-dch, -autoselect, -hpbar, -manabar, -ws, -fd, -weather, -autofps,
// -maxfps, -window, -nospace, -nowheel, -betterfps/-betterfps2, -green).
export const advancedOptions: AdvancedOption[] = [
	{
		id: 'enablehelp',
		command: '-enablehelp',
		altCommand: '-eh',
		paramPlaceholder: '#',
		description: 'Return help-parameter to default; optional # = number of ally'
	},
	{
		id: 'disablehelp',
		command: '-disablehelp',
		altCommand: '-dh',
		paramPlaceholder: '#',
		description: 'Disallow help from certain abilities; optional # = number of ally'
	},
	{
		id: 'enableselection',
		command: '-enableselection',
		altCommand: '-es',
		description: 'Selection helper: your summons and illusions select as soon as they appear'
	},
	{
		id: 'disableselection',
		command: '-disableselection',
		altCommand: '-ds',
		description: 'Return selection-parameter to default'
	},
	{ id: 'ui', command: '-ui', description: 'Hide/display courier deathtimer' },
	{
		id: 'iteminfo',
		command: '-iteminfo',
		altCommand: '-ii',
		description: 'Display items of your teammates in the top-right table'
	},
	{ id: 'md', command: '-md', description: 'Right-click deny toggle' },
	{ id: 'aat', command: '-aat', description: 'Autoattack toggle' },
	{ id: 'cap', command: '-cap', description: "Clan tag over creeps' heads toggle" },
	{
		id: 'hideheronames',
		command: '-hideheronames',
		altCommand: '-hhn',
		description: 'Hide hero names above their models'
	},
	{
		id: 'cam',
		command: '-cam',
		paramPlaceholder: '#',
		description: 'Camera height to # (1500-3000; 1650 default; #=1 -> 1650, #=2 -> 3300)'
	},
	{
		id: 'hideminimapsignals',
		command: '/hideminimapsignals',
		description: 'Disable minimap signals from allies'
	},
	{
		id: 'lat',
		command: '-lat',
		altCommand: '-plat',
		paramPlaceholder: '#',
		description: 'Ingame latency changer, turns off FPS limit'
	},
	{ id: 'showmsg', command: '-showmsg', description: 'Display various ingame messages' },
	{ id: 'hidemsg', command: '-hidemsg', description: 'Hide various ingame messages' },
	{
		id: 'music',
		command: '-music',
		paramPlaceholder: 'ID',
		description: 'Set musical theme by ID'
	},
	{
		id: 'water',
		command: '-water',
		paramPlaceholder: 'R G B',
		description: 'Custom water color'
	},
	{ id: 'mute', command: '-mute', description: 'Mute killstreak announcer' },
	{
		id: 'mutePlayer',
		command: '-mute',
		paramPlaceholder: '#',
		description: 'Mute player #'
	},
	{
		id: 'unmutePlayer',
		command: '-unmute',
		paramPlaceholder: '#',
		description: 'Unmute player #'
	},
	{
		id: 'names',
		command: '-names',
		paramPlaceholder: '#',
		description: 'Toggle naming of players: 1 = numbers, 2 = hero names, other = default'
	},
	{
		id: 'light',
		command: '-light',
		paramPlaceholder: '0-5',
		description: '0 Felwood, 1 Underground, 2 Lordaeron, 3 Dungeon, 4 Dalaran, 5 Ashenvale'
	},
	{ id: 'aoe', command: '-aoe', description: 'Tower radius and neutral spawn area toggle' },
	{ id: 'fps', command: '/fps', description: 'Display/hide FPS and memory usage' },
	{ id: 'nmm', command: '-nmm', description: 'Old style minimap team colors' },
	{
		id: 'tk',
		command: '-tk',
		description: 'Tavern select with arrow keys (auto off after pick stage)'
	},
	{ id: 'hud', command: '-hud', description: 'Hero portraits at the top of the screen' },
	{ id: 'tips', command: '-tips', description: 'Toggle on-death tips' },
	{ id: 'bindreset', command: '-bind reset', description: 'Reload all config-based hotkeys' },
	{
		id: 'bindissue',
		command: '-bindissue',
		paramPlaceholder: '#',
		description: "Fix issues with the map's innate keybinding via config"
	},
	{ id: 'doublef', command: '-doublef', description: 'Toggle F1-F5 working twice' },
	{
		id: 'muteme',
		command: '-mute me',
		description: 'Prevent your messages from reaching allies chat'
	},
	{
		id: 'unmuteme',
		command: '-unmute me',
		description: 'Re-allow your messages to reach allies chat'
	},
	{
		id: 'unshare',
		command: '-unshare',
		altCommand: '-us',
		paramPlaceholder: '#',
		description: 'Remove shared control from player 1-5'
	},
	{
		id: 'squelch',
		command: '/squelch',
		paramPlaceholder: 'NAME',
		description: 'Hide chat messages from NAME'
	},
	{ id: 'ignore', command: '/ignore', paramPlaceholder: 'NAME', description: 'Same as /squelch' },
	{ id: 'clear', command: '-clear', altCommand: '-c', description: 'Clear your chat log' }
];
