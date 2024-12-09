<script lang="ts">
    import CtaButton from "./Buttons/CtaButton.svelte";
    import LogoSvg from "./LogoSvg.svelte";

    let { DOMloaded = false, innerWidth = 0 } = $props();
</script>

<div class="slogan">
    <div class="via-vitae">
        <span class="via" class:via-show={DOMloaded}> Via </span>
        <div class="slogan__svg" class:svg-slogan-show={DOMloaded}>
            {#if innerWidth >= 1200}
                <LogoSvg
                    height="10rem"
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
    <div style="" class="cta-buttons">
        <CtaButton text="Zur Hypnose" href="/hypnose-klagenfurt"></CtaButton>
        <CtaButton text="Zur Beratung" href="/psychologische-beratung"
        ></CtaButton>
    </div>
</div>

<style lang="scss">
    .slogan {
        --cta-border-color: var(--brand);
        --cta-box-shadow: var(--shadow-1);
        --cta-background-color: var(--brand);
        --cta-background: var(--brand);
        --cta-min-width: 180px;
        --cta-color: var(--text-1);
        --cta-text-transform: uppercase;
        --cta-box-shadow-hover: var(--shadow-3);
        --cta-letter-spacing: 1px;
        --cta-word-spacing: 5px;
        --cta-font-size: 0.95rem;
        --cta-padding-block: 0.6rem;
        --cta-background-hover: var(--brand);
        --cta-border-color-hover: var(--brand);
        --cta-border-color: var(--brand);

        --height: auto;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-self: end;
        margin-bottom: 5rem;
        width: fit-content;
        margin-right: -40px;
        height: var(--height);
        .via-vitae {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 6.5rem;
            letter-spacing: 0px;
            font-family: Zodiak-ThinItalic;
            .via {
                margin-right: 1.5rem;
                color: #1f2937;
            }
            .vitae {
                margin-left: 1.2rem;
                color: #1f2937;
            }
        }
        .services {
            font-family: PlusJakartaSans-LightItalic;
            font-size: 1.15rem;
            letter-spacing: 0.04rem;
            width: 100%;
            margin-top: 0.5rem;
            margin-bottom: 2rem;
            text-align: center;

            display: block;
            .service {
                color: var(--text-3);
            }
            .spacer {
                margin-inline: 0.5rem;
                color: var(--text-3);
            }
        }

        .cta-buttons {
            width: 450px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            align-self: center;
            justify-content: space-around;
        }
    }
    @media (max-width: 1200px) {
        .slogan {
            z-index: 4;
            background-color: var(--primary);
            margin: 0;
            padding: 0;
            padding-top: 1.5rem;
            padding-bottom: 2rem;
            width: 100%;
            .via-vitae {
                font-size: 3rem;
            }
        }
    }
    @media (max-width: 540px) {
        .slogan {
            padding-block: 1rem;
            width: 100%;
            margin-bottom: 1rem;
            .via-vitae {
                .via {
                    margin-right: 0.2rem;
                }
                .vitae {
                    margin-left: 0.2rem;
                }
            }
            .services {
                font-size: 1rem;
                margin-inline: 0;
            }
            .spacer {
                margin-inline: 0rem;
                color: var(--text-3);
            }
            .cta-buttons {
                width: 100%;
                justify-content: space-around;
            }
        }
    }
    @media (max-width: 380px) {
        .slogan {
            --cta-min-width: 155px;
            --cta-word-spacing: 5px;
            --cta-font-size: 0.8rem;
            --cta-padding-block: 0.3rem;
            background-color: var(--primary);
            padding-block: 1rem;
            width: 100%;
            margin-bottom: 1rem;
            .via-vitae {
                margin: 0;
                font-size: 2.5rem;
            }
            .services {
                margin-block: 1rem;
                padding: 0;
            }
        }
    }
</style>
