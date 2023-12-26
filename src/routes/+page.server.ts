import { redirect, type Actions, json } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const character = Object.fromEntries(formData);

		const url = new URL(request.url);
		url.searchParams.set('character', JSON.stringify(character));

		return redirect(303, url);
	}
};
