<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { serializeSchema } from "$lib";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
    import {
        address,
        city,
        country,
        email,
        phone,
        postalCode,
        url,
    } from "$lib/project.config";
    import { onMount } from "svelte";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Tiefenentspannung durch Hypnose",
        serviceType: "Hypnosis Services",
        description:
            "Entspannen Sie sich und tanken Sie neue Energie mit einer Hypnose-Sitzung, die Ihnen hilft, Stress abzubauen und besser zu schlafen.",
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
            audienceType: "Personen mit Schlafproblemen oder Stress",
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
Die Seite beschreibt die Leistung "Tiefenentspannung" mittels Hypnose und ist eine untergeordnete Seite der Hauptseite "Hypnose Klagenfurt"
Ich benötige eine kurze Beschreibung der Leistung, die ich in den Meta-Tags verwenden kann
Ich benötige og:tags
ich benötige strukturierte Daten
-->
<svelte:head>
    <title>Tiefenentspannung durch Hypnose | Lisa Marie Loof M.Sc.</title>
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <meta
        name="description"
        content="Tiefenentspannung mittels Hypnose mit Lisa Marie Loof, diplomierte Hypnosetrainerin, Psychologin & Coach aus Klagenfurt."
    />

    <meta
        property="og:title"
        content="Tiefenentspannung mittels Hypnose in Klagenfurt"
    />
    <meta
        property="og:description"
        content="Tiefenentspannung durch Hypnose für Körper und Geist. Lassen Sie sich von Lisa Marie Loof, Hypnosetrainerin und Psychologin, begleiten."
    />
    <meta
        property="og:url"
        content="{PUBLIC_CANONICAL_URL}{$page.url.pathname}"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={Tiefenentspannung} />
    <meta
        property="og:image:alt"
        content="Tiefenentspannung - Bild von einem See bei Nacht"
    />
    <meta property="og:locale" content="de_DE" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Tiefenentspannung}
        alt="Tiefentspannung - Bild von einem See bei Nacht"
        srcset=""
        width="100%"
        height="100%"
    />
</div>

<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Tiefenentspannung</h1>
        <p class="sub-heading">Den Körper und Geist in Einklang bringen</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wir befinden uns in einem Zeitalter, welches durch Schnelllebigkeit und
        Hektik geprägt ist. Wir nehmen uns viel zu selten den Raum und die Zeit
        für uns selbst. Einfach mal entspannen und uns eine Auszeit vom Alltag
        nehmen, um unseren Körper und Geist in Einklang zu bringen. Hierfür
        bietet die Tiefenentspannung mittels Hypnose die perfekten
        Rahmenbedingungen.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich würde mich freuen, Sie kennenzulernen und Sie auf dem Weg der
        Tiefenentspannung zu begleiten
    </p>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
