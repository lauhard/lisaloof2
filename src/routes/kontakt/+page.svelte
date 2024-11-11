<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { validate } from "$lib/zod/helper/forms";
    import { Phone } from "lucide-svelte";
    import type { ActionData } from "./$types";
    import Form from "$lib/components/Form.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";
    import FormError from "$lib/components/FormError.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Adressbox from "$lib/components/Adressbox.svelte";

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);

    export let form: ActionData;

    let action = "add";
    let leistungen: string | undefined = "";
    let lastnameError: string | undefined = "";
    let firstnameError: string | undefined = "";
    let emailError: string | undefined = "";
    let phoneError: string | undefined = "";
    let myForm: HTMLFormElement;

    const formActionResult = (event: CustomEvent) => {
        const { result } = event.detail;
        console.log("formActionResult: ", result);
        const { success } = result.data;
        if (success) {
            console.log("success", success);
            //toast.push(
            //    "Vielen Dank für Ihre Anfrage. Ich werde mich schnellstmöglich bei Ihnen melden."
            //);
        }
    };
</script>

<svelte:head>
    <title>Kontakt</title>
    <link
        rel="preload"
        as="image"
        href="https://dummyimage.com/300x150/000/fff"
    />

    <meta
        name="description"
        content="Terminanfrage zum unverbindlichen Erstgespräch oder Hypnose-Einheit bei Lisa Marie Loof B.Sc. - Ihr Raum für Hypnose und Weiterentwicklung "
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<article class="">
    <div class="cell hero-contact">
        <article class="contact-box">
            <div class="image-wrapper">
                <!--
                    <img class="" src={LisaContact} alt="" />
                    -->
            </div>
            <div class="contact-info">
                <h1 class="headline-center">Terminanfrage</h1>
                <p class="text text-center attention">
                    Buchen Sie Ihren Termin oder rufen Sie mich an
                </p>
                <p class="text text-center attention mb1">
                    Ich freue mich von Ihnen zu hören
                </p>

                <a
                    class="cta"
                    type="button"
                    title="Telefonnummer anrufen"
                    aria-label="phone link"
                    href="tel:+4367761750953"
                >
                    <Phone />
                    +43 67761750953
                </a>
            </div>
        </article>
    </div>
    <div class="cell service">
        <h2 class="decorator-center">Kontaktformular</h2>
        <p class="important-paragraph text-center mb2">
            Schicken Sie eine unverbindliche Anfrage für Ihr kostenloses
            Erstgespräch oder einen Termin.
        </p>
        <Form
            bind:myForm
            on:formaction={formActionResult}
            --form-width="100%"
            {action}
        >
            <div class="block">
                <label for="serviceType"
                    >Wählen Sie einen Termintyp
                    <Dropdown
                        id={"serviceType"}
                        tabindex={0}
                        options={[
                            {
                                id: 1,
                                key: "Terminanfrage",
                                value: "Terminanfrage",
                            },
                            {
                                id: 2,
                                key: "Erstgespräch",
                                value: "kostenloses Erstgespräch",
                            },
                        ]}
                        on:change={(e) => {
                            console.log(e);
                        }}
                    />
                </label>
                <label for="hypnoseLeistungen">
                    Wählen Sie eine Leistung
                    <Dropdown
                        id={"hypnoseLeistungen"}
                        tabindex={0}
                        on:change={(e) => {
                            console.log(e);
                        }}
                    />
                </label>
                <input
                    id="id"
                    type={action === "update" ? "text" : "hidden"}
                    name="id"
                    readonly
                />
                <label for="url">
                    Nachname
                    <input
                        type="text"
                        tabindex="0"
                        id="lastName"
                        name="lastName"
                        placeholder=""
                        required
                        on:input={(e) => {
                            lastnameError = validate(e);
                        }}
                    />
                    <FormError {form} field="lastName" error={lastnameError} />
                </label>
                <label for="name">
                    Vorname
                    <input
                        type="text"
                        tabindex="0"
                        id="firstName"
                        name="firstName"
                        placeholder=""
                        required
                        on:input={(e) => {
                            firstnameError = validate(e);
                        }}
                    />
                    <FormError
                        {form}
                        field="firstName"
                        error={firstnameError}
                    />
                </label>
                <label for="name">
                    Email
                    <input
                        type="text"
                        tabindex="0"
                        id="email"
                        name="email"
                        placeholder=""
                        required
                        on:input={(e) => {
                            emailError = validate(e);
                        }}
                    />
                    <FormError {form} field="email" error={emailError} />
                </label>
                <label for="name">
                    Telefon
                    <input
                        type="text"
                        tabindex="0"
                        id="phone"
                        name="phone"
                        placeholder=""
                        required
                        on:input={(e) => {
                            phoneError = validate(e);
                        }}
                    />
                    <FormError {form} field="phone" error={phoneError} />
                </label>
                <label for="contact_callback">
                    <Checkbox
                        id="contact_callback"
                        labelText="Bitte um Rückruf"
                    />
                </label>
            </div>
            <button tabindex="0" class="cta" type="submit">Abschicken</button>
            {#if form?.prismaError}
                <FormError error={form?.prismaError} />
            {/if}
        </Form>
    </div>
    <div class="cell address">
        <Adressbox></Adressbox>
    </div>
</article>

<style lang="scss">
    article {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        padding: var(--side);
        align-self: center;
        width: var(--content-width);
        justify-self: center;
    }
</style>
