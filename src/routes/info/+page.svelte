<script lang="ts">
    import Faq from "$lib/components/Faq.svelte";
    import PriceTable from "$lib/components/PriceTable.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import { AlertTriangle } from "lucide-svelte";
</script>

<section>
    <div class=" hero">
        <img
            class="hero-image"
            src="https://dummyimage.com/600x400/000/fff"
            alt="Baum auf einem Feld"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>
    <br />
    <article class="hypnose">
        <hgroup>
            <h1 class="heading">Informationen</h1>
            <p class="sub-heading">
                Hier finden Sie alle Informationen zu meinen Leistungen.
            </p>
        </hgroup>
        <br />
        <article class="info">
            <div class="info-icon">
                <AlertTriangle size="50" />
            </div>
            <h3 class="">Verschwiegenheit</h3>
            <p class="">
                Selbstverständlich richte ich mich bei allen meinen Angeboten
                nach dem Psycholog*innen Gesetz §37 sowie dem
                Psychotherapiegesetzt §14. Demnach bin ich der absoluten
                Verschwiegenheit verpflichtet. Dies beinhalten auch die
                Verschwiegenheit gegenüber Arbeitger*innen oder Angehörigen.
            </p>
        </article>
        <br />
        <br />
        <details>
            <summary class="heading">Hypnose</summary>
            <section class="information-hypnose">
                <h2 class="sub-heading">
                    Meine Einheiten sind wie folgt aufgebaut
                </h2>
                <br />
                <p class="text">
                    Die erste Einheit beinhaltet ein kostenloses und
                    unverbindliches Vorgespräch. Hierbei möchte ich mir ein Bild
                    von Ihren Erwartungen oder bereits vorhandenen
                    Hypnose-Erfahrungen machen. Danach werden wir gemeinsam Ihr
                    persönliches Hypnose-Konzept besprechen. Wenn Sie sich nach
                    dem Vorgespräch dazu entscheiden, mir Ihr Vertrauen zu
                    schenken, stellen wir die Weichen, um gemeinsam an Ihrem
                    Thema zu arbeiten.
                </p>
                <Spacer></Spacer>
                <p class="text">
                    In der zweiten Einheit können Gedanken und Gefühle, welche
                    nachträglich aufgekommen sind besprochen werden. Wir
                    arbeiten intensiv lösungs- und ressourcenorientiert an Ihrem
                    Thema.
                </p>
                <Spacer></Spacer>
                <p class="text">
                    In der dritten Einheit (optional) möchte ich Ihnen anbieten,
                    je nach Wunsch weiter an Ihren Themen zu arbeiten, neu
                    aufgekommenes zu besprechen oder die Selbsthypnose bei Ihnen
                    zu verankern, sodass Sie die Möglichkeit haben, auch selbst
                    in Hypnose zu gehen und zu arbeiten.
                </p>
                <br />
                <article class="info">
                    <div class="info-icon">
                        <AlertTriangle size="50" />
                    </div>
                    <h3 class="">Wichtige Information</h3>
                    <p>
                        Bei der hier angebotenen Hypnose handelt es sich um
                        KEINE therapeutische Hypnose. Das bedeutet, meine
                        Dienste ersetzen keinesfalls die eines Arztes oder
                        Psychotherapeuten. Ich handle nicht außerhalb meines
                        Tätigkeitsbereiches, ich betreibe keine Diagnostik,
                        verschreibe keine Medikamente, gebe keine Versprechen
                        jeglicher Art ab oder behandle medizinische oder
                        psychische Leiden. Falls Sie an entsprechenden
                        Erkrankungen leiden, wenden Sie sich bitte an die
                        zuständigen Fachärzte*innen.
                    </p>
                    <p>
                        Falls ich die Hypnosesitzung aufgrund oben genannter
                        Gründe für nicht sinnvoll erachte, behalte ich mir das
                        Recht vor, die Sitzung abzulehnen.
                    </p>
                    <p>Umsatzsteuerbefreit gemäß § 6 Abs. 1 Z 19 UstG</p>
                </article>
            </section>
        </details>
        <br />
        <details>
            <br />
            <summary class="heading">Coaching</summary>
            <section>
                <article class="info">
                    <div class="info-icon">
                        <AlertTriangle size="50" />
                    </div>
                    <h3 class="">Wichtige Informationen</h3>
                    <p>
                        Meine Dienste ersetzen keinesfalls die eines Arztes,
                        einer Ärztin, Psychotherapeut*innen oder Klinischen- und
                        Gesundheitspsycholog*innen. Ich handle nicht außerhalb
                        meines Tätigkeitsbereiches, ich betreibe keine
                        Diagnostik, verschreibe keine Medikamente, gebe keine
                        Versprechen jeglicher Art ab oder behandle medizinische
                        oder psychische Leiden. Falls Sie an entsprechenden
                        Erkrankungen leiden, wenden Sie sich bitte an die
                        zuständigen Fachärzte*innen. Falls ich die
                        Beratung/Coaching oder Hypnose aufgrund oben genannter
                        Gründe für nicht sinnvoll erachte, behalte ich mir das
                        Recht vor, die Sitzung abzulehnen.
                    </p>
                </article>
            </section>
        </details>
    </article>
    <br />
    <br />
</section>

<style lang="scss">
    article {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: var(--content-width);
        align-self: center;
        align-items: center;
        justify-self: center;
    }
    .information-hypnose {
        max-width: var(--content-width);
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
        align-items: center;
    }
    .info {
        background-color: var(--surface-3);
        padding: 2rem;
        border-radius: 2rem;
        position: relative;
        p {
            margin-top: 2rem;
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
</style>
