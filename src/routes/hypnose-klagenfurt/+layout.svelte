<script lang="ts">
    import { afterNavigate, beforeNavigate, onNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import CtaButton from "$lib/components/Buttons/CtaButton.svelte";
    import ContactMe from "$lib/components/ContactMe.svelte";
    import { phone } from "$lib/project.config.js";
    let { children } = $props();

    beforeNavigate(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function delayNavigation() {
        return new Promise((res) => setTimeout(res, 100));
    }

    onNavigate(async (navigation) => {
        // do some work immediately before the navigation completes

        // optionally return a promise to delay navigation until it resolves
        return delayNavigation();
    });
</script>

<section>
    {@render children()}
    <ContactMe></ContactMe>
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
        position: relative;
    }
</style>
