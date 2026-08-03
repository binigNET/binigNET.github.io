export interface VkCode {
	name: string;
	code: number;
}

const letters: VkCode[] = Array.from({ length: 26 }, (_, i) => ({
	name: String.fromCharCode(65 + i),
	code: 0x41 + i
}));

const digits: VkCode[] = Array.from({ length: 10 }, (_, i) => ({
	name: String(i),
	code: 0x30 + i
}));

const functionKeys: VkCode[] = Array.from({ length: 24 }, (_, i) => ({
	name: `F${i + 1}`,
	code: 0x70 + i
}));

const numpadDigits: VkCode[] = Array.from({ length: 10 }, (_, i) => ({
	name: `Numpad${i}`,
	code: 0x60 + i
}));

const named: VkCode[] = [
	{ name: 'Backspace', code: 0x08 },
	{ name: 'Tab', code: 0x09 },
	{ name: 'Clear', code: 0x0c },
	{ name: 'Enter', code: 0x0d },
	{ name: 'Shift', code: 0x10 },
	{ name: 'Ctrl', code: 0x11 },
	{ name: 'Alt', code: 0x12 },
	{ name: 'Pause', code: 0x13 },
	{ name: 'CapsLock', code: 0x14 },
	{ name: 'Escape', code: 0x1b },
	{ name: 'Space', code: 0x20 },
	{ name: 'PageUp', code: 0x21 },
	{ name: 'PageDown', code: 0x22 },
	{ name: 'End', code: 0x23 },
	{ name: 'Home', code: 0x24 },
	{ name: 'Left', code: 0x25 },
	{ name: 'Up', code: 0x26 },
	{ name: 'Right', code: 0x27 },
	{ name: 'Down', code: 0x28 },
	{ name: 'PrintScreen', code: 0x2c },
	{ name: 'Insert', code: 0x2d },
	{ name: 'Delete', code: 0x2e }
];

const numpadOperators: VkCode[] = [
	{ name: 'NumpadMultiply', code: 0x6a },
	{ name: 'NumpadAdd', code: 0x6b },
	{ name: 'NumpadSeparator', code: 0x6c },
	{ name: 'NumpadSubtract', code: 0x6d },
	{ name: 'NumpadDecimal', code: 0x6e },
	{ name: 'NumpadDivide', code: 0x6f },
	{ name: 'NumLock', code: 0x90 },
	{ name: 'ScrollLock', code: 0x91 }
];

const punctuation: VkCode[] = [
	{ name: ';', code: 0xba },
	{ name: '=', code: 0xbb },
	{ name: ',', code: 0xbc },
	{ name: '-', code: 0xbd },
	{ name: '.', code: 0xbe },
	{ name: '/', code: 0xbf },
	{ name: '`', code: 0xc0 },
	{ name: '[', code: 0xdb },
	{ name: '\\', code: 0xdc },
	{ name: ']', code: 0xdd },
	{ name: "'", code: 0xde }
];

export const vkCodes: VkCode[] = [
	...letters,
	...digits,
	...functionKeys,
	...named,
	...numpadDigits,
	...numpadOperators,
	...punctuation
];
