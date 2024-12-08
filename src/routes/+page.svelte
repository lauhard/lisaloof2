<script lang="ts">
    import LogoSvg from "$lib/components/LogoSvg.svelte";
    import ProfileImage from "$lib/images/main-cutout-2.png";
    import Praxis1 from "$lib/images/praxis1.jpg";
    import Praxis2 from "$lib/images/praxis2.jpg";
    import Logo from "$lib/images/logo2.webp";
    import { onMount } from "svelte";
    import PhoneButton from "$lib/components/Buttons/PhoneButton.svelte";
    import EmailButton from "$lib/components/Buttons/EmailButton.svelte";
    import Maps from "$lib/components/Buttons/MapsButton.svelte";
    import Slogan from "$lib/components/Slogan.svelte";
    import Profile from "$lib/components/Profile.svelte";
    import Scroll2Anchor from "$lib/components/Buttons/Scroll2Anchor.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { url } from "$lib/project.config";
    let innerWidth = $state(0);
    let innerHeight = $state(0);
    let DOMloaded: boolean = $state(false);
    let scrolly = $state(0);

    onMount(() => {
        DOMloaded = true;
    });
    let chromeBrowser = $state(false);
    let isChromeMobile = () => {
        if (typeof navigator !== "undefined") {
            const userAgent = navigator.userAgent;
            return /Chrome/.test(userAgent) && /Android/.test(userAgent);
        } else {
            return false;
        }
    };
    $effect(() => {
        chromeBrowser = isChromeMobile();
    });
</script>

<svelte:head>
    <title
        >Psychologische Beratung, Coaching & Hypnose – Lisa Marie Loof M.Sc.</title
    >
    <meta
        name="description"
        content="Lisa Marie Loof M.Sc. – Psychologin & Coach in Klagenfurt. Praxis für Hypnose, Coaching & psychologische Beratung."
    />
    <meta
        property="og:title"
        content="Ihre Psychologin & Coach in Klagenfurt - Lisa Marie Loof, M.Sc."
    />
    <meta
        property="og:description"
        content="Lisa Marie Loof, M.Sc. – Ihre Psychologin, Coach & Hypnosetrainerin in Klagenfurt."
    />
    <meta property="og:image" content={Logo} />
    <meta property="og:url" content={url} />
    <meta
        property="og:image:alt"
        content="Schriftzug 'Via Vitae - Beratung|Coaching|Hypnose' mit Baumlogo und Blättern"
    />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={PUBLIC_CANONICAL_URL} />
    <link rel="preload" as="image" href={ProfileImage} />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={scrolly} />

<section class="landing-page">
    <LogoSvg
        classNames="background-svg {scrolly > (innerWidth > 1200 ? 5 : 500)
            ? 'background-svg-hide'
            : ''} "
        height="85vh"
        animation={false}
        {scrolly}
        --leaves-main="#f0f0f035"
        --leaves-overlay="#f0f0f035"
        --tree-color="#f0f0f035"
        --tree-overlay="#f0f0f035"
        --svg-stroke-width="0px"
    />

    <div class="landing-page__slogan">
        <Slogan {DOMloaded} {innerWidth}></Slogan>
    </div>
    <div class="landing-page__profile-image">
        <Profile {DOMloaded} {ProfileImage}></Profile>
    </div>
