<script lang="ts">
    let {
        DOMloaded = true,
        href = "#",
        title = "Erfahren Sie mehr über meine Angebote",
        ariaLabel = "Read more about my offers",
        text = "Erfahren Sie Mehr",
    } = $props();
</script>

<a
    class="cta-button"
    {title}
    {href}
    type="button"
    role="button"
    aria-label={ariaLabel}
    class:cta-show={DOMloaded}>{text}</a
>

<style lang="scss">
    .cta-button {
        border: var(--cta-border-color, var(--surface-3)) 1px solid;
        box-shadow: var(--box-shadow, var(--shadow-1));
        background-color: var(--background-color, transparent);
        background: var(--background, transparent);
        color: var(--color, var(--text-3));
        border-radius: var(--border-radius, 1.5rem);
        margin: 0;
        padding: 0;
        padding-block: var(--padding-block, 0.5rem);
        padding-inline: var(--padding-inline, 1.5rem);
        word-spacing: var(--word-spacing, normal);
        font-size: var(--font-size, 0.9rem);
        width: fit-content;
        min-width: var(--btn-min-width);
        letter-spacing: var(--letter-spacing, normal);
        text-transform: var(--text-transform, capitalize);
        display: flex;
        align-self: center;
        transition: all var(--animation-time) ease-in-out;
        &:hover {
            border-color: var(--border-color-hover, var(--surface-3));
            box-shadow: var(--box-shadow-hover, var(--shadow-3));
            background-color: var(--background-color-hover, transparent);
            background: var(--background-hover, transparent);
            color: var(--color-hover, var(--text-3));
            transition: all var(--animation-time) ease-in-out;
        }
    }
</style>
