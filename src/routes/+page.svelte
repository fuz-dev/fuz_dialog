<script lang="ts">
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package.js';

	import DialogTome from '$routes/DialogTome.svelte';
	import {tomes} from '$routes/tomes.js';

	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	import package_json from '../static/.well-known/package.json';
	const pkg = parse_package_meta(package_json.homepage, package_json);

	set_tomes(new Map(tomes.map((t) => [t.name, t])));
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<LibraryHeader {pkg} />
		</section>
		<section>
			<DialogTome />
		</section>
		<section>
			<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		margin-bottom: var(--spacing_5);
	}
	section {
		margin-top: var(--spacing_3);
		margin-bottom: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
