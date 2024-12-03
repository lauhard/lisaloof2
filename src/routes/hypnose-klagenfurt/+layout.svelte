<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { base } from "$app/paths";
    let { children, data } = $props();
    console.log("data", data);

    let previousPage: string = base;
    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });
</script>

<section>
    {@render children()}
</section>

<style lang="scss">
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
        //padding: var(--side);
    }
</style>
