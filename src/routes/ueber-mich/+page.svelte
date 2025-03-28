<script lang="ts">
    import Cert1 from "$lib/images/cert1.webp";
    import Cert2 from "$lib/images/cert2.webp";
    import Diplom from "$lib/images/diplom-optimized.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Uebermich from "$lib/images/ueber-mich-optimized.webp";
    import { page } from "$app/stores";
    import Spacer from "$lib/components/Spacer.svelte";
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
        "@type": "Person",
        name: "Lisa Marie Loof, M.Sc.",
        jobTitle: "Psychologin, Coach und Hypnosetrainerin",
        description:
            "Psychologische Beratung, Coaching und Hypnose in Klagenfurt.",
        url: `${url}${$page.url.pathname}`, // Fixed concatenation here
        sameAs: url,
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
        image: {
            "@type": "ImageObject",
            url: `${url}${Uebermich}`,
            width: 1200,
            height: 628,
        },
        inLanguage: "de",
    };
</script>

<svelte:head>
    <title>Über mich - Lisa Marie Loof, M.Sc.</title>
    <meta
        name="description"
        content="Lisa Marie Loof, M.Sc. – Psychologin, Coach & Hypnosetrainerin in Klagenfurt. Spezialisiert auf psychologische Beratung, Hypnose, Coaching."
    />
    <meta
        property="og:title"
        content="Ihre Psychologin & Coach in Klagenfurt - Lisa Marie Loof, M.Sc."
    />
    <meta
        property="og:description"
        content="Lisa Marie Loof, M.Sc. – Ihre Psychologin, Coach & Hypnosetrainerin in Klagenfurt. Spezialisiert auf psychologische Beratung, Hypnose, Coaching"
    />
    <meta property="og:image" content="{url}{Uebermich}" />
    <meta property="og:url" content="{url}{$page.url.pathname}" />
    <meta
        property="og:image:alt"
        content="Bild von Lisa Marie Loof am Schreibtisch in Ihrer Praxis"
    />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:type" content="website" />

    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
    <link rel="preload" as="image" href={Cert1} />
    <link rel="preload" as="image" href={Cert2} />
    <link rel="preload" as="image" href={Diplom} />
    <link rel="preload" as="image" href={Uebermich} />

    {@html serializeSchema(structuredData)}
</svelte:head>

