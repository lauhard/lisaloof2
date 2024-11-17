<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    var psychologischeberatung = "https://dummyimage.com/600x400/000/fff";
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
        <h2 class="heading">Psychologische Beratung</h2>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Coaching ist ein zielorientierter und individueller Begleitungsprozess,
        der Menschen dabei unterstützt, ihr volles Potenzial zu entfalten,
        eigene Stärken zu erkennen und neue Perspektiven zu entwickeln. Im
        Coaching geht es darum, persönliche oder berufliche Ziele klar zu
        definieren und konkrete Schritte zur Erreichung dieser Ziele zu planen
        und umzusetzen. Durch gezielte Fragen, aktives Zuhören und eine
        strukturierte Gesprächsführung hilft der Coach, verborgene Ressourcen zu
        aktivieren und Herausforderungen erfolgreich zu meistern. Coaching
        fördert Selbstreflexion, Eigenverantwortung und nachhaltige Veränderung
        – stets im Einklang mit den individuellen Werten und Zielen der Klient
    </p>
    <Spacer></Spacer>
    <p class="text">
        In meiner Arbeit mit Klientinnen und Klienten betrachte ich Coaching und
        psychologische Beratung als sich ergänzende Prozesse, die häufig
        ineinandergreifen. Diese integrative Herangehensweise eröffnet ein
        breites Spektrum an Methoden und Techniken, die flexibel und passgenau
        auf die individuellen Bedürfnisse zugeschnitten werden. So entsteht ein
        ganzheitlicher Rahmen, der nachhaltige und tiefgehende Entwicklungen
        ermöglicht.
    </p>
    <Spacer></Spacer>
    <section>
        <p class="sub-heading">Ich unterstütze Sie bei:</p>
        <ul>
            <li>Emotionalen Problemen</li>
            <li>Klärung Ihrer Lebenszielen und Werte</li>
            <li>Entwicklung von Bewältigungsstrategien</li>
            <li>Förderung von Selbsterkenntnis</li>
            <li>Verbesserung zwischenmenschlicher Beziehungen</li>
        </ul>
    </section>
</article>

<style lang="scss">
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        width: var(--content-width);
        padding: var(--side);
        justify-self: center;
        margin-bottom: 4rem;
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            .sub-heading {
                margin-bottom: 1rem;
            }
            ul {
                width: 70%;
            }
        }
    }
</style>
