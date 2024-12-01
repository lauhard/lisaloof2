<script lang="ts">
    import { page } from "$app/stores";
    import Spacer from "$lib/components/Spacer.svelte";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { AlertTriangle } from "lucide-svelte";
    import info from "$lib/images/info.png";
</script>

<svelte:head>
    <title>Informationen</title>
    <link rel="preload" as="image" href={info} />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
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
    <article class="hypnose">
        <hgroup>
            <h1 class="heading">Informationen</h1>
        </hgroup>
        <Spacer></Spacer>
        <p class="text">
            Meine Dienste ersetzen keinesfalls die eines Arztes, einer Ärztin,
            Psychotherapeut*innen oder Klinischen- und
            Gesundheitspsycholog*innen. Ich handle nicht außerhalb meines
            Tätigkeitsbereiches, ich betreibe keine Diagnostik, verschreibe
            keine Medikamente, gebe keine Versprechen jeglicher Art ab oder
            behandle medizinische oder psychische Leiden. Falls Sie an
            entsprechenden Erkrankungen leiden, wenden Sie sich bitte an die
            zuständigen Fachärzte*innen. Falls ich die Beratung/Coaching oder
            Hypnose aufgrund oben genannter Gründe für nicht sinnvoll erachte,
            behalte ich mir das Recht vor, die Sitzung abzulehnen.
        </p>
        <Spacer></Spacer>
        <article class="info">
            <div class="info-icon">
                <AlertTriangle size="50" />
            </div>
            <h3 class="heading heading__important">Verschwiegenheit</h3>
            <p class="">
                Selbstverständlich richte ich mich bei allen meinen Angeboten
                nach dem Psycholog*innen Gesetz §37 sowie dem
                Psychotherapiegesetzt §14. Demnach bin ich der absoluten
                Verschwiegenheit verpflichtet. Dies beinhalten auch die
                Verschwiegenheit gegenüber Arbeitger*innen oder Angehörigen.
            </p>
        </article>
    </article>
</section>

<style lang="scss">
    section {
        margin-bottom: 6rem;
    }
    article {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: var(--content-width);
        align-self: center;
        align-items: center;
        justify-self: center;
        padding: var(--side);
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
        p {
            margin-top: 3rem;
        }
        .info-icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: center;
            flex-direction: column;
            left: 1rem;
            top: 1rem;
            background-color: var(--primary);
            color: var(--surface-3);
            padding: 0.5rem 0 0.7rem 0;
            height: 3.5rem;
            width: 3.5rem;
            border-radius: 50%;
        }
    }
    @media (max-width: 768px) {
        .heading__important {
            font-size: 1.4rem;
            margin-left: 2rem;
        }
    }
</style>
