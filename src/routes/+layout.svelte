<script lang="ts">
    import "@picocss/pico";
    import '../app.css';
    import Navigation from "$lib/components/Navigation.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Footer from "$lib/components/Footer.svelte";
    let { children } = $props();
    let show = $state(false);
</script>

<div class="app">
     <Navigation bind:show={show}>
        {#snippet brand()}
                <li class="">
                    <Logo />
                </li>
            {/snippet}
    </Navigation>
    <main>
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

        main {
            margin-top: 5.5rem;
            margin: 0;
            padding: 0;
            height: 100%;
        }
    }
</style>
