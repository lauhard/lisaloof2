<script lang="ts">
    let scrollY = $props();
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
    import Selbstwert from "$lib/images/selbstwert-min.webp";
    import Tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import Leistungen from "$lib/images/leistungen.webp";
    import ServiceCard from "$lib/components/ServiceCard.svelte";
</script>

<svelte:window bind:scrollY />

<svelte:head>
    <title>Hypnose Leistungen</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <link rel="preload" as="image" href={Digitaldetox} />
    <link rel="preload" as="image" href={Pruefungsangst} />
    <link rel="preload" as="image" href={Selbstwert} />
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <link rel="preload" as="image" href={OnlineHypnose} />
    <link rel="preload" as="image" href={Leistungen} />
    <meta
        name="description"
        content="Raucherentwöhnung, Selbstwert oder Reinkarnation, egal welches Thema Sie angehen möchten, ich arbeite mit Ihnen und einem individuellen Hypnose Konzept."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="page">
    <article class="what-is-hypnose">
        <div class="hero">
            <img
                class="hero-image"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Baum auf einem Feld"
                srcset=""
                width="100%"
                height="300px"
            />
        </div>
        <hgroup>
            <h1 class="">Hypnose und Weiterentwicklung in Klagenfurt</h1>
            <p class="">Meine Einheiten sind wie folgt aufgebaut</p>
        </hgroup>
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
    </article>
    <section class="hypnose-services">
        <hgroup>
            <h2>Hypnose Leistungen</h2>
            <p>
                Hypnosearbeit kann für verschiedenste Themengebiete eingesetzt
                werden. Sollten Sie Interesse an einer Sitzung zur Regression
                oder Reinkarnation haben, biete ich ebenfalls die Möglichkeit
                einer Zusammenarbeit an.
            </p>
        </hgroup>
        <div class="service-wrapper">
            <ServiceCard
                src={Rauchfrei}
                cardTitle="Raucherentwöhnung"
                href="/hypnose-klagenfurt/raucherentwoehnung"
                btnTitle="Erfahren Sie mehr zur Raucherentwöhnung"
                descr=" Sie wollen endlich rauchfrei werden und wieder
                            gesünder leben?"
            ></ServiceCard>
            <ServiceCard
                src={OnlineHypnose}
                cardTitle="Online Hypnose"
                href="/hypnose-klagenfurt/online-hypnose"
                btnTitle="Erfahren Sie mehr zu Online-Hypnose"
                descr="  Sie befinden Sich nicht in Klagenfurt oder haben
                            keine Möglich keit mich zu besuchen?"
            ></ServiceCard>
            <ServiceCard
                src={Digitaldetox}
                cardTitle="Digital Detox"
                href="/hypnose-klagenfurt/digital-hypndetoxose"
                btnTitle="Erfahren Sie mehr zu Digital-Detox"
                descr="Sie werden nervös wenn Ihr Smartphone nicht bei
                                Ihnen ist?"
            ></ServiceCard>
            <ServiceCard
                src={Pruefungsangst}
                cardTitle="Prüfungsangst"
                href="/hypnose-klagenfurt/entspannt-in-die-pruefung"
                btnTitle="Erfahren Sie mehr zu Entspannt in die Prüfung"
                descr="Prüfungen versetzen Sie in den Ausnahmezustand
                                oder es fällt Ihnen schwer vor Menschen zu
                                sprechen?"
            ></ServiceCard>
            <ServiceCard
                src={Tiefenentspannung}
                cardTitle="Tiefenentspannung"
                href="/hypnose-klagenfurt/tiefenentspannung"
                btnTitle="Erfahren Sie mehr zu Tiefenentspannung"
                descr="Sie können nicht schlafen oder sind oft
                                gestresst?"
            ></ServiceCard>
            <ServiceCard
                src={Selbstwert}
                cardTitle="Selbstwert steigern"
                href="/hypnose-klagenfurt/selbstwert-steigern"
                btnTitle="Erfahren Sie mehr zu Selbstwert steigern"
                descr="Sie möchten an Ihren Selbsbewusstein arbeiten oder negative Gewohnheiten ablegen?"
            ></ServiceCard>
        </div>
    </section>
    <aside>
        <p class="">Sie können sich gerne mit jedem Anliegen bei mir melden</p>
    </aside>
</section>

<style lang="scss">
    .page {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: var(--content-width);
        padding: var(--side);
    }
    .hypnose-services {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .service-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }
</style>
