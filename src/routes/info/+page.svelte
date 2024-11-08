<script lang="ts">
    import Faq from "$lib/components/Faq.svelte";
    import PriceTable from "$lib/components/PriceTable.svelte";
</script>

<section>
    <article class="hypnose">
        <div class=" hero">
            <img
                class="hero-image"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Baum auf einem Feld"
                srcset=""
                width="100%"
                height="300px"
            />
        </div>
        <h1 class="heading">Ablauf der Hypnosesitzung</h1>
        <p class="sub-heading">Meine Einheiten sind wie folgt aufgebaut</p>
        <p>
            Die erste Einheit beinhaltet ein kostenloses und unverbindliches
            Vorgespräch. Hierbei möchte ich mir ein Bild von Ihren Erwartungen
            oder bereits vorhandenen Hypnose-Erfahrungen machen. Danach werden
            wir gemeinsam Ihr persönliches Hypnose-Konzept besprechen. Wenn Sie
            sich nach dem Vorgespräch dazu entscheiden, mir Ihr Vertrauen zu
            schenken, stellen wir die Weichen, um gemeinsam an Ihrem Thema zu
            arbeiten.
        </p>
        <hr />
        <p>
            In der zweiten Einheit können Gedanken und Gefühle, welche
            nachträglich aufgekommen sind besprochen werden. Wir arbeiten
            intensiv lösungs- und ressourcenorientiert an Ihrem Thema.
        </p>
        <hr />
        <p>
            In der dritten Einheit (optional) möchte ich Ihnen anbieten, je nach
            Wunsch weiter an Ihren Themen zu arbeiten, neu aufgekommenes zu
            besprechen oder die Selbsthypnose bei Ihnen zu verankern, sodass Sie
            die Möglichkeit haben, auch selbst in Hypnose zu gehen und zu
            arbeiten.
        </p>
        <div class="prices">
            <h2>Preise</h2>
            <PriceTable></PriceTable>
        </div>
        <div class="faqs">
            <h2>FAQs</h2>
            <Faq></Faq>
        </div>
    </article>
</section>

<style lang="scss">
    section {
        display: flex;
        height: var(--section-height);
        width: var(--content-width);
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    article {
        padding: var(--content-padding, 0 1rem);
        width: var(--content-width);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .prices,
    .faqs {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        justify-content: center;
        align-self: center;
    }
</style>
