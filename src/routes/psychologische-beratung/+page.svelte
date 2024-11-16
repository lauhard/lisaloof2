<script lang="ts">
</script>

<article>
    <div class="hero">
        <img
            class="hero-image"
            src="https://dummyimage.com/600x400/000/fff"
            alt="abgebrannte Zigarette"
            srcset=""
            width="100%"
            height="300px"
        />
    </div>
    <hgroup>
        <h2 class="heading">Psychologische Beratung</h2>
        <p class="sub-heading"></p>
    </hgroup>
    <p>
        Die Psychologische Beratung ist ein professioneller Prozess, bei dem ich
        Einzelpersonen, Paare oder Gruppen dabei unterstütze emotionale,
        psychische und soziale Herausforderungen zu bewältigen. Ziel der
        Beratung ist die Hilfe zur Selbsthilfe, ihre Lebensqualität zu
        verbessern und gemeinsam Wege zu finden, um mit Stress, Konflikten und
        persönlichen Problemen umzugehen und effektive Strategien zur Lösung zu
        entwickeln.
    </p>
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
