// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
        interface Route {
            name: string;
            path: string;
            isPublic: boolean;
            target?: string;
        }
        interface Contact {
            lastName: string,
            firstName: string,
            email: string,
            phone: string,
        }
        interface AnchorOps {
            id: string,
            offset?: number
        }
        interface StructuredData {
            "@context": string,
            "@type": string,
            name: string,
            jobTitle: string,
            description: string,
            url: string,
            image: string, // If this is a URL, you can type it as a string. If it's a different type (like an imported image object), adjust accordingly.
            sameAs: string[],
        };
    }
}

export { Route, Contact, AnchorOps, StructuredData };