</section>
{#if !isChromeMobile()}
    <Scroll2Anchor {DOMloaded} {scrolly}></Scroll2Anchor>
{/if}
<section>
    <article class="introduction">
        <hgroup>
            <div id="herzlich-willkommen" class="heading">
                Herzlich Willkommen
            </div>
            <h1 class="sub-heading">
                zu Ihrer Psychologische Beratung, Coaching und Hypnose in
                Klagenfurt. Schön, dass Sie den Weg zu mir gefunden haben!
            </h1>
        </hgroup>
        <Spacer></Spacer>
        <p class="text">
            Mein Name ist Lisa-Marie Loof und ich freue mich, Sie auf Ihrem Weg
            zur inneren Balance und persönlichen Entwicklung zu begleiten. In
            meiner Praxis für psychologische Beratung, Coaching und Hypnose
            biete ich Ihnen einen geschützten Raum, in dem Sie sich verstanden
            und angenommen fühlen dürfen.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Ob Sie Unterstützung in herausfordernden Lebenssituationen suchen,
            alte Muster lösen möchten oder neue Perspektiven entdecken wollen –
            ich bin für Sie da. Mit meiner Erfahrung als Psychologin und
            Hypnosetrainerin verbinde ich psychologische Methoden mit der
            kraftvollen Technik der Hypnose, um positive Veränderungen zu
            bewirken.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Sehen Sie sich auf meiner Seite um und erfahren Sie mehr über mein
            Angebot und meine Arbeitsweise. Bei Fragen stehe ich Ihnen gerne zur
            Verfügung. Vereinbaren Sie einen Termin für ein unverbindliches
            Erstgespräch, und lassen Sie uns gemeinsam den ersten Schritt zu
            Ihrer inneren Balance gehen.
        </p>
    </article>
    <article class="contact">
        <h2 class="heading">So können Sie mich erreichen</h2>
        <div class="grid">
            <div class="tile">
                <p class="fraction-text">
                    Gerne können Sie Termine, oder Ihr kostenloses Erstgespräch
                    telefonisch oder über E-Mail vereinbaren.
                </p>
                <div class="contact-buttons" style="">
                    <PhoneButton></PhoneButton>
                    <EmailButton></EmailButton>
                </div>
            </div>
            <div class="tile">
                <div class="image-wrapper">
                    <img
                        src={Praxis1}
                        alt="praxis-raum1"
                        srcset=""
                        loading="lazy"
                        width="auto"
                        height="100%"
                    />
                </div>
            </div>
            <div class="tile">
                <div class="image-wrapper">
                    <img
                        src={Praxis2}
                        alt="praxis-raum2"
                        loading="lazy"
                        srcset=""
                        width="auto"
                        height="100%"
                    />
                </div>
            </div>
            <div class="tile">
                <p class="fraction-text">
                    Mein Praxisraum befindet sich im Zentrum von Klagenfurt.
                </p>
                <div class="contact-buttons">
                    <Maps></Maps>
                </div>
                <p>Waagplatz 3, 9020 Klagenfurt</p>
            </div>
        </div>
    </article>
</section>

<style lang="scss">
    :root {
        --offset: 11rem;
    }

    .landing-page {
        background-color: var(--primary);
        min-height: calc(100vh - var(--offset));
        height: calc(100vh - var(--offset));
        display: flex;
        flex-direction: row;
        min-width: 100vw;
        width: 100%;
        overflow: hidden;
        position: relative;

        background: linear-gradient(
            55deg,
            var(--primary) 40%,
            rgb(255, 255, 255) 100%
        );

        .landing-page__slogan {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
        }
        .landing-page__profile-image {
            width: 50%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
    }
    .introduction {
        max-width: var(--content-width);
        padding: var(--side);

        margin-top: 1rem;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        justify-self: center;
        align-self: center;
        justify-content: center;
        position: relative;
    }
    .contact {
        background-color: var(--surface-3);

        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-self: center;
        justify-content: center;
        padding-block: 2rem;
        position: relative;
        .heading {
            margin: 0;
            padding: 0;
            text-align: center;
            margin-bottom: 4rem;
            margin-top: 1.5rem;
        }
        .grid {
            padding: var(--side);

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            align-self: center;
            height: 100%;
            min-height: fit-content;

            .tile {
                &:nth-child(1),
                &:nth-child(4) {
                    padding: 2rem;
                }
                &:nth-child(1) {
                    border-radius: 0 1.5rem 1.5rem 1.5rem;
                }
                &:nth-child(2) {
                    border-radius: 1.5rem 0 1.5rem 1.5rem;
                }
                &:nth-child(3) {
                    border-radius: 1.5rem 1.5rem 1.5rem 0;
                }
                &:nth-child(4) {
                    border-radius: 1.5rem 1.5rem 0 1.5rem;
                }
                box-shadow: var(--shadow-1);
                background-color: var(--surface-2);
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                width: 100%;
                min-height: fit-content;
                height: 100%;
                max-width: 28rem;
                overflow: hidden;

                .fraction-text {
                    text-wrap: pretty;
                    //padding-inline: 1rem;
                }
                .contact-buttons {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    justify-content: space-around;
                    margin: 1rem;
                }
                .image-wrapper {
                    display: flex;
                    align-items: center;
                    max-height: 350px;
                    width: auto;
                    img {
                        //border-radius: 0.5rem;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            margin-bottom: 3rem;
        }
    }
    //width <= 1500px hide background-svg
    @media (max-width: 1200px) {
        .landing-page {
            background: none;
            background-color: var(--primary);
            .background-svg {
                display: none;
            }
            flex-direction: column-reverse;
            width: 100%;
            .landing-page__slogan {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 6rem;
            }
            .landing-page__profile-image {
                width: 100%;
                height: 100%;
            }
        }
        .landing-page {
            min-height: 90vh;
        }
    }
    @media (max-width: 990px) {
        .grid {
            grid-template-columns: 1fr !important;
            grid-auto-flow: dense;
        }
    }
    @media (max-width: 800px) {
        .introduction {
            margin-top: 70px !important;
        }
    }
    @media (max-width: 520px) {
        .grid {
            grid-template-columns: 1fr !important;
            grid-auto-flow: dense;
            height: max-content;
        }
        .tile {
            &:nth-child(1),
            &:nth-child(4) {
                padding: 0rem;
            }
            .fraction-text {
                text-align: center;
                text-wrap: nowrap;
            }
        }
    }
</style>
