<script lang="ts">
    import { AlertTriangle } from "lucide-svelte";
    import Cert1 from "$lib/images/cert1.webp";
    import Cert2 from "$lib/images/cert2.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Über mich - Lisa Marie Loof B.Sc.</title>
    <link rel="preload" as="image" href={Cert1} />
    <link rel="preload" as="image" href={Cert2} />
    <link
        rel="preload"
        as="image"
        href="https://dummyimage.com/600x400/000/fff"
    />
    <meta
        name="description"
        content="Hallo, mein Name ist Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <article class="about-me">
        <div class="hero">
            <img
                class="hero-image"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Bild von Lisa Marie Loof"
                srcset=""
                width="100%"
                height="300px"
            />
        </div>
        <hgroup>
            <h1 class="heading">Lisa-Marie Loof B.Sc.</h1>
            <h2 class="sub-heading">
                Psychologische Beratung, Coaching und Hypnose in Klagenfurt.
            </h2>
        </hgroup>

        <p class="">
            Mein Name ist Lisa-Marie Loof, ich bin Psychologin und
            Hypnosetrainerin und begleite seit einiger Zeit Menschen auf ihrem
            Weg zu mehr Wohlbefinden und innerem Gleichgewicht.
        </p>
        <hr />
        <p class="">
            Meine Reise in die Welt der Psychologie begann mit einem tiefen
            Interesse an den komplexen Zusammenhängen von Geist und Seele. Nach
            meinem Abschluss in Psychologie habe ich zahlreiche Weiterbildungen
            und Schulungen absolviert, um mein Wissen zu vertiefen und meine
            Fähigkeiten zu verfeinern. Besonders faszinierte mich dabei die
            Hypnose als eine kraftvolle Methode, um tiefgreifende Veränderungen
            im Unterbewusstsein zu bewirken.
        </p>
        <hr />
        <p class="">
            n meiner Praxis biete ich sowohl psychologische Beratung und Hypnose
            getrennt von einander an als auch eine Kombination aus beiden
            Bereichen. Diese Verbindung ermöglicht es, sowohl auf bewusster als
            auch auf unbewusster Ebene zu arbeiten und somit nachhaltige
            Ergebnisse zu erzielen. Mein Ziel ist es, Sie auf Ihrem persönlichen
            Weg zu unterstützen, sei es bei der Bewältigung von Problemen und
            Stress, der Förderung von Selbstbewusstsein oder der Entwicklung
            neuer Lebensperspektiven.
        </p>
        <hr />
        <p class="">
            Ich lege großen Wert auf eine vertrauensvolle und wertschätzende
            Zusammenarbeit. Jeder Mensch ist einzigartig, und so gestalte ich
            auch meine Beratungs- und Hypnosesitzungen individuell und
            maßgeschneidert auf Ihre Bedürfnisse. In einer sicheren und
            einfühlsamen Atmosphäre biete ich Ihnen Raum, um Ihre Themen offen
            anzusprechen und gemeinsam Lösungen zu erarbeiten, um so Ihren Weg
            zu inneren Balance zu finden .
        </p>
        <hr />
        <p class="">
            (Es ist mir eine Herzensangelegenheit, Sie auf Ihrem Weg zu
            begleiten und Ihnen zu helfen, Ihre inneren Ressourcen zu aktivieren
            und Ihr volles Potenzial zu entfalten. Ich freue mich darauf, Sie
            kennenzulernen und gemeinsam mit Ihnen neue Wege zu entdecken.)
        </p>
        <p>Ich freue mich auf Sie.</p>
    </article>

    <div class=" certificates">
        <img
            src={Cert1}
            alt="zertifikat-1"
            srcset=""
            width="100%"
            height="300px"
        />
        <img
            src={Cert2}
            alt="zertifikat-2"
            srcset=""
            width="100%"
            height="300px"
        />
    </div>

    <article class="info">
        <AlertTriangle size="50" />
        <h3 class="">Wichtiger Hinweis</h3>
        <p>
            Bei der hier angebotenen Hypnose handelt es sich um KEINE
            therapeutische Hypnose. Das bedeutet, meine Dienste ersetzen
            keinesfalls die eines Arztes oder Psychotherapeuten. Ich handle
            nicht außerhalb meines Tätigkeitsbereiches, ich betreibe keine
            Diagnostik, verschreibe keine Medikamente, gebe keine Versprechen
            jeglicher Art ab oder behandle medizinische oder psychische Leiden.
            Falls Sie an entsprechenden Erkrankungen leiden, wenden Sie sich
            bitte an die zuständigen Fachärzte*innen.
        </p>
        <p>
            Falls ich die Hypnosesitzung aufgrund oben genannter Gründe für
            nicht sinnvoll erachte, behalte ich mir das Recht vor, die Sitzung
            abzulehnen.
        </p>
        <p>Umsatzsteuerbefreit gemäß § 6 Abs. 1 Z 19 UstG</p>
    </article>
</section>

<style lang="scss">
    section {
        display: flex;
        height: var(--section-height);

        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .about-me {
        padding: var(--content-padding, 0 1rem);
        width: var(--content-width);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .hero {
        margin-top: 3rem;
        margin-bottom: 4rem;

        width: 100%;
        height: 420px;
        overflow: hidden;
        border-radius: 1rem;
    }
    .certificates {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 300px;
    }
    .info {
        padding: 1rem;
        margin-top: 2rem;
        border: 1px solid var(--color-primary);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-self: center;
        width: var(--content-width);
        gap: 1rem;
    }
    @media screen and (max-width: 670px) {
        .important-box {
            padding-top: 2rem;
        }
    }
</style>
