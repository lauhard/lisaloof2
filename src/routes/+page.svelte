<script lang="ts">
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import LogoSvg from "$lib/components/LogoSvg.svelte";
    import ArrowDown from "lucide-svelte/icons/arrow-down";
    import ProfileImage from "$lib/images/lisa-min.webp";
    import Praxis1 from "$lib/images/praxis1.webp";
    import Praxis2 from "$lib/images/praxis2.webp";
    import { onMount } from "svelte";
    import PhoneButton from "$lib/components/PhoneButton.svelte";
    import EmailButton from "$lib/components/EmailButton.svelte";
    import Maps from "$lib/components/Maps.svelte";
    let innerWidth = $state(0);
    let innerHeight = $state(0);
    let DOMloaded: boolean = $state(false);
    let scrolly = $state(0);
    onMount(() => {
        DOMloaded = true;
    });
</script>

<svelte:head>
    <title
        >Lisa Marie Loof B.Sc. - Zeit für Hypnose und Weiterentwicklung in
        Klagenfurt</title
    >
    <meta
        name="description"
        content="Ihre Zeit der Hypnose und Weiterentwicklung, besuchen Sie mich in meinem Praxisraum in Klagenfunrt am Waaagplatz 1."
    />
    <link rel="canonical" href={PUBLIC_CANONICAL_URL} />
    <link rel="preload" as="image" href={ProfileImage} />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={scrolly} />

