// Hand-curated from aura-bot's src/command.cpp. Public + essential owner commands only.

export type CommandContext = 'lobby' | 'game' | 'any' | 'anywhere';
export type CommandCategory = 'info' | 'lobby' | 'status' | 'game' | 'vote' | 'fun' | 'owner';

export interface BotCommand {
	name: string;
	aliases?: string[];
	syntax?: string;
	description: string;
	context: CommandContext;
	category: CommandCategory;
	verified?: boolean;
	note?: string;
}

export const contextLabels: Record<CommandContext, string> = {
	lobby: 'Lobby',
	game: 'In game',
	any: 'Lobby + game',
	anywhere: 'Anywhere'
};

export const categories: { id: CommandCategory; title: string; description: string }[] = [
	{ id: 'info', title: 'Info', description: 'Bot + server info' },
	{ id: 'lobby', title: 'Lobby', description: 'Before the game starts' },
	{ id: 'status', title: 'Players & status', description: 'Check players, pings, map' },
	{ id: 'game', title: 'In game', description: 'While playing' },
	{ id: 'vote', title: 'Votekick', description: 'Remove a problem player' },
	{ id: 'fun', title: 'Random & fun', description: 'Dice, picks, odds' },
	{
		id: 'owner',
		title: 'Lobby owner',
		description:
			'Owner = whoever hosted. No owner? Any player can claim with !owner. Admins can use these too.'
	}
];

