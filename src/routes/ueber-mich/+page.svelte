<script lang="ts">
    import Cert1 from "$lib/images/cert1.webp";
    import Cert2 from "$lib/images/cert2.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Uebermich from "$lib/images/ueber-mich.webp";
    import { page } from "$app/stores";
    import Spacer from "$lib/components/Spacer.svelte";
</script>

<svelte:head>
    <title>Über mich - Lisa Marie Loof B.Sc.</title>
    <link rel="preload" as="image" href={Cert1} />
    <link rel="preload" as="image" href={Cert2} />
    <link rel="preload" as="image" href={Uebermich} />
    <meta
        name="description"
        content="Hallo, mein Name ist Lisa Marie Loof M.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<article class="about-me">
    <div class="hero">
        <img
            class="hero-image"
            src={Uebermich}
            alt="Bild von Lisa Marie Loof"
            srcset=""
            loading="eager"
            width="100%"
            height="300px"
        />
    </div>
    <hgroup>
        <h1 class="heading">Lisa-Marie Loof M.Sc.</h1>
        <h2 class="sub-heading">
            Psychologische Beratung, Coaching und Hypnose in Klagenfurt.
        </h2>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Mein Name ist Lisa-Marie Loof, ich bin Psychologin und Hypnosetrainerin
        und begleite seit einiger Zeit Menschen auf ihrem Weg zu mehr
        Wohlbefinden und innerem Gleichgewicht.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Meine Reise in die Welt der Psychologie begann mit einem tiefen
        Interesse an den komplexen Zusammenhängen von Geist und Seele. Nach
        meinem Abschluss in Psychologie habe ich zahlreiche Weiterbildungen und
        Schulungen absolviert, um mein Wissen zu vertiefen und meine Fähigkeiten
        zu verfeinern. Besonders faszinierte mich dabei die Hypnose als eine
        kraftvolle Methode, um tiefgreifende Veränderungen im Unterbewusstsein
        zu bewirken.
    </p>
    <Spacer></Spacer>
    <p class="text">
        In meiner Praxis biete ich sowohl psychologische Beratung und Hypnose
        getrennt von einander an als auch eine Kombination aus beiden Bereichen.
        Diese Verbindung ermöglicht es, sowohl auf bewusster als auch auf
        unbewusster Ebene zu arbeiten und somit nachhaltige Ergebnisse zu
        erzielen. Mein Ziel ist es, Sie auf Ihrem persönlichen Weg zu
        unterstützen, sei es bei der Bewältigung von Problemen und Stress, der
        Förderung von Selbstbewusstsein oder der Entwicklung neuer
        Lebensperspektiven.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich lege großen Wert auf eine vertrauensvolle und wertschätzende
        Zusammenarbeit. Jeder Mensch ist einzigartig, und so gestalte ich auch
        meine Beratungs- und Hypnosesitzungen individuell und maßgeschneidert
        auf Ihre Bedürfnisse. In einer sicheren und einfühlsamen Atmosphäre
        biete ich Ihnen Raum, um Ihre Themen offen anzusprechen und gemeinsam
        Lösungen zu erarbeiten, um so Ihren Weg zu inneren Balance zu finden .
    </p>
    <Spacer></Spacer>
    <p class="text">
        (Es ist mir eine Herzensangelegenheit, Sie auf Ihrem Weg zu begleiten
        und Ihnen zu helfen, Ihre inneren Ressourcen zu aktivieren und Ihr
        volles Potenzial zu entfalten. Ich freue mich darauf, Sie kennenzulernen
        und gemeinsam mit Ihnen neue Wege zu entdecken.)
    </p>
    <br />
    <p>Ich freue mich auf Sie.</p>
    <br />
</article>
<article class="certificates">
    <h2>Zertifikate und Ausbildungen</h2>
    <details>
        <summary>Akademischer Abschluss</summary>
        <div class="image-wrapper">
            <img
                src={Cert2}
                alt="zertifikat-2"
                srcset=""
                width="100%"
                height="300px"
            />
        </div>

        <p>
            Master of Science Universität Klagenfurt 2022.... Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Fuga veritatis nemo mollitia
            quo quos est esse impedit dolor delectus obcaecati, neque nam
            pariatur tempore laborum dolore rem adipisci minus cumque?
        </p>
    </details>
    <details>
        <summary>Zertifikate</summary>

        <div class="image-wrapper">
            <img
                src={Cert1}
                alt="zertifikat-1"
                srcset=""
                loading="lazy"
                width="100%"
                height="300px"
            />
            <img
                src={Cert2}
                alt="zertifikat-2"
                srcset=""
                loading="lazy"
                width="100%"
                height="300px"
            />
        </div>

        <p>
            Hypnosetrainerin, Psychologin, .. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptas velit ab nisi officia
            cupiditate libero rerum quo aliquam perferendis optio, harum esse
            quidem quasi, corporis dolorum. Doloremque corporis quisquam
            inventore?
        </p>
    </details>
</article>

<style lang="scss">
    .about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        justify-self: center;
        width: 100%;
        max-width: var(--content-width);
        padding: var(--side);
        background-color: transparent;
    }
    .certificates {
        padding-block: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        justify-self: center;
        margin-top: 2rem;
        background-color: var(--surface-3);
        width: 100%;
        h2 {
            margin-bottom: 2rem;
        }
        details {
            width: 100%;
            max-width: var(--content-width);
            margin-top: 1rem;
            background-color: var(--surface-2);
            border-radius: 1rem;
            transition: all var(--animation-time) ease-in-out;

            .image-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                align-self: center;
                align-items: center;
                width: 100%;
                padding-top: 1rem;
                img {
                    width: 400px;
                    height: auto;
                    border-radius: 1rem;
                }
                transition: all var(--animation-time) ease-in-out;
            }
            summary {
                font-size: 1.2rem;
                padding: 1rem;
                width: 100%;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                justify-self: center;
                transition: all var(--animation-time) ease-in-out;
            }
            p {
                font-size: 1rem;
                padding: 3rem;
                justify-self: center;
                text-align: justify;
                text-align-last: center;
            }
        }
    }

    @media screen and (max-width: 670px) {
        .important-box {
            padding-top: 2rem;
        }
    }
</style>
