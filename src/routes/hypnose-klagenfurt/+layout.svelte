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
    section{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: var(--content-width);
        justify-self: center;
        padding:var(--side);
    }
</style>
