<script lang="ts">
    import { page } from "$app/stores";
    import { phone } from "$lib/project.config";
    import CtaButton from "./Buttons/CtaButton.svelte";

    let telNr = `tel:${phone}`;
</script>

{#if $page.url.pathname !== "/hypnose-klagenfurt"}
    <div class="terminvereinbarung">
        <h2 class="heading">Vereinbaren Sie einen Termin</h2>
        <div>
            <CtaButton
                title="Zum Kontaktformular"
                text="Zum Kontaktformular"
                href="/kontakt"
            ></CtaButton>
            <CtaButton title="Zum Kontaktformular" text={phone} href={telNr}
            ></CtaButton>
        </div>
    </div>
{/if}

<style lang="scss">
    .terminvereinbarung {
        --cta-font-size: 1rem;
        --cta-background: var(--primary);
        --cta-border-color: var(--primary);
        --cta-background-hover: var(--accent);
        --cta-border-color-hover: var(--accent);
        --cta-color-hover: #fff;
        --cta-border-color: var(--primary);
        --cta-letter-spacing: 0.05rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;
        min-width: 100vw;
        padding-block: 5rem;
        background-color: #c9e4d4;
        h2 {
            margin: 0;
            padding: 0;
            margin-bottom: 2rem;
        }
        div {
            display: flex;
            gap: 1rem;
        }
    }
    @media (max-width: 520px) {
        .terminvereinbarung {
            padding-block: 2rem;
            h2 {
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 460px) {
        .terminvereinbarung {
            div {
                flex-direction: column;
                gap: 1rem;
            }
        }
    }
</style>
