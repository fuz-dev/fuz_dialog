<script lang="ts">
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package.js';

	import DialogTome from '$routes/DialogTome.svelte';
	import {tomes} from '$routes/tomes.js';
	import package_json from '../static/.well-known/package.json'; // TODO SvelteKit warning

	set_tomes(new Map(tomes.map((t) => [t.name, t])));

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box">
	<div class="width_md">
		<div class="box">
			<section>
				<LibraryHeader {pkg} />
			</section>
		</div>
		<section>
			<DialogTome />
		</section>
		<section>
			<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	section {
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