<section class="landing-page">
    <LogoSvg
        classNames="background-svg"
        height="85vh"
        animation={false}
        --leaves-main="#f0f0f035"
        --leaves-overlay="#f0f0f035"
        --tree-color="#f0f0f035"
        --tree-overlay="#f0f0f035"
        --svg-stroke-width="0px"
    />

    <div class="landing-page__slogan">
        <div class="slogan">
            <div class="via-vitae">
                <span class="via" class:via-show={DOMloaded}> Via </span>
                <div class="slogan__svg" class:svg-slogan-show={DOMloaded}>
                    <!--
                    -leaves-main="#367D84"
                            --leaves-overlay="#378D93"
                            --tree-color="#378D93"
                            --tree-overlay="#354c58"
                    -->
                    {#if innerWidth >= 1200}
                        <LogoSvg
                            height="7.5rem"
                            animation={false}
                            --leaves-main="#378D93"
                            --leaves-overlay="#57a1a5e5"
                            --tree-color="#378D93"
                            --tree-overlay="#77b5bac8"
                            --svg-stroke-width=".2rem"
                            --svg-stroke="#367D84"
                        ></LogoSvg>
                    {/if}
                </div>
                <span class="vitae" class:vitae-show={DOMloaded}> Vitae </span>
            </div>
            <p class="services" class:line2-show={DOMloaded}>
                <span class="service">Psychologische Beratung</span>
                <span class="spacer">|</span>
                <span class="service">Coaching</span>
                <span class="spacer">|</span>
                <span class="service">Hypnose</span>
            </p>
            <button class="cta" class:cta-show={DOMloaded}
                >Erfahren Sie Mehr</button
            >
        </div>
    </div>
    <div class="landing-page__profile-image">
        <div
            class="profile-image-wrapper"
            class:profile-image-wrapper-show={DOMloaded}
        >
            <img
                class="profile-image"
                src={ProfileImage}
                loading="eager"
                alt="profile"
                srcset=""
                width="100%"
                height="auto"
            />
        </div>
    </div>
    <a
        type="button"
        href="#herzlich-willkommen"
        class="arrow-scroll"
        class:arrow-scroll-down={DOMloaded}
        class:arrow-scroll-down-hide={scrolly > 100}
        title="Zum nächsten Abschnitt scrollen"
        aria-label="button"
    >
        <ArrowDown></ArrowDown>
    </a>
</section>

<section class="content">
    <article class="intro">
        <hgroup>
            <div id="herzlich-willkommen" class="heading">
                Herzlich Willkommen
            </div>
            <h1 class="sub-heading">
                zu Ihrer Psychologische Beratung, Coaching und Hypnose in
                Klagenfurt. Schön, dass Sie den Weg zu mir gefunden haben!
            </h1>
        </hgroup>
        <p class="">
            Mein Name ist Lisa-Marie Loof und ich freue mich, Sie auf Ihrem Weg
            zur inneren Balance und persönlicher Entwicklung zu begleiten. In
            meiner Praxis für psychologische Beratung, Coaching und Hypnose
            biete ich Ihnen einen geschützten Raum, in dem Sie sich verstanden
            und angenommen fühlen dürfen.
        </p>
        <hr />
        <p class="">
            Ob Sie Unterstützung in herausfordernden Lebenssituationen suchen,
            alte Muster lösen möchten oder neue Perspektiven entdecken wollen –
            ich bin für Sie da. Mit meiner Erfahrung als Psychologin und
            Hypnosetrainerin verbinde ich psychologische Methoden mit der
            kraftvollen Technik der Hypnose, um positive Veränderungen zu
            bewirken.
        </p>
        <hr />
        <p class="">
            Sehen Sie sich auf meiner Seite um und erfahren Sie mehr über mein
            Angebot und meine Arbeitsweise. Bei Fragen stehe ich Ihnen gerne zur
            Verfügung. Vereinbaren Sie einen Termin für ein unverbindliches
            Erstgespräch, und lassen Sie uns gemeinsam den ersten Schritt zu
            Ihrer inneren Balance gehen.
        </p>
    </article>
    <article class="find-me">
        <h2 class="so-koennen-sie-mich-finden">So können Sie mich finden</h2>
        <div class="grid">
            <div class="fraction">
                <p class="fraction-text">
                    Gerne können Sie Termine, oder Ihr kostenloses Erstgespräch
                    telefonisch oder über E-Mail vereinbaren.
                </p>
                <div class="contact-buttons" style="">
                    <!--
                       <div class="contact-button">
                        <a
                            type="button"
                            class="contact-icon"
                            title=" Anrufen"
                            aria-label="phone link"
                            href="tel:+4367761750953"
                        >
                            <Phone size="1.6rem"></Phone>
                        </a>
                        <span class="">+43 67761750953 </span>
                    </div>
                    <div class="contact-button">
                        <a
                            class="contact-icon"
                            type="button"
                            title="Kontaktformular öffnen"
                            aria-label="navigate to contact"
                            href="/kontakt"
                        >
                            <Mail size="1.6rem"></Mail>
                        </a>
                        <span class="">praxis@lisaloof.com</span>
                    </div>
                    -->
                    <PhoneButton></PhoneButton>
                    <EmailButton></EmailButton>
                </div>
            </div>
            <div class=" fraction">
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
            <div class="fraction">
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
            <div class="fraction">
                <p class="fraction-text">
                    Mein Praxisraum befindet sich im Zentrum von Klagenfurt.
                </p>
                <div class="contact-buttons">
                    <!--
                    <div class="contact-button">
                        <a
                            class="contact-icon"
                            type="button"
                            title="Adresse in Google Maps öffnen"
                            aria-label="navigate to address"
                            href="https://goo.gl/maps/7Q6Z8"
                        >
                            <Map size="1.8rem"></Map>
                        </a>
                        <span class="">Karte öffnen</span>
                    </div>
                    -->
                    <Maps></Maps>
                </div>
                <p>Waagplatz 3, 9020 Klagenfurt</p>
            </div>
        </div>
    </article>
</section>

<style lang="scss">
    :root {
        --offset: 5rem;
    }
    .landing-page {
        background-color: var(--primary);
        min-height: calc(100vh - var(--offset));
        height: calc(100vh - var(--offset));
        display: flex;
        flex-direction: row;
        min-width: 100vw;
        width: 100%;
        position: relative;
        overflow: hidden;
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
            .slogan {
                display: flex;
                flex-direction: column;
                justify-self: center;
                align-self: end;
                width: 32rem;
                .via-vitae {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    font-size: 6rem;
                    font-style: italic;
                    font-weight: lighter;
                    letter-spacing: -2px;
                    font-family: Zodiak-ThinItalic;
                    .via {
                        margin: 0;
                        padding: 0;
                        margin-right: 1.5rem;
                        color: #354c58;
                    }
                    .vitae {
                        margin: 0;
                        padding: 0;
                        margin-left: 1.2rem;
                        color: #354c58;
                    }
                }
                .services {
                    font-family: PlusJakartaSans-LightItalic;
                    font-size: 1rem;
                    font-weight: lighter;
                    letter-spacing: 0.04rem;
                    width: 100%;
                    margin-top: 0.1rem;
                    text-align: center;
                    font-style: italic;
                    .service {
                        color: #354c58;
                    }
                    .spacer {
                        margin-inline: 0.5rem;
                    }
                }
                .cta {
                    border-radius: 0.4rem;
                    border: var(--surface-3) 1px solid;
                    box-shadow: var(--shadow-2);
                    text-transform: uppercase;
                    margin: 0;
                    padding: 0;
                    padding-block: 0.7rem;
                    padding-inline: 1.5rem;
                    margin: 0 auto;
                    letter-spacing: 2px;
                    word-spacing: 5px;
                    font-size: 0.8rem;
                    margin-top: 1rem;
                    background: var(--brand);
                    color: var(--text-2);
                    transition: all var(--animation-time) ease-in-out;
                    &:hover {
                        box-shadow: var(--shadow-3);
                        border-radius: 1.6rem;
                        transition: all var(--animation-time) ease-in-out;
                    }
                }
            }
        }
        .landing-page__profile-image {
            width: 50%;
            height: 100%;
            position: relative;
            overflow: hidden;
            .profile-image-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                .profile-image {
                    height: auto;
                    max-height: 85%;
                    width: 100%;
                    object-fit: contain;
                    object-position: center center;
                    bottom: 0;
                    position: absolute;
                    margin-left: 2rem;
                }
            }
        }
    }
    .arrow-scroll {
        opacity: 0;
        transition: all var(--animation-time) ease-in-out;
        bottom: -10rem;
        position: absolute;
        left: calc(50% - 2.5rem);
    }
    .arrow-scroll-down {
        bottom: 1rem;
        z-index: 999999;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
        transform-origin: center center;
        transition: all var(--animation-time) ease-in-out;
        background-color: var(--primary);
        color: var(--text-1);
        border-color: #354c5885;
        &:hover {
            border-radius: 50%;
            box-shadow: var(--shadow-3);
            transition: all var(--animation-time) ease-in-out;
        }
    }
    .arrow-scroll-down-hide {
        opacity: 0;
        bottom: -3rem;
        pointer-events: none;
        transition: all 300ms ease-in-out;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-self: center;
        width: 100%;
        min-height: 100vh;
        height: 100%;
        margin: 0;
        padding: 0;

        .intro {
            width: 100%;
            height: 100%;
            min-height: calc(100vh);
            display: flex;
            flex-direction: column;
            justify-self: center;
            align-self: center;
            justify-content: center;
            width: var(--content-width);
            padding: var(--side);
            p {
                text-align: justify;
                text-wrap-mode: wrap;
                max-width: 600px;
                text-wrap-through: none;
                align-self: center;
            }
        }

        .find-me {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-self: center;
            align-self: center;
            justify-content: center;
            background-color: #f3f1d7;
            padding-block: 2rem !important;
            .so-koennen-sie-mich-finden {
                margin: 0;
                margin-bottom: 2.5rem;
                text-align: center;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                align-self: center;
                height: 100%;
                padding: var(--side);
                margin-bottom: 1rem;
                //margin-top: 2rem;
                .fraction {
                    box-shadow: var(--shadow-2);
                    background-color: #cae3d1;
                    max-width: 28rem;
                    width: 100%;
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    text-align: center;
                    padding: 0.5rem;
                    .fraction-text {
                        text-wrap: pretty;
                        padding-inline: 2rem;
                    }
                    .contact-buttons {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        justify-content: space-around;
                        gap: 0.5rem;
                        margin: 1rem;
                        .contact-button {
                            margin: 0;
                            padding: 0;
                            .contact-icon {
                                border-radius: 50%;
                                width: 4rem;
                                height: 4rem;
                                min-width: 4rem;
                                min-height: 4rem;
                                margin: 0;
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                    .image-wrapper {
                        display: flex;
                        align-items: center;
                        max-height: 350px;
                        width: auto;
                        img {
                            border-radius: 0.5rem;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 990px) {
        /* Adjust the width to your needs */
        .grid {
            grid-template-columns: 1fr !important; /* Switch to one column */
            grid-auto-flow: dense;
        }
    }
</style>
