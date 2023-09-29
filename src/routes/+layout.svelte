<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '@fuz.dev/fuz_code/prism.css'; // TODO maybe import from Code?
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import Themed from '@fuz.dev/fuz/Themed.svelte';

	import {tomes} from '$routes/tomes.js';

	set_tomes(new Map(tomes.map((t) => [t.name, t])));
</script>

<svelte:head>
	<title>@fuz.dev/fuz_dialog</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
