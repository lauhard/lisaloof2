<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
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
        name: "Entspannt in die Prüfung / Entspannt vortragen",
        serviceType: "Hypnosis Services",
        description:
            "Bereiten Sie sich mit Hypnose auf Prüfungen vor und steigern Sie Ihre Konzentration und Leistungsfähigkeit.",
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
                "Personen, die sich auf Prüfungen vorbereiten oder ihre Konzentration steigern möchten.",
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
        image: {
            "@type": "ImageObject",
            url: `${url}${Pruefungsangst}`,
            width: 1200,
            height: 628,
        },
        inLanguage: "de",
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
    <title>Entspannt in die Prüfung / Entspannt vortragen</title>
    <link rel="preload" as="image" href="{url}{Pruefungsangst}" />
    <meta
        name="description"
        content="Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose mit Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin, Psychologin & Coach in Klagenfurt"
    />
    <meta
        property="og:title"
        content="Entspannt in die Prüfung / Entspannt vortragen - Hypnose in Klagenfurt"
    />
    <meta
        property="og:description"
        content="Mit Hypnose, Prüfungen und Vorträge entspannt meistern mit Unterstützung von Lisa Marie Loof, diplomierte Hypnosetrainerin in Klagenfurt."
    />
    <meta property="og:image" content={Pruefungsangst} />
    <meta
        property="og:image:alt"
        content="Entspannt in die Prüfung - Bild von Stühlen eines leeren Hörsaals"
    />
    <meta
        property="og:url"
        content="{PUBLIC_CANONICAL_URL}{$page.url.pathname}"
    />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="de_DE" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Pruefungsangst}
        alt="Entspannt in die Prüfung - Bild von Stühlen eines leeren Hörsaals"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article>
    <hgroup>
        <h1 class="heading">Entspannt in die Prüfung - Entspannt vortragen</h1>
        <p class="sub-heading">
            Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose
        </p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wer kennt es nicht? Es steht eine Prüfung oder ein wichtiger Vortrag an
        und die Aufregung steigt. Wir bekommen schwitzige Hände oder unser
        Herzschlag erhöht sich. Bei manchen Menschen kann dies sogar zu einem
        kompletten Blackout führen, was sie nachhaltig beschäftigt oder
        belastet. Mittels Hypnose ist es möglich, sich diese Situationen genauer
        anzuschauen und zu verändern.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich möchte Sie darin unterstützen, entspannter Vorträge zu halten oder
        Prüfungen zu meistern und zusätzlich Ihr Selbstbewusstsein zu stärken.
    </p>
</article>

<style lang="scss">
    .hero-image {
        object-position: center -360px;
    }
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
