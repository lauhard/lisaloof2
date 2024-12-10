<script lang="ts">
    import { instagram } from "$lib/project.config";
    import InstagramSvg from "./InstagramSvg.svelte";
    export let classNames: string = "";
    export let hide = false;
    export let insta: boolean | string = instagram;
    export let facebook: boolean | string = false;
    export let whatsapp: boolean | string = false;

    let showSocialMediaBar = false;
    let focus = false;
</script>

<aside
    class:hide-social-buttons={hide === true && showSocialMediaBar === false}
    class="social-buttons {classNames}"
    on:focus={(e) => {
        focus = true;
    }}
    on:blur={(e) => {
        focus = false;
    }}
    on:mouseover={(e) => (showSocialMediaBar = true)}
    on:mouseleave={(e) => (showSocialMediaBar = false)}
>
    {#if insta}
        <a
            class="social-button"
            href={insta.toString()}
            target="_blank"
            on:mouseover={(e) => (showSocialMediaBar = true)}
            on:mouseleave={(e) => (showSocialMediaBar = false)}
            on:focus={(e) => {
                focus = true;
            }}
            on:blur={(e) => {
                focus = false;
            }}
        >
            <InstagramSvg classNames="social" width="45px"></InstagramSvg>
            <!-- content here -->
        </a>
    {/if}
    {#if facebook}
        <!-- content here -->
    {/if}
    {#if whatsapp}
        <!-- content here -->
    {/if}
    <!-- <img src="{instagram}" alt=""> -->
    <!-- <p class="show-link">Instagram</p> -->
</aside>

<style lang="scss">
    :global(.social) {
        --fill: var(--attention);
    }
    .social-button {
        padding: 10px 5px;
        &:hover {
            :global(.base) {
                --fill: var(--secondary-hover);
                transition: all 0.3s ease-in-out;
            }
        }
    }

    .social-buttons {
        // opacity: 0;
        top: calc(50%);
        transform: translateY(-80%);
        display: flex;
        flex-direction: column;
        position: fixed;
        height: auto !important;
        z-index: 999;
        background-color: white;
        left: 0px;
        align-items: center;
        padding: 20px 5px;
        border-radius: 0 10px 10px 0;
        transition: all 0.5s ease-in-out;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
    }
    .hide-social-buttons {
        // opacity: 0;
        .social-button {
            scale: 0;
        }
        left: -55px;
        background-color: var(--primary);
        transition: all 0.5s ease-in-out;
    }
</style>
