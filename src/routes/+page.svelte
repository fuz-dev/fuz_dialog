<script lang="ts">
	import Library_Header from '@fuz.dev/fuz_library/Library_Header.svelte';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {base} from '$app/paths';

	import Dialog_Tome from '$routes/Dialog_Tome.svelte';
	import {tomes} from '$routes/tomes.js';
	import {package_json, src_json} from '$lib/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	set_tomes(new Map(tomes.map((t) => [t.name, t])));
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<Library_Header {pkg} />
		</section>
		<section>
			<Dialog_Tome />
		</section>
		<section class="box">
			<a href="{base}/about" class="chip">about</a>
		</section>
		<section>
			<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		/* TODO hacky */
		margin-bottom: var(--spacing_5);
		padding: var(--spacing_3) 0;
	}
	section {
		margin-bottom: var(--spacing_5);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
