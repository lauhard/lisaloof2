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
    <div
        style="display:flex; flex-direction:row; justify-content:center;  align-items:center;"
    >
        <div style="width:35%;">
            <CtaButton text="Zur Hypnose"></CtaButton>
        </div>
        <CtaButton text="Zur Beratung"></CtaButton>
    </div>
</div>

<style lang="scss">
    .slogan {
        --border-color: var(--brand);
        --box-shadow: var(--shadow-1);
        --background-color: var(--brand);
        --background: var(--brand);
        --color: var(--text-1);
        --text-transform: uppercase;
        --box-shadow-hover: var(--shadow-3);
        --letter-spacing: 1px;
        --word-spacing: 5px;
        --font-size: 0.95rem;
        --padding-block: 0.6rem;
        --background-hover: var(--brand);
        --border-color-hover: var(--brand);

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
    }
</style>
