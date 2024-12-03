<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    let { children, data } = $props();
    console.log("data", data);

    let previousPage: string = base;
    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });
</script>

<section>
    {@render children()}
    {#if $page.url.pathname !== "/hypnose-klagenfurt"}
        <a
            class="back-button"
            title="Zurück"
            aria-label="zurück zur hypnose"
            href="/hypnose-klagenfurt">Zurück zu Hypnose</a
        >

        <!-- content here -->
    {/if}
</section>

<style lang="scss">
    .back-button {
        margin-top: 2rem;
        padding-block: 0.8rem;
        padding-inline: 1.5rem;
        background-color: var(--primary);
        color: #f5f5f5;
        font-size: 0.9rem;
        word-spacing: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 0.5rem;
    }
    section {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-self: center;
        align-self: center;
        position: relative;
        margin-bottom: 6rem;
        position: relative;
    }
</style>
