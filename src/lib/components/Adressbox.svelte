<script lang="ts">
    import { MapPin } from "lucide-svelte";
</script>

<article class="contact-box">
    <div class="contact-info">
        <!-- <div class="contact-wrapper" > -->
        <h3 class="headline-center">Praxisadresse</h3>
        <p class="text text-center mb1">
            Sie finden mich in der wunderschönen Klagenfurter Altstadt
        </p>
        <div class="address">
            <p class="text">Waagplatz 1, 9020 Klagenfurt</p>
            <p class="text text-center">Österreich</p>
        </div>
        <div class="contact-buttons mt1">
            <a
                class="cta"
                href="https://goo.gl/maps/VhgjNbHZmWpUjEwR9"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                title="Karte öffnen"
                aria-label="navigate to contact"
            >
                <MapPin />
                Karte öffnen
            </a>
        </div>

        <!-- </div> -->
    </div>
</article>

<style lang="scss">
    .contact-box {
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        background: var(--primary);
        border: none;
        box-shadow: none;
        border-radius: 0px;
        display: flex;
        flex-direction: row;
        .image-wrapper {
            height: 400px;
            width: auto;
            border-radius: 0;
            img {
                height: auto;
                width: auto;
                border-radius: 0px;
                object-fit: contain;
                object-position: 0 -200px;
            }
        }

        .contact-info {
            display: flex;
            // width: 50vw;
            min-width: 50%;

            flex-direction: column;
            justify-content: center;
            align-items: center;
            justify-self: center;
            font-family: var(--font-family, "Segoe UI");
            p {
                color: var(--text);
            }
        }
        // border-top: 8px solid var(--attention);
        border-bottom: 8px solid var(--secondary);
    }
    @media screen and (max-width: 960px) {
        .contact-box {
            flex-wrap: wrap;
            padding: 0.5rem;
            display: flex;
            width: 100%;

            height: auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image-wrapper {
                // width: 100%;
                // display: flex;
                // justify-content: center;
                border-radius: 0.8rem;
            }
            .contact-info {
                margin: 2rem 0;
            }
        }
    }
    @media screen and (max-width: 500px) {
        .contact-box {
            flex-wrap: wrap;
            padding: 0.5rem;
            display: flex;
            width: 100%;

            height: auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image-wrapper {
                height: 300px;
                img {
                    object-position: center;
                }
                // width: 100%;
                // display: flex;
                // justify-content: center;
                border-radius: 0.8rem;
            }
            .contact-info {
                margin: 2rem 0;
            }
        }
    }
</style>
