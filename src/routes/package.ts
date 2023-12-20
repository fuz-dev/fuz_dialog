// generated by src/routes/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_dialog',
	description: 'dialog component for Svelte with Fuz',
	version: '0.5.0',
	public: true,
	license: 'MIT',
	homepage: 'https://dialog.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_dialog',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'@fuz.dev/fuz_library': '*', '@grogarden/util': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.81.0',
		'@fuz.dev/fuz_code': '^0.5.0',
		'@fuz.dev/fuz_library': '^0.23.0',
		'@grogarden/gro': '^0.107.0',
		'@grogarden/util': '^0.18.1',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.0.4',
		'@sveltejs/package': '^2.2.4',
		'@sveltejs/vite-plugin-svelte': '^3.0.1',
		'@typescript-eslint/eslint-plugin': '^6.15.0',
		'@typescript-eslint/parser': '^6.15.0',
		eslint: '^8.56.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.1.1',
		'prettier-plugin-svelte': '^3.1.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.8',
		'svelte-check': '^3.6.2',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Dialog.svelte': {
			svelte: './dist/Dialog.svelte',
			default: './dist/Dialog.svelte',
			types: './dist/Dialog.svelte.d.ts',
		},
		'./dialog.js': {default: './dist/dialog.js', types: './dist/dialog.d.ts'},
		'./Dialogs.svelte': {
			svelte: './dist/Dialogs.svelte',
			default: './dist/Dialogs.svelte',
			types: './dist/Dialogs.svelte.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@fuz.dev/fuz_dialog',
	version: '0.5.0',
	modules: {
		'./Dialog.svelte': {path: 'Dialog.svelte', declarations: []},
		'./dialog.js': {
			path: 'dialog.ts',
			declarations: [
				{name: 'to_dialog_params', kind: 'function'},
				{name: 'Dialog_Params', kind: 'type'},
				{name: 'Dialog_Layout', kind: 'type'},
				{name: 'dialog_layouts', kind: 'variable'},
			],
		},
		'./Dialogs.svelte': {path: 'Dialogs.svelte', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts