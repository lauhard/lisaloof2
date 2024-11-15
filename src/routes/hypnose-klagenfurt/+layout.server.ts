import type { LayoutServerLoad } from "./$types";



export const load: LayoutServerLoad = async ({ url }: { url: URL }) => {
    const currentRoute = url.pathname;
    console.log("preload: ", currentRoute);
    return {
        currentRoute
    }
};