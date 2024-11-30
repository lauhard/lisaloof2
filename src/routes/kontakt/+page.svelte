<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { validate } from "$lib/zod/helper/forms";
    import { MapPin, Phone } from "lucide-svelte";
    import type { ActionData } from "./$types";
    import Form from "$lib/components/Form.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";
    import FormError from "$lib/components/FormError.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Adressbox from "$lib/components/Adressbox.svelte";
    import CtaButton from "$lib/components/Buttons/CtaButton.svelte";
    import kontakt from "$lib/images/kontakt.jpg";

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
    <link rel="preload" as="image" href={kontakt} />

    <meta
        name="description"
        content="Terminanfrage zum unverbindlichen Erstgespräch oder Hypnose-Einheit bei Lisa Marie Loof B.Sc. - Ihr Raum für Hypnose und Weiterentwicklung "
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <div class="hero">
        <img
            class="hero-image"
            src={kontakt}
            alt="kontakt"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>
    <article class="contact">
        <hgroup>
            <h1 class="heading">Kontaktformular</h1>
            <p class="sub-heading">
                Rufen Sie mich an, oder Schicken Sie eine unverbindliche Anfrage
                für Ihr kostenloses Erstgespräch oder einen Termin.
            </p>
        </hgroup>
        <CtaButton
            title="Telefonnummer anrufen"
            ariaLabel="phone link"
            href="tel:+4367761750953"
            text="+4367761750953"
        ></CtaButton>
        <br />
        <br />
        <Form
            bind:myForm
            on:formaction={formActionResult}
            --form-max-width="900px"
            --form-width="100%"
            {action}
        >
            <fieldset class="formfields">
                <legend>Bitte füllen Sie das Formular aus</legend>
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
                <label for="firstName">
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
                <label for="email">
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
                <label for="phone">
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

                <Checkbox id="contact_callback" labelText="Bitte um Rückruf" />
                <br />
                <CtaButton
                    type="submit"
                    text="Formular abschicken"
                    title="Kontaktformular abschicken"
                    tabindex={0}
                ></CtaButton>
            </fieldset>

            {#if form?.prismaError}
                <FormError error={form?.prismaError} />
            {/if}
        </Form>
    </article>

    <article class="address-box">
        <hgroup>
            <h2 class="heading">Praxisadresse</h2>
            <p class="sub-heading">
                Sie finden mich in der wunderschönen Klagenfurter Altstadt
            </p>
        </hgroup>

        <address class="">
            Waagplatz 3, 9020 Klagenfurt <br />
            Österreich
        </address>
        <CtaButton
            href="https://goo.gl/maps/VhgjNbHZmWpUjEwR9"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            title="Karte öffnen"
            text="Karte öffnen"
            ariaLabel="navigate to contact"
        >
            <div style="margin-right:.5rem; margin-bottom:.1rem">
                <MapPin />
            </div>
        </CtaButton>
    </article>
</section>

<style lang="scss">
    article {
        align-self: center;
        justify-self: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--side);
    }
    .formfields,
    .contact,
    .address-box {
        --cta-background: var(--primary);
        --cta-background-hover: var(--accent);
        --cta-color: #fff;
        --cta-color-hover: #fff;
        --cta-border-color: var(--primary);
        --cta-border-color-hover: var(--accent);
        --cta-font-size: 1rem;
        --cta-text-transform: uppercase;
        --cta-word-spacing: 0.6rem;

        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    .address-box {
        background-color: var(--surface-3);
        width: 100%;
        padding-block: 3rem;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        hgroup {
            width: 100%;
        }
        address {
            margin-block: 1rem;
            text-align: center;
            width: 100%;
            display: block;
        }
    }
</style>
