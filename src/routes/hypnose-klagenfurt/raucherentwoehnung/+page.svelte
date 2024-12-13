<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { serializeSchema } from "$lib";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
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

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Raucherentwöhnung durch Hypnose",
        serviceType: "Hypnosis Services",
        description:
            "Raucherentwöhnung durch Hypnose mit Lisa Marie Loof. Sie erhalten professionelle Unterstützung, um rauchfrei zu werden und Ihre Lebensqualität zu verbessern.",
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
            audienceType: "Personen, die mit dem Rauchen aufhören möchten",
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
            url: Rauchfrei,
            width: 1200,
            height: 628,
        },
        inLanguage: "de",
    };
</script>

<svelte:head>
    <title>Raucherentwöhnung durch Hypnose | Lisa Marie Loof M.Sc.</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <meta
        name="description"
        content="Sie möchten rauchfrei werden? Raucherentwöhnung durch Hypnose mit Lisa Marie Loof, diplomierte Hypnosetrainerin, Psychologin & Coach in Klagenfurt."
    />
    <meta
        property="og:title"
        content="Raucherentwöhnung durch Hypnose | Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Sie möchten rauchfrei werden? Nutzen Sie die bewährte Methode der Raucherentwöhnung durch Hypnose. Lisa Marie Loof, diplomierte Hypnosetrainerin, Psychologin & Coach, hilft Ihnen, nachhaltig von der Zigarette loszukommen."
    />
    <meta property="og:url" content="{url}{$page.url.pathname}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={Rauchfrei} />
    <meta
        property="og:image:alt"
        content="Symbolische Darstellung einer abgebrannten Zigarett"
    />
    <meta property="og:locale" content="de_DE" />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />

    {@html serializeSchema(structuredData)}
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Rauchfrei}
        alt="Hypnose Raucherentwöhnung - symbolische Darstellung einer abgebrannten Zigarette"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Raucherentwöhnung durch Hypnose</h1>
        <p class="sub-heading">Rauchfrei werden und Lebensqualität steigern</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Zigaretten enthalten viele äußerst toxische Substanzen, wie
        Stickstoffoxide, Schwefeloxide und Ammoniak. Allein in Österreich
        sterben im Jahr ungefähr 14.000 Menschen an tabakinduzierten
        Krankheiten, wobei das Rauchen zu dem größten vermeidbaren Risikofaktor
        für viele verschiedene Krankheiten zählt. Sie sind sich dessen jedoch
        bereits bewusst, da Sie sich hier nach Möglichkeiten zur
        Raucherentwöhnung durch Hypnose informieren. Das zeigt Ihren Entschluss,
        etwas zu verändern.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich freue mich darauf, Sie bei Ihrem Vorhaben, das Rauchen aufzugeben,
        zu unterstützen. Zusammen können wir Ihr Ziel erreichen.
    </p>
</article>

<style lang="scss">
    article {
        hgroup {
            margin: 0;
            padding: 0;
            width: 100%;
            display: flex;
            word-break: break-word;
        }
        display: flex;

        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: var(--content-width);
        padding: var(--side);
    }
</style>
