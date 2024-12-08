<script lang="ts">
    import { phone } from "$lib/project.config";
    let { title = "Anrufen", arialLabel = "phone link", href = "#" } = $props();
</script>

<div class="contact-wrapper flex-center">
    <a
        type="button"
        {title}
        class="contact circle flex-center"
        aria-label={arialLabel}
        {href}
    >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
            /></svg
        >
    </a>
    <span class="description flex-center">{phone}</span>
</div>

<style lang="scss">
    .contact {
        background: inherit;
        border: 1px solid var(--border-color, var(--primary));
        transition: all var(--animation-time) ease-in-out;
        margin: 0;
        padding: 0;
        padding: 1rem;
        svg {
            height: var(--svg-width, 2rem);
            height: var(--svg-width, 2rem);
            fill: var(--fill, var(--primary));
        }
    }
    .contact:hover {
        background: var(--background, var(--primary));
        box-shadow: var(--box-shadow, var(--shadow-5));
        transition: all var(--animation-time) ease-in-out;
    }
    .contact:hover > svg {
        fill: white;
        transition: all var(--animation-time) ease-in-out;
    }
    .description {
        width: 100%;
        border-radius: 2rem;
        margin-top: 0.2rem;
    }
    .circle {
        border-radius: 50%;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .contact-wrapper {
        width: 10rem;
        height: 7rem;
        gap: 0.5rem;
    }
</style>