export const botCommands: BotCommand[] = [
	// Info
	{
		name: 'about',
		aliases: ['version'],
		description: 'Bot version',
		context: 'anywhere',
		category: 'info'
	},
	{ name: 'discord', description: 'Discord invite link', context: 'anywhere', category: 'info' },
	{
		name: 'gproxy',
		aliases: ['reconnect'],
		description: 'GProxy download link, auto-reconnect on disconnect',
		context: 'anywhere',
		category: 'info'
	},
	{
		name: 'help',
		aliases: ['git'],
		description: 'Bot source repo link',
		context: 'anywhere',
		category: 'info'
	},
	{
		name: 'status',
		description: 'Bot connection status, lobby listed or not',
		context: 'anywhere',
		category: 'info'
	},
	{
		name: 'sc',
		description: 'How to verify account',
		context: 'anywhere',
		category: 'info',
		note: 'Whisper "sc" to bot on Battle.net to verify'
	},
	{
		name: 'games',
		aliases: ['listgames', 'getgames'],
		description: 'List open lobbies + running games',
		context: 'anywhere',
		category: 'info',
		verified: true
	},
	{
		name: 'stats',
		aliases: ['statsdota'],
		syntax: 'stats [NAME@REALM]',
		description: 'Player stats. statsdota = DotA stats',
		context: 'anywhere',
		category: 'info',
		verified: true,
		note: 'No name = yourself'
	},

	// Lobby
	{
		name: 'ready',
		aliases: ['r'],
		description: 'Mark yourself ready',
		context: 'lobby',
		category: 'lobby'
	},
	{
		name: 'unready',
		aliases: ['afk'],
		description: 'Mark yourself not ready',
		context: 'lobby',
		category: 'lobby'
	},
	{
		name: 'race',
		aliases: ['comprace'],
		syntax: 'race <human|orc|undead|elf|random|roll>',
		description: 'Set your race',
		context: 'lobby',
		category: 'lobby'
	},
	{
		name: 'pin',
		syntax: 'pin <MESSAGE>',
		description: 'Pin msg shown to everyone who joins',
		context: 'lobby',
		category: 'lobby',
		note: 'Max 140 chars'
	},
	{ name: 'unpin', description: 'Remove your pinned msg', context: 'lobby', category: 'lobby' },
	{
		name: 'readystatus',
		aliases: ['checkready', 'askready'],
		description: "List who isn't ready",
		context: 'lobby',
		category: 'lobby'
	},
	{
		name: 'invite',
		syntax: 'invite <NAME@REALM>',
		description: 'Whisper game invite to a friend',
		context: 'lobby',
		category: 'lobby'
	},
	{
		name: 'owner',
		description: 'Claim lobby ownership',
		context: 'lobby',
		category: 'lobby',
		note: 'Only if lobby has no owner'
	},
	{
		name: 'start',
		aliases: ['s', 'go', 'g', 'vs'],
		description: 'Start game countdown',
		context: 'lobby',
		category: 'lobby',
		note: 'Only if owner enabled freestart or lobby has no owner'
	},

	// Players & status
	{
		name: 'check',
		aliases: ['checkme'],
		syntax: 'check [PLAYER]',
		description: 'Slot, ping, realm, verified, owner info',
		context: 'any',
		category: 'status',
		note: 'No name = yourself'
	},
	{
		name: 'checkrace',
		aliases: ['game', 'races'],
		description: "Map info + everyone's race",
		context: 'any',
		category: 'status'
	},
	{
		name: 'getplayers',
		aliases: ['getobservers'],
		description: 'List players + observers',
		context: 'any',
		category: 'status'
	},
	{
		name: 'ping',
		aliases: ['p', 'pingall'],
		description: "Everyone's ping",
		context: 'any',
		category: 'status'
	},
	{
		name: 'latency',
		description: 'Game latency + sync tolerance',
		context: 'any',
		category: 'status'
	},
	{
		name: 'link',
		aliases: ['url'],
		description: 'Map download URL',
		context: 'any',
		category: 'status'
	},
	{
		name: 'kickme',
		aliases: ['dc', 'disconnect'],
		description: 'Disconnect yourself',
		context: 'any',
		category: 'status'
	},

	// In game
	{
		name: 'apm',
		description: 'Your current + max APM',
		context: 'game',
		category: 'game'
	},
	{
		name: 'drop',
		description: 'Drop lagging players',
		context: 'game',
		category: 'game',
		note: 'Anyone if owner gone/lagging, else owner only'
	},

	// Vote
	{
		name: 'votekick',
		syntax: 'votekick <PLAYER>',
		description: 'Start votekick',
		context: 'any',
		category: 'vote',
		note: 'Needs 3+ players. Not during countdown'
	},
	{ name: 'yes', description: 'Vote to kick', context: 'any', category: 'vote' },
	{ name: 'no', description: 'Vote against kick', context: 'any', category: 'vote' },

	// Fun
	{
		name: 'roll',
		syntax: 'roll [N d]<FACES>',
		description: 'Roll dice. Default 1d100',
		context: 'anywhere',
		category: 'fun'
	},
	{
		name: 'flip',
		aliases: ['coin', 'coinflip'],
		syntax: 'flip [CHANCE%]',
		description: 'Coin flip',
		context: 'anywhere',
		category: 'fun'
	},
	{
		name: 'pick',
		syntax: 'pick <A>, <B>, ...',
		description: 'Random pick from options',
		context: 'anywhere',
		category: 'fun'
	},
	{ name: 'pickrace', description: 'Random race', context: 'anywhere', category: 'fun' },
	{ name: 'pickplayer', description: 'Random player', context: 'any', category: 'fun' },
	{
		name: 'pickobs',
		aliases: ['pickobserver'],
		description: 'Random observer',
		context: 'any',
		category: 'fun'
	},
	{
		name: 'prd',
		aliases: ['markov'],
		syntax: 'prd <CHANCE%>',
		description: 'Real proc chance from WC3 pseudo-random',
		context: 'anywhere',
		category: 'fun'
	},
	{
		name: 'prd2',
		aliases: ['markov2'],
		syntax: 'prd2 <CHANCE%>',
		description: 'Alt PRD table',
		context: 'anywhere',
		category: 'fun'
	},

	// Lobby owner
	{
		name: 'start',
		aliases: ['s', 'go', 'g', 'vs'],
		syntax: 'start [force]',
		description: 'Start countdown. force = skip ready checks',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'abort',
		aliases: ['a'],
		description: 'Stop countdown + autostart',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'autostart',
		aliases: ['as'],
		syntax: 'autostart <SLOTS>, <MINUTES>',
		description: 'Auto start at N ready or after M min',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'swap',
		aliases: ['sw'],
		syntax: 'swap <P1>, <P2>',
		description: 'Swap two slots',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'open',
		aliases: ['o'],
		syntax: 'open <SLOT>',
		description: 'Open slot. open kicks occupant, o does not',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'close',
		aliases: ['c'],
		syntax: 'close <SLOT>',
		description: 'Close slot. close kicks occupant, c does not',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'kick',
		aliases: ['k', 'ckick', 'closekick'],
		syntax: 'kick <PLAYER>',
		description: 'Kick player. ckick also closes slot',
		context: 'any',
		category: 'owner',
		note: 'In game: laggers only'
	},
	{
		name: 'comp',
		aliases: ['bot'],
		syntax: 'comp [SLOT], [easy|normal|insane]',
		description: 'Add computer. Default insane',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'fill',
		aliases: ['compall'],
		syntax: 'fill [easy|normal|insane]',
		description: 'Fill open slots with computers',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'hold',
		aliases: ['reserve'],
		syntax: 'hold <P1>, <P2>, ...',
		description: 'Reserve slots for names',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'shuffle',
		aliases: ['sp'],
		description: 'Shuffle players',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'owner',
		syntax: 'owner <NAME>',
		description: 'Give ownership to someone',
		context: 'lobby',
		category: 'owner'
	},
	{
		name: 'lock',
		syntax: 'lock [PLAYER]',
		description: 'Only owner can use cmds. With name: lock one player',
		context: 'any',
		category: 'owner'
	},
	{
		name: 'unhost',
		aliases: ['uh'],
		description: 'Close lobby',
		context: 'lobby',
		category: 'owner'
	},
	{ name: 'end', description: 'End game', context: 'game', category: 'owner' },
	{
		name: 'remake',
		aliases: ['rmk'],
		description: 'End game, rehost as new lobby',
		context: 'game',
		category: 'owner'
	}
];
