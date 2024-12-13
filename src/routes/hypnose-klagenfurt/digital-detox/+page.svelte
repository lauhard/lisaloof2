<script lang="ts">
    import Spacer from "$lib/components/Spacer.svelte";
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
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
        name: "Digital Detox",
        serviceType: "Hypnosis Services",
        description:
            "Entfliehen Sie der digitalen Welt und reduzieren Sie Stress durch eine Hypnose-Sitzung, die Ihnen hilft, sich zu erholen und zu entspannen.",
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
                "Personen, die weniger Zeit am Smartphone verbringen möchten.",
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
            url: `${url}${Digitaldetox}`,
            width: 1200,
            height: 628,
        },
        inLanguage: "de",
    };
</script>

<svelte:head>
    <title>Digital Detox duch Hypnose | Lisa Marie Loof M.Sc.</title>
    <link rel="preload" as="image" href="{url}{Digitaldetox}" />
    <meta
        name="description"
        content="Ein Tag ohne Smartphone ist kein Weltuntergang. Digital Detox durch Hypnose mit Lisa Marie Loof, diplomierte Hypnosetrainerin, Psychologin & Coach in Klagenfurt."
    />

    <meta property="og:type" content="website" />
    <meta
        property="og:title"
        content="Digital Detox durch Hypnose | Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Befreien Sie sich von der Smartphone-Sucht durch Hypnose. Erfahren Sie mehr über Digital Detox mit Lisa Marie Loof, Hypnosetrainerin in Klagenfurt."
    />
    <meta property="og:image" content={Digitaldetox} />
    <meta
        property="og:image:alt"
        content="Digital Detox - Bild von einem Smartphone in Nahaufnahme"
    />
    <meta
        property="og:url"
        content="{PUBLIC_CANONICAL_URL}{$page.url.pathname}"
    />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Digitaldetox}
        alt="Digital Detox - Bild von einem Smartphone in Nahaufnahme"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article>
    <div class="">
        <hgroup>
            <h1 class="heading">Digital Detox</h1>
            <p class="sub-heading">
                Ein Tag ohne Smartphone ist kein Weltuntergang
            </p>
        </hgroup>
        <Spacer></Spacer>
        <p class="text">
            Instagram, WhatsApp, TikTok und andere Soziale Medien beeinflussen
            uns täglich auf unterschiedliche Weise. Dieses Thema betrifft nicht
            nur Jugendliche. Auch Erwachsene bleiben vor der Informationsflut
            nicht verschont. Viele Menschen nutzen die Sozialen Medien jedoch in
            einem Übermaß oder fühlen sich übermäßig unwohl, wenn das Handy
            nicht in Reichweite ist.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Eine häufige Ursache dafür ist Dopamin: ein Glückshormon, das bei
            der Handy-Nutzung ausgeschüttet wird. Es führt dazu, dass wir uns
            gut fühlen und diesen Zustand aufrechterhalten wollen. Es entsteht
            das Bedürfnis nach mehr. Mit jedem Klingeln oder Vibrieren des
            Handys findet eine Art Konditionierung statt: Der Griff nach dem
            Handy führt zur Dopamin-Ausschüttung. Wir fühlen uns gut.
        </p>
        <Spacer></Spacer>
        <p class="text">
            In der heutigen Zeit ist es daher wichtig, sich zu fragen, warum wir
            die Sozialen Medien nutzen und wie viel wir wirklich davon brauchen.
            Es geht nicht darum, Soziale Medien zu verteufeln, sondern vielmehr
            darum, selbst zu entscheiden, wie wir damit umgehen möchten und eine
            gesunde Einstellung dazu zu entwickeln.
        </p>
        <Spacer></Spacer>
        <p class="text">Ich freue mich darauf, Sie kennenzulernen.</p>
    </div>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
