<script lang="ts">
    import Faq from "$lib/components/Faq.svelte";
    import PriceTable from "$lib/components/PriceTable.svelte";
    import { AlertTriangle } from "lucide-svelte";
</script>

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
        Vorgespräch. Hierbei möchte ich mir ein Bild von Ihren Erwartungen oder
        bereits vorhandenen Hypnose-Erfahrungen machen. Danach werden wir
        gemeinsam Ihr persönliches Hypnose-Konzept besprechen. Wenn Sie sich
        nach dem Vorgespräch dazu entscheiden, mir Ihr Vertrauen zu schenken,
        stellen wir die Weichen, um gemeinsam an Ihrem Thema zu arbeiten.
    </p>
    <hr />
    <p>
        In der zweiten Einheit können Gedanken und Gefühle, welche nachträglich
        aufgekommen sind besprochen werden. Wir arbeiten intensiv lösungs- und
        ressourcenorientiert an Ihrem Thema.
    </p>
    <hr />
    <p>
        In der dritten Einheit (optional) möchte ich Ihnen anbieten, je nach
        Wunsch weiter an Ihren Themen zu arbeiten, neu aufgekommenes zu
        besprechen oder die Selbsthypnose bei Ihnen zu verankern, sodass Sie die
        Möglichkeit haben, auch selbst in Hypnose zu gehen und zu arbeiten.
    </p>
    <div class="prices">
        <h2>Preise</h2>
        <PriceTable></PriceTable>
    </div>
    <article class="info">
        <AlertTriangle size="50" />
        <h3 class="">Wichtiger Hinweis</h3>
        <p>
            Bei der hier angebotenen Hypnose handelt es sich um KEINE
            therapeutische Hypnose. Das bedeutet, meine Dienste ersetzen
            keinesfalls die eines Arztes oder Psychotherapeuten. Ich handle
            nicht außerhalb meines Tätigkeitsbereiches, ich betreibe keine
            Diagnostik, verschreibe keine Medikamente, gebe keine Versprechen
            jeglicher Art ab oder behandle medizinische oder psychische Leiden.
            Falls Sie an entsprechenden Erkrankungen leiden, wenden Sie sich
            bitte an die zuständigen Fachärzte*innen.
        </p>
        <p>
            Falls ich die Hypnosesitzung aufgrund oben genannter Gründe für
            nicht sinnvoll erachte, behalte ich mir das Recht vor, die Sitzung
            abzulehnen.
        </p>
        <p>Umsatzsteuerbefreit gemäß § 6 Abs. 1 Z 19 UstG</p>
    </article>
    <div class="faqs">
        <h2>FAQs</h2>
        <Faq></Faq>
    </div>
</article>

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
        width: var(--content-width);
        padding: var(--side);
        display: flex;

        justify-content: center;
        align-items: center;
        justify-self: center;
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
