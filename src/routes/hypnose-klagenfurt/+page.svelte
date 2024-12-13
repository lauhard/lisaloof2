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
    import Logo from "$lib/images/logo2.webp";
    import ServiceCard from "$lib/components/Cards/ServiceCard.svelte";
    import CtaButton2 from "$lib/components/Buttons/CtaButton.svelte";
    import Faq from "$lib/components/Faq.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import {
        address,
        city,
        country,
        email,
        maps,
        phone,
        postalCode,
        url,
    } from "$lib/project.config";
    import { serializeSchema } from "$lib";
    import { beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Professionelle Hypnose-Dienstleistungen in Klagenfurt",
        serviceType: "Hypnosis Services",
        url: `${url}${$page.url.pathname}`,
        description:
            "Erfahren Sie, wie Ihnen Hypnose bei Raucherentwöhnung, Stressabbau und vielem mehr helfen kann. Individuelle Hypnosesitzungen vor Ort oder online.",
        provider: {
            "@type": "Person",
            name: "Lisa Marie Loof",
            jobTitle: "diplomierte Hypnosetrainerin, Psychologin & Coach",
            address: {
                "@type": "PostalAddress",
                streetAddress: address, // Beispiel: genaue Straße
                postalCode: postalCode, // Beispiel: Postleitzahl
                addressLocality: city, // Stadt
                addressCountry: country, // Land
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Service",
                telephone: phone,
                email: email,
                areaServed: "AT",
                availableLanguage: "de",
            },
            sameAs: maps,
        },
        sameAs: url,
        image: {
            "@type": "ImageObject",
            url: Leistungen,
            width: 1200,
            height: 628,
        },
        offers: [
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/raucherentwoehnung`,
                serviceType: "Hypnosis Services",
                name: "Hypnose zur Raucherentwöhnung",
                description:
                    "Raucherentwöhnung durch Hypnose mit Lisa Marie Loof. Sie erhalten professionelle Unterstützung, um rauchfrei zu werden und Ihre Lebensqualität zu verbessern.",
            },
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/online-hypnose`,
                serviceType: "Hypnosis Services",
                name: "Online Hypnose",
                description:
                    "Genießen Sie die Vorteile professioneller Hypnose bequem von zu Hause aus. Ideal für Personen, die nicht in Klagenfurt ansässig sind.",
            },
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/entspannt-in-die-pruefung`,
                serviceType: "Hypnosis Services",
                name: "Entspannt in die Prüfung / Entspannt vortragen",
                description:
                    "Bereiten Sie sich mit Hypnose auf Prüfungen vor und steigern Sie Ihre Konzentration und Leistungsfähigkeit.",
            },
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/digital-detox`,
                serviceType: "Hypnosis Services",
                name: "Digital Detox",
                description:
                    "Entfliehen Sie der digitalen Welt und reduzieren Sie Stress durch eine Hypnose-Sitzung, die Ihnen hilft, sich zu erholen und zu entspannen.",
            },
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/tiefenentspannung`,
                serviceType: "Hypnosis Services",
                name: "Tiefenentspannung",
                description:
                    "Entspannen Sie sich und tanken Sie neue Energie mit einer Hypnose-Sitzung, die Ihnen hilft, Stress abzubauen und besser zu schlafen.",
            },
            {
                "@type": "Offer",
                url: `${url}/hypnose-klagenfurt/selbstwert-steigern`,
                serviceType: "Hypnosis Services",
                name: "Selbstwert steigern",
                description:
                    "Steigern Sie Ihr Selbstwertgefühl und Ihr Selbstbewusstsein durch Hypnose.",
            },
        ],
    };
</script>

<svelte:window bind:scrollY />

<svelte:head>
    <title
        >Pofessionelle Hypnose-Dienstleistungen in Klagenfurt -
        Raucherentwöhnung, OnlineHypnose & mehr</title
    >
    <meta
        name="description"
        content="Professionelle Hypnose-Dienstleistungen in Klagenfurt. Egal welches Thema Sie angehen möchten, wir erarbeiten ein individuelles Hypnose Konzept."
    />
    <meta
        property="og:title"
        content="Professionelle Hypnose-Dienstleistungen in Klagenfurt – Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Erfahren Sie, wie Ihnen Hypnose bei Raucherentwöhnung, Stressabbau und vielem mehr helfen kann. Jetzt mehr erfahren!"
    />
    <meta property="og:image" content={Leistungen} />
    <meta property="og:url" content="{url}{$page.url.pathname}" />
    <meta property="og:type" content="website" />
    <meta
        property="og:image:alt"
        content="Hypnose Leistungen - Bild von einem Baum auf einem Feld "
    />
    <meta property="og:locale" content="de_DE" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
    <link rel="preload" as="image" href={Rauchfrei} />
    <link rel="preload" as="image" href={Digitaldetox} />
    <link rel="preload" as="image" href={Pruefungsangst} />
    <link rel="preload" as="image" href={Selbstwert} />
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <link rel="preload" as="image" href={OnlineHypnose} />
    <link rel="preload" as="image" href={Leistungen} />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Leistungen}
        alt="Hypnose Leistungen - Bild von einem Baum auf einem Feld"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<article class="what-is-hypnose">
    <hgroup>
        <h1 class="heading">Hypnose und Weiterentwicklung in Klagenfurt</h1>
        <p class="sub-heading">
            Entdecken Sie, wie Hypnose Ihre Lebensqualität verbessern und Sie
            bei der persönlichen Weiterentwicklung unterstützen kann.
        </p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
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
<Spacer></Spacer>
<article class="hypnose-services">
    <h2 class="heading">Hypnose Leistungen</h2>
    <p class="text">
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
                                keine Möglichkeit mich zu besuchen?"
        ></ServiceCard>
        <ServiceCard
            src={Digitaldetox}
            cardTitle="Digital Detox"
            href="/hypnose-klagenfurt/digital-detox"
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
    <CtaButton2
        title="Zum Kontaktformular"
        text="Kontaktieren Sie mich"
        href="/kontakt"
    ></CtaButton2>
    <p>
        Kontaktieren Sie mich einfach und wir besprechen gemeinsam, das weitere
        Vorgehen. Falls Sie an einem bestimmten Thema oder Problem arbeiten
        möchten, biete ich auch Psychologische Beratung an.
    </p>
    <CtaButton2
        title="Zum Kontaktformular"
        text="Zur Psychologischen Beratung"
        href="/psychologische-beratung"
    ></CtaButton2>
    <!--
         <p>
            Für weitere Informationen zu den Hypnose Leistungen werfen Sie einen
            Blick auf <a href="/hypnose-klagenfurt/leistungen"
                >Informationen</a
            >.
        </p>
        -->
</article>
<article class="faqs">
    <h2 class="">Häufig gestellte Fragen</h2>
    <Faq></Faq>
</article>

<style lang="scss">
    .what-is-hypnose,
    .hypnose-services,
    .additional-services {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        justify-self: center;
    }

    .what-is-hypnose {
        max-width: var(--content-width);
        padding: var(--side);
        .sub-heading {
            font-size: 1.2rem;
        }
    }
    .hypnose-services {
        max-width: var(--content-width);
        padding: var(--side);
        margin-top: 1rem;
        --card-font-size: 1rem;

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
        margin-block: 2.5rem !important;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--surface-3);

        padding: var(--side);
        padding-block: 4rem;
        --cta-font-size: 1rem;
        --cta-background: var(--primary);
        --cta-border-color: var(--primary);
        --cta-background-hover: var(--accent);
        --cta-border-color-hover: var(--accent);
        --cta-color: #fff;
        --cta-color-hover: #fff;
        --cta-border-color: var(--primary);
        hgroup {
            .sub-heading {
                margin-bottom: 1rem;
            }
        }
        p {
            max-width: 600px;
            text-align-last: center;
            text-size-adjust: auto;
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }

    .faqs {
        h2 {
            align-self: center;
            text-align: center;
            margin-bottom: 2rem;
        }
        max-width: var(--content-width);
        align-items: flex-start;
        justify-self: center;
        margin: 0 auto;
        margin-bottom: 5rem;
    }
</style>
