<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardTitle from '$lib/components/ui/CardTitle.svelte';
	import CardDescription from '$lib/components/ui/CardDescription.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Checkbox from '$lib/components/ui/Checkbox.svelte';
	import Field, { inputClass } from '$lib/components/ui/Field.svelte';
	import HotkeyKey from '$lib/components/ui/HotkeyKey.svelte';
	import { cn } from '$lib/utils/cn';
	import configTemplate from '$lib/data/config-template.lod?raw';
	import { coreSections } from '$lib/data/config-schema';
	import { advancedOptions } from '$lib/data/advanced-options';
	import {
		createDefaultFormState,
		countEnabledAdvanced,
		parseConfigLod,
		applyParsedToFormState,
		serializeConfigLod,
		MAX_START_CHAT_STRINGS
	} from '$lib/utils/configLod';

	let formState = createDefaultFormState(coreSections, advancedOptions);
	let showAdvanced = false;
	let uploadWarnings: string[] = [];
	let fileInput: HTMLInputElement;

	const hotkeysSection = coreSections.find((s) => s.id === 'HOTKEYS')!;
	function fieldsByPrefix(prefix: string) {
		return hotkeysSection.fields.filter((f) => f.key.startsWith(prefix) && /\d+$/.test(f.key));
	}
	const skillSlotFields = fieldsByPrefix('SkillSlot').filter(
		(f) => !f.key.startsWith('ASkillSlot')
	);
	const autocastFields = fieldsByPrefix('ASkillSlot');
	const itemSlotFields = fieldsByPrefix('ItemSlot');
	const groupedKeys = new Set(
		[...skillSlotFields, ...autocastFields, ...itemSlotFields].map((f) => f.key)
	);
	const hotkeyRestFields = hotkeysSection.fields.filter((f) => !groupedKeys.has(f.key));

	function handleHotkeyKeyInput(key: string, e: Event) {
		formState.core[key] = (e.currentTarget as HTMLInputElement).value;
	}

	$: enabledAdvancedCount = countEnabledAdvanced(formState);
	$: tooManyAdvanced = enabledAdvancedCount > MAX_START_CHAT_STRINGS;

	function handleGenerate() {
		if (tooManyAdvanced) return;

		const output = serializeConfigLod(configTemplate, formState, coreSections, advancedOptions);
		const blob = new Blob([output], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'config.lod';
		a.click();
		URL.revokeObjectURL(url);
	}

	function handleUploadClick() {
		fileInput?.click();
	}

	function handleCheckboxFieldChange(key: string, e: Event) {
		const checked = (e.currentTarget as HTMLInputElement).checked;
		formState.core[key] = checked ? 'true' : 'false';
	}

	async function handleFileChange(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		const text = await file.text();
		const parsed = parseConfigLod(text);
		const result = applyParsedToFormState(parsed, coreSections, advancedOptions);
		formState = result.state;
		uploadWarnings = result.warnings;
		input.value = '';
	}
</script>

<svelte:head>
	<title>Config Generator</title>
	<meta name="description" content="Generate a WC3Loader config.lod file for binig.NET" />
</svelte:head>

<div class="mx-auto flex max-w-3xl flex-col gap-6">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<h1 class="font-fantasy text-3xl font-bold text-primary">Config Generator</h1>
		<div class="flex gap-2">
			<input
				bind:this={fileInput}
				type="file"
				accept=".lod,.txt"
				class="hidden"
				on:change={handleFileChange}
			/>
			<Button variant="frame" on:click={handleUploadClick}>Upload config.lod</Button>
			<Button on:click={handleGenerate} disabled={tooManyAdvanced}>Generate config.lod</Button>
		</div>
	</div>

	{#if uploadWarnings.length}
		<Card>
			<CardContent class="text-sm">
				<p class="font-semibold text-foreground">
					Some settings from your file were not recognized and were skipped:
				</p>
				<ul class="mt-1 list-disc pl-5 text-muted-foreground">
					{#each uploadWarnings as warning}
						<li>{warning}</li>
					{/each}
				</ul>
			</CardContent>
		</Card>
	{/if}

	{#each coreSections as section (section.id)}
		<Card>
			<CardHeader>
				<CardTitle>{section.title}</CardTitle>
				{#if section.description}
					<CardDescription>{section.description}</CardDescription>
				{/if}
			</CardHeader>
			<CardContent class="flex flex-col gap-4">
				{#if section.id === 'HOTKEYS'}
					<div class="flex flex-col gap-1">
						<p
							class="font-fantasy text-xs font-semibold tracking-wide text-muted-foreground uppercase"
						>
							Skill Slots
						</p>
						<div class="flex gap-2">
							{#each skillSlotFields as field (field.key)}
								<HotkeyKey
									id={field.key}
									value={formState.core[field.key]}
									cornerLabel={field.key.match(/\d+$/)?.[0]}
									hint={field.hint}
									on:input={(e) => handleHotkeyKeyInput(field.key, e)}
								/>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-1">
						<p
							class="font-fantasy text-xs font-semibold tracking-wide text-muted-foreground uppercase"
						>
							Autocast Skill Slots
						</p>
						<div class="flex gap-2">
							{#each autocastFields as field (field.key)}
								<HotkeyKey
									id={field.key}
									value={formState.core[field.key]}
									cornerLabel={field.key.match(/\d+$/)?.[0]}
									hint={field.hint}
									on:input={(e) => handleHotkeyKeyInput(field.key, e)}
								/>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-1">
						<p
							class="font-fantasy text-xs font-semibold tracking-wide text-muted-foreground uppercase"
						>
							Item Slots
						</p>
						<div class="grid w-fit grid-cols-2 gap-2">
							{#each itemSlotFields as field (field.key)}
								<HotkeyKey
									id={field.key}
									value={formState.core[field.key]}
									cornerLabel={field.key.match(/\d+$/)?.[0]}
									hint={field.hint}
									on:input={(e) => handleHotkeyKeyInput(field.key, e)}
								/>
							{/each}
						</div>
					</div>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#each hotkeyRestFields as field (field.key)}
							{#if field.type === 'checkbox'}
								<Checkbox
									id={field.key}
									checked={formState.core[field.key] === 'true'}
									on:change={(e) => handleCheckboxFieldChange(field.key, e)}
								>
									{field.label}
								</Checkbox>
							{:else}
								<Field label={field.label} id={field.key} hint={field.hint}>
									<input
										id={field.key}
										type="text"
										class={inputClass}
										value={formState.core[field.key]}
										on:input={(e) => (formState.core[field.key] = e.currentTarget.value)}
									/>
								</Field>
							{/if}
						{/each}
					</div>
				{:else}
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#each section.fields as field (field.key)}
							{#if field.type === 'checkbox'}
								<Checkbox
									id={field.key}
									checked={formState.core[field.key] === 'true'}
									on:change={(e) => handleCheckboxFieldChange(field.key, e)}
								>
									{field.label}
								</Checkbox>
							{:else if field.type === 'select'}
								<Field label={field.label} id={field.key} hint={field.hint}>
									<select
										id={field.key}
										class={inputClass}
										value={formState.core[field.key]}
										on:change={(e) => (formState.core[field.key] = e.currentTarget.value)}
									>
										{#each field.options ?? [] as opt}
											<option value={opt}>{opt === '' ? '(default)' : opt}</option>
										{/each}
									</select>
								</Field>
							{:else}
								<Field label={field.label} id={field.key} hint={field.hint}>
									<input
										id={field.key}
										type={field.type === 'number' ? 'number' : 'text'}
										step={field.step}
										class={inputClass}
										value={formState.core[field.key]}
										on:input={(e) => (formState.core[field.key] = e.currentTarget.value)}
									/>
								</Field>
							{/if}
						{/each}
					</div>
				{/if}
			</CardContent>
		</Card>
	{/each}

	<Card>
		<CardHeader class="flex-row items-center justify-between">
			<CardTitle>Advanced Configuration</CardTitle>
			<Button variant="frame" on:click={() => (showAdvanced = !showAdvanced)}>
				{showAdvanced ? 'Hide' : 'Show'}
			</Button>
		</CardHeader>
		{#if showAdvanced}
			<CardContent class="flex flex-col gap-3">
				<CardDescription>
					These map to chat commands typed automatically at game start (max
					{MAX_START_CHAT_STRINGS} at once).
				</CardDescription>
				{#if tooManyAdvanced}
					<p class="rounded border border-primary bg-background-elevated p-2 text-sm text-primary">
						{enabledAdvancedCount} advanced options are enabled, but only {MAX_START_CHAT_STRINGS}
						slots are available. Disable {enabledAdvancedCount - MAX_START_CHAT_STRINGS} of them to generate.
					</p>
				{/if}
				{#each advancedOptions as opt (opt.id)}
					<div
						class="flex flex-col gap-2 border-b border-border pb-3 last:border-0 sm:flex-row sm:items-start sm:gap-3"
					>
						<Checkbox
							id={opt.id}
							class="sm:w-2/3"
							bind:checked={formState.advanced[opt.id].enabled}
						>
							<span class="font-mono text-xs text-primary">{opt.command}</span>
							{#if opt.altCommand}
								<span class="font-mono text-xs text-muted-foreground"> / {opt.altCommand}</span>
							{/if}
							<span> — {opt.description}</span>
						</Checkbox>
						{#if opt.paramPlaceholder}
							<input
								class={cn(
									inputClass,
									'sm:w-1/3',
									!formState.advanced[opt.id].enabled && 'opacity-50'
								)}
								placeholder={opt.paramPlaceholder}
								value={formState.advanced[opt.id].param}
								disabled={!formState.advanced[opt.id].enabled}
								on:input={(e) => (formState.advanced[opt.id].param = e.currentTarget.value)}
							/>
						{/if}
					</div>
				{/each}
			</CardContent>
		{/if}
	</Card>
</div>
