<script lang="ts">
    import "@picocss/pico";
    import "../app.css";
    import Navigation from "$lib/components/Navigation.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import LogoSvg from "$lib/components/LogoSvg.svelte";
    import { page } from "$app/stores";
    import Aside from "$lib/components/Aside.svelte";
    import { onMount } from "svelte";
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import SocialMedia from "$lib/components/SocialMedia.svelte";
    let { children } = $props();
    let show = $state(false);
    let showInsta = $state(false);
    let scrolly = $state(0);
    let innerWidth = $state(0);
    let innerHeight = $state(0);

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
    const offset = 400;

    let oldScroll: number | undefined = undefined;

    $effect(() => {
        if (scrolly) {
            if (oldScroll === undefined) {
                oldScroll = scrolly;
            }
            if (oldScroll < scrolly && scrolly > offset) {
                showInsta = true;
            } else {
                showInsta = false;
            }
            oldScroll = scrolly;
        }
    });
    afterNavigate(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    });
    onMount(() => {
        if (isMobile()) {
            // Ensure the body is tall enough to allow scrolling
            document.body.style.minHeight = "200vh";

            // Trigger a scroll to hide the address bar
            setTimeout(() => {
                window.scrollTo(0, 1); // Scroll down slightly
            }, 50);

            // Reset the body's height after a short delay
            setTimeout(() => {
                document.body.style.minHeight = "100vh";
            }, 500);
        }
    });
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={scrolly} />

<div class="app">
    {#if show}
        <Aside bind:show></Aside>
    {/if}
    <SocialMedia hide={showInsta}></SocialMedia>
    <Navigation bind:show>
        {#snippet brand()}
            <li class="">
                <Logo />
            </li>
        {/snippet}
    </Navigation>
    <main>
        <LogoSvg
            classNames="background-svg-about-me background-svg-down {(scrolly <=
                10 &&
                $page.url.pathname == '/') ||
            innerWidth < 1560
                ? 'background-svg-hide'
                : ''}"
            height="85vh"
            animation={false}
            {scrolly}
            --leaves-main="#84BDC1"
            --leaves-overlay="#8fcbcf"
            --tree-color="#84BDC1"
            --tree-overlay="#b3e2e5"
            --svg-stroke-width="0rem"
            --svg-stroke="#69aaa554"
        />
        {@render children()}
    </main>
    <Footer></Footer>
</div>

<style lang="scss">
    .app {
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
        background-color: var(--surface-1);
        margin-top: 6rem;
        width: 100vw;
        min-width: 100vw;
        overflow: hidden;
        position: relative;
        main {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            position: relative;
        }
    }
</style>
