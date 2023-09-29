import {init_tome, type Tome} from '@fuz.dev/fuz_library/tome.js';

import Dialog from '$lib/Dialog.svelte';

export const tomes: Tome[] = [
	{
		name: 'Dialog',
		slug: 'Dialog',
		pathname: '',
		category: 'dialog',
		component: Dialog,
		related: [],
	},
];

for (const t of tomes) init_tome(t);
