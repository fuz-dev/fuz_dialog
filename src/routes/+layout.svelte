<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import Dialog from '@fuz.dev/fuz/Dialog.svelte';
	import Contextmenu from '@fuz.dev/fuz/Contextmenu.svelte';
	import {createContextmenu} from '@fuz.dev/fuz/contextmenu.js';

	import Settings from '$routes/Settings.svelte';

	const contextmenu = createContextmenu();

	let show_settings = false;
</script>

<svelte:head>
	<title>@fuz.dev/fuz_dialog</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={[
		{
			content: 'Settings',
			icon: '?',
			run: () => {
				show_settings = true;
			},
		},
		{
			content: 'Reload',
			icon: '⟳',
			run: () => {
				location.reload();
			},
		},
	]}
/>

<Themed>
	<slot />
	<Contextmenu {contextmenu} />
	{#if show_settings}
		<Dialog on:close={() => (show_settings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>
