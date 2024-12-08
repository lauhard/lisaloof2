<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { Check } from "lucide-svelte";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import { serializeSchema } from "$lib";
    import {
        address,
        city,
        country,
        email,
        phone,
        postalCode,
        url,
    } from "$lib/project.config";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Online Hypnose",
        serviceType: "Hypnosis Services",
        description:
            "Online Hypnose mit Lisa Marie Loof – Hypnose bequem von zu Hause aus.",
        url: `${url}${$page.url.pathname}`,
        provider: {
            "@type": "Person",
            name: "Lisa Marie Loof",
            jobTitle: "diplomierte Hypnosetrainerin, Psychologin & Coach",
        },
        areaServed: {
            "@type": "Place",
            name: "Klagenfurt",
        },
        audience: {
            "@type": "Audience",
            audienceType:
                "Personen, die nicht aus dem Raum Klagenfurt kommen oder nicht mobil sind.",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Service",
            telephone: phone,
            email: email,
            areaServed: "AT",
            availableLanguage: "de",
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: address, // Beispiel: genaue Straße
            postalCode: postalCode, // Beispiel: Postleitzahl
            addressLocality: city, // Stadt
            addressCountry: country, // Land
        },
        sameAs: url,
    };
</script>

<!--
Diese Seite bitte für SEO optimieren
Die Seite beschreibt die Leistung "Online Hypnose" mittels Hypnose und ist eine untergeordnete Seite der Hauptseite "Hypnose Klagenfurt"
Ich benötige eine kurze Beschreibung der Leistung, die ich in den Meta-Tags verwenden kann
Ich benötige og:tags
ich benötige strukturierte Daten
-->
<svelte:head>
    <title>Online Hypnose | Lisa Marie Loof M.Sc.</title>
    <link rel="preload" as="image" href={OnlineHypnose} />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin, Psychologin und Coach aus Klagenfurt"
    />
    <meta
        property="og:title"
        content="Online Hypnose | Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Erleben Sie Online Hypnose mit Lisa Marie Loof M.Sc. – Hypnose bequem von zu Hause aus. Arbeiten Sie an Ihren Themen unabhängig von Ihrem Standort.."
    />
    <meta
        property="og:url"
        content="{PUBLIC_CANONICAL_URL}{$page.url.pathname}"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={OnlineHypnose} />
    <meta
        property="og:image:alt"
        content="Online Hypnose - Bild von einer Frau mit Kopfhörern liegend auf einem Sofa."
    />
    <meta property="og:locale" content="de_DE" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={OnlineHypnose}
        alt="Online Hypnose - Bild von einer Frau mit Kopfhörern liegend auf einem Sofa."
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Online Hypnose</h1>
        <p class="sub-heading">Hypnose bequem von Zuhause</p>
    </hgroup>
    <p class="text">
        Wir arbeiten in Hypnose mit Ihrem Unterbewusstsein und dafür müssen Sie
        sich nicht physisch mit mir in einem Raum befinden. Es ist also möglich,
        unabhängig von Ihrem Standort Hypnose in Anspruch zu nehmen und an Ihren
        Themen zu arbeiten.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Wenn Sie also nicht aus dem Raum Klagenfurt kommen und gerne mit mir
        zusammenarbeiten wollen, ist Online Hypnose die perfekte Möglichkeit
        dafür.
    </p>
    <Spacer></Spacer>
</article>

<article class="prequisits">
    <h3 class="">Voraussetzungen für eine erfolgreiche Online Hypnose:</h3>
    <section>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>Eine stabile Internetverbindung</p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>
                Einen Laptop, ein Tablet oder Smartphone mit einer Webcam,
                Mikrofon und Lautsprechern <br />(Hierbei sollten Tablet oder
                Smartphone fest installiert sein, damit Sie Ihre Hände frei
                haben)
            </p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>
                Einen Raum oder Ort mit einem bequemen Stuhl, einer Couch oder
                Sessel
            </p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p class="">
                Die Umgebung sollte entsprechend ruhig sein und ihre
                Privatsphäre gewahrt
            </p>
        </div>
    </section>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
    .prequisits {
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        align-self: center;
        background-color: var(--surface-3);
        width: 100%;
        padding: var(--side);
        padding-block: 3rem;
        max-width: var(--content-width);

        section {
            margin-top: 2rem;
            align-self: center;
            max-width: 700px;
            width: 100%;
            .prequisit {
                display: flex;
                flex-direction: row;
                width: 100%;
                p {
                    margin-left: 1rem;
                }
            }
        }
    }
</style>
