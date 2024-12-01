<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import psychologischeberatung from "$lib/images/lisa-desk2-hor2.jpg";
</script>

<svelte:head>
    <title>Psychologische Beratung</title>
    <link rel="preload" as="image" href={psychologischeberatung} />
    <meta
        name="description"
        content="Hallo, mein Name ist Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <div class="hero">
        <img
            class="hero-image"
            src={psychologischeberatung}
            alt="abgebrannte Zigarette"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>

    <article>
        <hgroup>
            <h2 class="heading">Beratung / Coaching</h2>
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
        h3 {
            margin-bottom: 0.5rem;
        }
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
