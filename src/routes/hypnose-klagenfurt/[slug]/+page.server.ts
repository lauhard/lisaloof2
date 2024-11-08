import { error } from '@sveltejs/kit';
export const prerender = false;
import type { PageServerLoad } from "./$types";
export const load: PageServerLoad = async (data) => {
    const { params } = data;
    throw error(404, {
        message: `Die Seite: '${params.slug}' existiert nicht.`
    });
};