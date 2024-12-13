<script lang="ts">
    import { page } from "$app/stores";
    import Spacer from "$lib/components/Spacer.svelte";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { AlertTriangle } from "lucide-svelte";
    import info from "$lib/images/info-optimized.webp";
</script>

<svelte:head>
    <title>Informationen</title>
    <link rel="preload" as="image" href={info} />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <div class=" hero">
        <img
            class="hero-image"
            src={info}
            alt="Baum auf einem Feld"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>
    <article>
        <hgroup>
            <h1 class="heading">Informationen</h1>
            <p class="sub-heading">
                Leistungsgrenzen, Vertraulichkeit und Termine
            </p>
        </hgroup>
        <Spacer></Spacer>
        <article class="info">
            <h2 class=" heading__important">Abgrenzung meiner Leistungen</h2>
            <p class="text">
                Meine Dienste ersetzen keinesfalls die eines Arztes, einer
                Ärztin, Psychotherapeut*innen oder Klinischen- und
                Gesundheitspsycholog*innen. Ich handle nicht außerhalb meines
                Tätigkeitsbereiches, ich betreibe keine Diagnostik, verschreibe
                keine Medikamente, gebe keine Versprechen jeglicher Art ab oder
                behandle medizinische oder psychische Leiden. Falls Sie an
                entsprechenden Erkrankungen leiden, wenden Sie sich bitte an die
                zuständigen Fachärzte*innen. Falls ich die Beratung/Coaching
                oder Hypnose aufgrund oben genannter Gründe für nicht sinnvoll
                erachte, behalte ich mir das Recht vor, die Sitzung abzulehnen.
            </p>
        </article>
        <Spacer></Spacer>
        <article class="">
            <h2 class=" ">Verschwiegenheit</h2>
            <p class="text">
                Selbstverständlich richte ich mich bei allen meinen Angeboten
                nach dem Psycholog*innen Gesetz §37 sowie dem
                Psychotherapiegesetzt §14. Demnach bin ich der absoluten
                Verschwiegenheit verpflichtet. Dies beinhalten auch die
                Verschwiegenheit gegenüber Arbeitger*innen oder Angehörigen.
            </p>
        </article>
    </article>
    <Spacer></Spacer>
    <aside>
        <h2 class="">Termine</h2>
        <p class="text">
            Terminvereinbarungen sind telefonisch oder per E-Mail möglich.
        </p>
        <ul>
            <li>Montag bis Freitag von 9:00 bis 18:00 Uhr</li>
            <li>
                <a class="" href="tel:+4367761750953"
                    >Tel: +43 (0) 67761750953</a
                >
            </li>
            <li>
                <a class="" href="mailto:praxis@lisaloof.com"
                    >Mail: praxis@lisaloof.com</a
                >
            </li>
        </ul>
        <ul></ul>
        <p class="text attention">
            <strong>
                Ich bitte Sie darum, vereinbarte Termin bis zu 24 Stunde vorher
                abzusagen.
                <br />
                Falls der Termin nicht eingehalten oder kurzfristiger abgesagt wird,
                ist das Honorar zu begleichen.
            </strong>
        </p>
    </aside>
</section>

<style lang="scss">
    section {
        margin-bottom: 6rem;
    }
    article {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        align-items: center;
        justify-self: center;
        max-width: var(--content-width);
        padding: var(--side);
    }
    aside {
        h2 {
            margin-bottom: 1rem;
        }
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        max-width: var(--content-width);
        padding: var(--side);
        .attention {
            max-width: 600px;
            border: 1px solid #e04444;
            padding: 1rem;
            border-radius: 0.7rem;
        }
    }
    .information-hypnose {
        max-width: var(--content-width);
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
        align-items: center;
    }
    .summary {
        margin-block: 2rem;
    }
    .hero-image {
        object-position: 0 -60px;
    }
    .info {
        background-color: var(--surface-3);
        padding: 2rem;
        border-radius: 2rem;
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        p {
            margin-top: 1rem;
            text-align: left;
            text-wrap: pretty;
            @media (max-width: 480px) {
                text-align: center;
                text-wrap: balance;
            }
        }
        .info-icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: center;
            flex-direction: column;
            left: 1rem;
            top: 1.5rem;
            background-color: var(--primary);
            color: var(--surface-3);
            padding: 0.5rem 0 0.7rem 0;
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
        }
    }
    @media (max-width: 768px) {
        .heading__important {
            font-size: 1.4rem;
            margin-top: 0rem;
        }
    }
</style>
