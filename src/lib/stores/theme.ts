import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function sideEffect(newTheme: Theme) {
	if (!browser) return;
	document.documentElement.dataset.theme = newTheme;
	localStorage.setItem('theme', newTheme);
}

function createThemeStore() {
	const initial: Theme = browser
		? (document.documentElement.dataset.theme as Theme) || 'dark'
		: 'dark';

	const { subscribe, update } = writable<Theme>(initial);

	return {
		subscribe,
		toggle() {
			update((current) => {
				const next: Theme = current === 'dark' ? 'light' : 'dark';
				sideEffect(next);
				return next;
			});
		},
		set(newTheme: Theme) {
			sideEffect(newTheme);
			update(() => newTheme);
		}
	};
}

export const theme = createThemeStore();
