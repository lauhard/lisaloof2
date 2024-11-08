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
    }
}

export { Route, Contact, AnchorOps };