<section>
    <div class="hero">
        <img
            class="hero-image"
            src={Uebermich}
            alt="Bild von Lisa Marie Loof am Schreibtisch in Ihrer Praxis"
            srcset=""
            loading="eager"
            width="100%"
            height="100%"
        />
    </div>
    <article class="about-me">
        <hgroup>
            <h1 class="heading">Lisa-Marie Loof, M.Sc.</h1>
            <h2 class="sub-heading">
                Psychologische Beratung, Coaching & Hypnose in Klagenfurt.
            </h2>
        </hgroup>
        <Spacer></Spacer>
        <p class="text">
            Mein Name ist Lisa-Marie Loof, ich bin Psychologin und
            Hypnosetrainerin und begleite seit einiger Zeit Menschen auf ihrem
            Weg zu mehr Wohlbefinden und innerem Gleichgewicht.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Meine Reise in die Welt der Psychologie begann mit einem tiefen
            Interesse an den komplexen Zusammenhängen von Körper und Geist. Nach
            meinem Abschluss in Psychologie habe ich zahlreiche Weiterbildungen
            und Schulungen absolviert, um mein Wissen zu vertiefen und meine
            Fähigkeiten zu verfeinern. Besonders faszinierte mich dabei die
            Hypnose als eine kraftvolle Methode, um tiefgreifende Veränderungen
            im Unterbewusstsein zu bewirken.
        </p>
        <Spacer></Spacer>
        <p class="text">
            In meiner Praxis biete ich sowohl psychologische Beratung und
            Hypnose getrennt von einander an als auch eine Kombination aus
            beiden Bereichen. Diese Verbindung ermöglicht es, sowohl auf
            bewusster als auch auf unbewusster Ebene zu arbeiten und somit
            nachhaltige Ergebnisse zu erzielen. Mein Ziel ist es, Sie auf Ihrem
            persönlichen Weg zu unterstützen, sei es bei der Bewältigung von
            Problemen und Stress, der Förderung von Selbstbewusstsein oder der
            Entwicklung neuer Lebensperspektiven.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Ich lege großen Wert auf eine vertrauensvolle und wertschätzende
            Zusammenarbeit. Jeder Mensch ist einzigartig, und so gestalte ich
            auch meine Beratungs- und Hypnosesitzungen individuell und
            maßgeschneidert auf Ihre Bedürfnisse. In einer sicheren und
            einfühlsamen Atmosphäre biete ich Ihnen Raum, um Ihre Themen offen
            anzusprechen und gemeinsam Lösungen zu erarbeiten.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Es ist mir eine Herzensangelegenheit, Sie auf Ihrem Weg zu begleiten
            und Ihnen zu helfen, Ihre inneren Ressourcen zu aktivieren und Ihr
            volles Potenzial zu entfalten. Ich freue mich darauf, Sie
            kennenzulernen und gemeinsam mit Ihnen neue Wege zu entdecken.
        </p>
        <Spacer></Spacer>
        <p>Ich freue mich auf Sie.</p>
        <br />
    </article>
    <article class="certificates">
        <h2>Zertifikate und Ausbildungen</h2>
        <details>
            <summary>Akademischer Abschluss</summary>
            <div class="image-wrapper">
                <img
                    src={Diplom}
                    alt="Zeugnis Master of Science in Psychologie"
                    srcset=""
                    width="100%"
                    height="300px"
                />
            </div>
        </details>
        <details>
            <summary>Zertifikate</summary>

            <div class="image-wrapper">
                <img
                    src={Cert1}
                    alt="Zertifikat Lisa Marie Loof für Hypnose"
                    srcset=""
                    loading="lazy"
                    width="100%"
                    height="300px"
                />
                <img
                    src={Cert2}
                    alt="Zertifikat Lisa Marie Loof für Hypnose Aufbaukurs"
                    srcset=""
                    loading="lazy"
                    width="100%"
                    height="300px"
                />
            </div>
        </details>
    </article>
</section>

<style lang="scss">
    .hero-image {
        object-position: center -60px;
    }
    .about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        justify-self: center;
        width: 100%;
        padding: var(--side);
        background-color: transparent;
    }
    .certificates {
        padding-block: 3rem;
        padding-inline: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        justify-self: center;
        margin-top: 2rem;
        background-color: var(--surface-3);
        width: 100%;
        h2 {
            margin-bottom: 2rem;
        }
        details {
            width: 100%;
            max-width: var(--content-width);
            background-color: #525b58;
            transition: all var(--animation-time) ease-in-out;
            margin-top: 0.5rem;
            border-radius: 1rem;
            --pico-accordion-open-summary-color: #fff !important;
            .image-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-self: center;
                align-items: center;
                width: 100%;
                padding-bottom: 0.5rem;
                padding-inline: 1rem;
                img {
                    width: 400px;
                    height: auto;
                    margin: 1rem;
                }
                transition: all var(--animation-time) ease-in-out;
            }
            summary {
                padding: 0;
                margin: 0;
                font-size: 1.2rem;
                padding: 1rem;
                width: 100%;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                justify-self: center;
                transition: all var(--animation-time) ease-in-out;
                color: #fff;
                &:active,
                &:hover,
                &:focus,
                &:visited {
                    color: #fff !important;
                }
            }

            p {
                font-size: 1rem;
                padding: 3rem;
                justify-self: center;
                text-align: justify;
                text-align-last: center;
            }
        }
    }

    @media screen and (max-width: 670px) {
        .important-box {
            padding-top: 2rem;
        }
    }

    @media screen and (max-width: 900px) {
        .hero-image {
            object-position: center center;
        }
    }
</style>
