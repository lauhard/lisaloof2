<script lang="ts">
    import Spacer from "$lib/components/Spacer.svelte";
</script>

<svelte:head>
    <title>Impressum</title>
    <meta name="description" content="Impressum lisaloof.com" />
</svelte:head>

<section>
    <h1>Impressum</h1>
    <article class="cell owner">
        <h2>Zeit für Hypnose & Weiterentwicklung</h2>
        <br />
        <div class="address-contact">
            <section>
                <h3>Firmensitz</h3>
                <address>
                    Waagplatz 1, 9020 Klagenfurt <br />
                    Österreich
                </address>
            </section>

            <article class="contact-wrapper">
                <h3>Kontakt</h3>
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
            </article>
        </div>

        <Spacer></Spacer>
        <article>
            <h3>Urheberrechtshinweis</h3>
            <p class="text">
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
                unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
                Inhalte dieser Website verbreiten, vervielfältigen oder
                verwerten wie zum Beispiel auf anderen Websites erneut
                veröffentlichen. Falls notwendig, werden wir die unerlaubte
                Nutzung von Teilen der Inhalte unserer Seite rechtlich
                verfolgen. Sollten Sie auf dieser Webseite Inhalte finden, die
                das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
            </p>
        </article>

        <Spacer></Spacer>
        <article>
            <h3>Nutzungsrechte</h3>
            <p class="text">
                Bei Nutzung, Vervielfältigung oder Veröffentlichung von Texten
                und Fotos dieser Website in anderen Medien ist die Zustimmung
                der Medieninhaberin einzuholen.
            </p>
        </article>
    </article>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: var(--content-width);
        padding: var(--side);
    }
    h1,
    h2 {
        text-align: center;
        margin: 2rem;
    }
    .address-contact {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        article {
            width: 45%;
            min-width: 300px;
            h3 {
                margin: 1rem;
            }
            address {
                margin: 1rem;
            }
        }
        section {
            width: 45%;
            min-width: 300px;
        }
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
