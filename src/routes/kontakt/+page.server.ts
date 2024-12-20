
import { validateFormData } from "$lib/zod/helper/forms";
import type { Actions } from "@sveltejs/kit";
import nodemailer from 'nodemailer';
import { HOSTINGER_MAIL } from "$env/static/private";
import { contactSchema } from "$lib/zod/schemas/contactSchema";
import type { PageServerLoad } from "../hypnose-klagenfurt/[slug]/$types";

export const prerender = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const load: PageServerLoad = async (event) => {
    return {}
}

export const actions: Actions = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    add: async ({ request }): Promise<any> => {
        const formdata = Object.fromEntries((await request.formData()))
        const parsedData = contactSchema.safeParse(formdata);
        const validationResponse = validateFormData(parsedData);
        console.log("parsedData", parsedData);
        console.log("formdata", formdata['contact_callback']);
        const response = {
            success: false,
            zodError: {},
            prismaError: ""
        }
        if (!validationResponse.success) response.zodError = validationResponse.error;
        else {
            const transporter = nodemailer.createTransport({
                host: 'smtp.hostinger.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'praxis@lisaloof.com',
                    pass: `${HOSTINGER_MAIL}`,
                },
            });
            const options = {
                from: 'praxis@lisaloof.com',
                to: 'praxis@lisaloof.com',
                subject: `${formdata['serviceType']} - ${formdata['hypnoseLeistungen']}`,
                text: `
                Email: ${formdata['email']}
                Telefon: ${formdata['phone']}
                Paket: ${formdata['hypnoseLeistungen']}
                Bitte um Rückkruf: ${typeof (formdata['contact_callback']) === "undefined" ? "" : "JA"}
                Anmerkung:
                `,
            };
            const info = await transporter.sendMail(options);
            console.log(info);
            response.success = true;
        }
        return response
    }
};