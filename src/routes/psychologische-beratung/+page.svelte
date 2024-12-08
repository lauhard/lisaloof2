<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import Beratung from "$lib/images/beratung-optimized.webp";
    import { serializeSchema } from "$lib";
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
        name: "Psychologische Beratung und Coaching in Klagenfurt",
        serviceType: "Hypnosis Services",
        specialty: "Psychology, Coaching",
        description:
            "Professionelle psychologische Beratung & Coaching in Klagenfurt für emotionale, psychische und berufliche Herausforderungen.",
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
                "Persoen mit emotionalen, psychischen oder beruflichen Herausforderungen.",
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
    <title>Psychologische Beratung & Coaching in Klagenfurt</title>
    <meta
        property="og:title"
        content="Psychologische Beratung & Coaching in Klagenfurt – Lisa Marie Loof M.Sc."
    />
    <meta
        property="og:description"
        content="Ich biete professionelle psychologische Beratung und Coaching in Klagenfurt an. Ich unterstütze Sie bei emotionalen, psychischen und berufliche Herausforderungen."
    />
    <meta property="og:image" content={Beratung} />
    <meta
        property="og:image:alt"
        content="Psychologische Beratung & Coaching in Klagenfurt - Bild von Lisa Marie Loof M.Sc auf einem Sessel"
    />
    <meta property="og:url" content="{url}{$page.url.pathname}" />
    <meta property="og:type" content="website" />
    <meta
        name="description"
        content="Professionelle psychologische Beratung und Coaching in Klagenfurt für emotionale, psychische und berufliche Herausforderungen."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
    <link rel="preload" as="image" href={Beratung} />

    {@html serializeSchema(structuredData)}
</svelte:head>

<section>
    <div class="hero">
        <img
            class="hero-image"
            src={Beratung}
            alt="Psychologische Beratung & Coaching in Klagenfurt - Bild von Lisa Marie Loof M.Sc auf einem Sessel"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>

    <article>
        <hgroup>
            <h2 class="heading">Psychologische Beratung & Coaching</h2>
            <h2 class="sub-heading">
                Professionelle Unterstützung für Ihre persönliche Entwicklung
            </h2>
        </hgroup>
        <Spacer></Spacer>
        <h3>Psychologische Beratung</h3>
        <p class="text">
            Die Psychologische Beratung ist ein professioneller Prozess, bei dem
            ich Einzelpersonen, Paare oder Gruppen dabei unterstütze emotionale,
            psychische und soziale Herausforderungen zu bewältigen. Ziel der
            Beratung ist die Hilfe zur Selbsthilfe, ihre Lebensqualität zu
            verbessern und gemeinsam Wege zu finden, um mit Stress, Konflikten
            und persönlichen Problemen umzugehen und effektive Strategien zur
            Lösung zu entwickeln.
        </p>
        <Spacer></Spacer>
        <h3 class="">Coaching</h3>
        <p class="text">
            Coaching ist ein zielorientierter und individueller
            Begleitungsprozess, der Menschen dabei unterstützt, ihr volles
            Potenzial zu entfalten, eigene Stärken zu erkennen und neue
            Perspektiven zu entwickeln. Im Coaching geht es darum, persönliche
            oder berufliche Ziele klar zu definieren und konkrete Schritte zur
            Erreichung dieser Ziele zu planen und umzusetzen. Durch gezielte
            Fragen, aktives Zuhören und eine strukturierte Gesprächsführung
            hilft der Coach, verborgene Ressourcen zu aktivieren und
            Herausforderungen erfolgreich zu meistern. Coaching fördert
            Selbstreflexion, Eigenverantwortung und nachhaltige Veränderung –
            stets im Einklang mit den individuellen Werten und Zielen der Klient
        </p>
        <Spacer></Spacer>
        <p class="text">
            In meiner Arbeit mit Klientinnen und Klienten betrachte ich Coaching
            und psychologische Beratung als sich ergänzende Prozesse, die häufig
            ineinandergreifen. Diese integrative Herangehensweise eröffnet ein
            breites Spektrum an Methoden und Techniken, die flexibel und
            passgenau auf die individuellen Bedürfnisse zugeschnitten werden. So
            entsteht ein ganzheitlicher Rahmen, der nachhaltige und tiefgehende
            Entwicklungen ermöglicht.
        </p>
        <Spacer></Spacer>
        <div>
            <p class="sub-heading">Ich unterstütze Sie bei:</p>
            <ul>
                <li>Emotionalen Problemen</li>
                <li>Klärung Ihrer Lebenszielen und Werte</li>
                <li>Entwicklung von Bewältigungsstrategien</li>
                <li>Förderung von Selbsterkenntnis</li>
                <li>Verbesserung zwischenmenschlicher Beziehungen</li>
            </ul>
        </div>
    </article>
</section>

<style lang="scss">
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: var(--content-width);
        padding: var(--side);
        justify-self: center;
        margin-bottom: 4rem;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 700px;
            margin: 0;
            padding: 0;

            .sub-heading {
                margin-bottom: 1rem;
                font-weight: bold;
            }
            ul {
                width: 100%;
                li {
                    width: 100%;
                    margin: auto;
                    padding: auto;
                    margin-left: 1rem;
                }
            }
        }
    }
</style>
