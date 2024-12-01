<script lang="ts">
    import { ArrowDown } from "lucide-svelte";
    let { DOMloaded = false, scrolly = 0 } = $props();
</script>

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

<style lang="scss">
    .arrow-scroll {
        --animation-time: 100ms;
        opacity: 1;
        transition: all var(--animation-time) ease-in-out;
        bottom: 7rem;
        position: fixed;
        transform: translateX(-50%);
        left: 50%;
        margin: 0;
    }
    .arrow-scroll-down {
        z-index: 10;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
        transform-origin: center center;
        transition: all var(--animation-time) ease-in-out;
        background-color: transparent;
        color: var(--text-1);
        border-color: var(--text-1);
        &:hover {
            border-radius: 20%;
            transition: all var(--animation-time) ease-in-out;
        }
    }
    .arrow-scroll-down-hide {
        opacity: 0;
        bottom: -5rem;
        pointer-events: none;
        transition: all var(--animation-time) ease-in-out;
    }
    @media (max-width: 1200px) {
        .arrow-scroll-down {
            bottom: 1rem;
        }
    }
</style>
