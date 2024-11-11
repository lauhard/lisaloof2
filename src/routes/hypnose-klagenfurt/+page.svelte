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
    import ServiceCard from "$lib/components/Cards/ServiceCard.svelte";
    import { AlertTriangle } from "lucide-svelte";
    import CtaButton2 from "$lib/components/Buttons/CtaButton.svelte";
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

<article class="what-is-hypnose">
    <div class="hero">
        <img
            class="hero-image"
            src={Leistungen}
            alt="Baum auf einem Feld"
            srcset=""
            width="100%"
            height="300px"
        />
    </div>
    <hgroup>
        <h1 class="heading">Hypnose und Weiterentwicklung in Klagenfurt</h1>
        <p class="sub-heading">Was ist Hypnose?</p>
    </hgroup>
    <p>
        Hypnose ist ein bewusstseinsverändernder Zustand, der durch erhöhte
        Aufmerksamkeit, Konzentration und Vorstellungskraft gekennzeichnet ist.
        Eine hypnotische Trance ermöglicht es, individuelle Wahrnehmungen und
        Empfindungen zu verstärken, während kritische Denkprozesse abnehmen.
        Während der Hypnose lenke ich Ihre Aufmerksamkeit auf spezifische
        Gedanken oder Bilder, um positive Veränderungen im Verhalten, in der
        Wahrnehmung oder im emotionalen Zustand zu fördern. Es ist wichtig zu
        betonen, dass Hypnose nicht Kontrollverlust bedeutet und die
        hypnotisierte Person die volle Kontrolle über ihr Handeln und ihre
        Entscheidungen behält.
    </p>
</article>
<article class="hypnose-services">
    <h2 class="heading">Hypnose Leistungen</h2>
    <p class="">
        Hypnosearbeit kann für verschiedenste Themengebiete eingesetzt werden.
    </p>
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
</article>
<article class="additional-services">
    <hgroup>
        <h3 class="heading">Haben Sie ein anderes Anliegen?</h3>
        <p class="sub-heading">
            Sie können sich gerne mit jedem Thema für eine individuelle
            Hypnose-Sitzung bei mir melden.
        </p>
    </hgroup>
    <CtaButton2 title="Zum Kontaktformular" text="Kontaktieren Sie mich"
    ></CtaButton2>
    <p>
        Kontaktieren Sie mich einfach und wir besprechen gemeinsam, das weitere
        Vorgehen. Falls Sie an einem bestimmten Thema oder Problem arbeiten
        möchten, biete ich auch Psychologische Beratung an.
    </p>
    <CtaButton2 title="Zum Kontaktformular"></CtaButton2>
    <p>
        Für weitere Informationen zu den Hypnose Leistungen werfen Sie einen
        Blick auf meine <a href="/hypnose-klagenfurt/leistungen">Leistungen</a>.
    </p>
</article>

<style lang="scss">
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
    }

    .what-is-hypnose {
        max-width: var(--content-width);
        padding: var(--side);
        .sub-heading {
            font-size: 1.2rem;
        }
        p {
            text-align-last: center;
            text-align: justify;
            text-wrap-mode: wrap;
            align-self: center;
            text-align-last: center;
            //max-width: 600px;
            width: 100%;
        }
    }
    .hypnose-services {
        max-width: var(--content-width);
        padding: var(--side);
        margin-top: 4rem;

        p {
            margin-block: 1rem;
            margin-bottom: 2rem;
            text-align-last: center;
        }
        .service-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            height: 100%;
            align-items: center;
            margin-bottom: 1rem;
        }
    }

    .additional-services {
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--surface-3);
        padding-block: 4rem;
        --font-size: 1rem;
        --background: var(--primary);
        --border-color: var(--primary);
        --background-hover: var(--accent);
        --border-color-hover: var(--accent);
        --color: #fff;
        --color-hover: #fff;
        hgroup {
            .sub-heading {
                margin-bottom: 1rem;
            }
        }
        p {
            max-width: 600px;
            text-align-last: center;
            text-size-adjust: auto;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
</style>
