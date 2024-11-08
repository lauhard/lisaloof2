import type { LayoutServerLoad } from "./$types";
export const prerender = true;
export const load: LayoutServerLoad = async ({ url }) => {
    const currentRoute = url.pathname;
    console.log("preload: ", currentRoute);
    return {
        currentRoute
    }
};