<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Selbstwert from "$lib/images/selbstwert-min.webp";
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
            "Steigern Sie Ihr Selbstwertgefühl und Ihr Selbstbewusstsein durch Hypnose.",
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
    };
</script>

<svelte:head>
    <title>Selbstwert steigern durch Hypnpse | Lisa Marie Loof M.Sc.</title>
    <link rel="preload" as="image" href={Selbstwert} />
    <meta
        name="description"
        content="Selbstwert steigern mittels Hypnose mit Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <meta
        property="og:title"
        content="Selbstwert steigern durch Hypnose | Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Verbessern Sie Ihr Selbstwertgefühl mit professioneller Hypnose bei Lisa Marie Loof M.Sc."
    />
    <meta property="og:image" content={Selbstwert} />
    <meta property="og:url" content="{url}{$page.url.pathname}" />
    <meta property="og:type" content="website" />
    <meta
        property="og:image:alt"
        content="Selbstwert steigern - Papier am Fenster mit der Aufschrift mindfulness "
    />
    <meta property="og:locale" content="de_DE" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>
<div class="hero">
    <img
        class="hero-image"
        src={Selbstwert}
        alt="Selbstwert steigern - Papier am Fenster mit der Aufschrift mindfulness"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Selbswert steigern durch Hypnose</h1>
        <p class="sub-heading">Sie sind gut, so wie Sie sind!</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wir alle sind viel zu oft von negativen Einflüssen umgeben, die unser
        Selbstwertgefühl beeinträchtigen. Es ist daher wichtig, dass wir uns mit
        unseren Gefühlen, Gedanken und Handlungen auseinandersetzen. Indem wir
        Verantwortung für unser Handeln übernehmen, können wir selbstbewusst
        durchs Leben gehen. Des Weiteren wirkt der Selbstwert als ein wichtiger
        Schutzfaktor gegen Stress und ist somit ein positiver Faktor für unsere
        Widerstandskraft und Gesundheit.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich würde mich freuen, Sie kennenzulernen und Sie darin zu unterstützen,
        Ihren Selbstwert zu steigern und sich einfach wohlzufühlen.
    </p>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
