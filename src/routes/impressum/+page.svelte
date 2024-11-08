<script lang="ts">
</script>

<svelte:head>
    <title>Impressum</title>
    <meta name="description" content="Impressum Lisaloof.com" />
</svelte:head>

<div class="section">
    <h2>Impressum</h2>
    <div class="grid">
        <div class="cell owner">
            <h4>Zeit für Hypnose & Weiterentwicklung</h4>
            <h5>Firmensitz</h5>
            <div class="address">
                <p>Waagplatz 1, 9020 Klagenfurt</p>
                <p>Österreich</p>
            </div>
            <br />
            <h5>Kontakt</h5>
            <div class="contact-wrapper">
                <ul class="no-list">
                    <li>
                        <a class="text" href="tel:+4367761750953"
                            >Tel: +43 (0) 67761750953</a
                        >
                    </li>
                    <li>
                        <a class="text" href="mailto:praxis@lisaloof.at"
                            >Mail: praxis@lisaloof.at</a
                        >
                    </li>
                </ul>
            </div>
            <h4>Urheberrechtshinweis</h4>
            <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
                unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
                Inhalte dieser Website verbreiten, vervielfältigen oder
                verwerten wie zum Beispiel auf anderen Websites erneut
                veröffentlichen. Falls notwendig, werden wir die unerlaubte
                Nutzung von Teilen der Inhalte unserer Seite rechtlich
                verfolgen. Sollten Sie auf dieser Webseite Inhalte finden, die
                das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
            </p>
            <br />

            <h4>Nutzungsrechte</h4>
            <p>
                Bei Nutzung, Vervielfältigung oder Veröffentlichung von Texten
                und Fotos dieser Website in anderen Medien ist die Zustimmung
                der Medieninhaberin einzuholen.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .section {
        --section-min-height: 100%;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        // --bg-section: rgb(0, 26, 255);
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
    }
    h2 {
        text-align: center;
        margin: 2rem;
    }
    .grid {
        --grid-row-gap: 0rem;
        --grid-height: auto;
        --grid-nin-height: 100%;

        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);
        height: var(--grid-height);
        width: var(--grid-width);
        min-height: var(--grid-min-height);
        grid-row-gap: var(--grid-row-gap, 0px);
        box-sizing: border-box;
        overflow: hidden;
    }
    .cell {
        margin: 0;
        padding: 0;
        min-height: 200px;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        // align-self: center;
    }
    ul {
        li {
            margin-left: 1.2rem;
            font-size: 18px;
        }
    }
    .no-list {
        li {
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
    }
    .owner {
        max-width: var(--content-width);
        justify-self: center;
    }
</style>
