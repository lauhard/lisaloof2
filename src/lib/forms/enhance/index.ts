import { applyAction } from "$app/forms";
import { invalidateAll } from "$app/navigation";
import type { ActionResult } from "@sveltejs/kit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const formAction = async ({ form, data, action, cancel, submitter }: any, callback?: (arg0: string, arg1: { result: any; }) => void) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (action: { result: ActionResult<Record<string, any>, Record<string, any>>; }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = action.result as ActionResult<Record<string, any>, Record<string, any>>
        const isValid = result.type

        // console.log("isvalid", isValid)
        if (isValid === "success") {
            if (result?.data?.success) {
                form.reset();
            }
            // console.log("result.data",result.data)
            await invalidateAll(); // run all load functions
            await applyAction(result) // pass form data
        }
        if (typeof (callback) == "function")
            callback("formaction", { "result": result })
    }
}