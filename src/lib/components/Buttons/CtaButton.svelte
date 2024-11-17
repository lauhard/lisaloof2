<script lang="ts">
    let {
        children = null,
        DOMloaded = true,
        href = "#",
        title = "Erfahren Sie mehr über meine Angebote",
        ariaLabel = "Read more about my offers",
        text = "Erfahren Sie Mehr",
        type = "button",
        rel = "",
        tabindex = 0,
        target = "",
    } = $props();
</script>

{#if type == "submit"}
    <button
        class="cta-button"
        {tabindex}
        {title}
        {type}
        aria-label={ariaLabel}
        class:cta-show={DOMloaded}
        >{text}
    </button>
{:else}
    <a
        class="cta-button"
        {tabindex}
        {title}
        {href}
        {type}
        {rel}
        {target}
        role="button"
        aria-label={ariaLabel}
        class:cta-show={DOMloaded}
    >
        {#if children}
            {@render children()}
        {/if}

        {text}
    </a>
    <!-- content here -->
{/if}

<style lang="scss">
    .cta-button {
        border: var(--cta-border-color, var(--surface-3)) 1px solid;
        box-shadow: var(--cta-box-shadow, var(--shadow-1));
        background-color: var(--cta-background-color, transparent);
        background: var(--cta-background, transparent);
        color: var(--cta-color, var(--text-3));
        border-radius: var(--cta-border-radius, 1.5rem);
        margin: 0;
        padding: 0;
        padding-block: var(--cta-padding-block, 0.5rem);
        padding-inline: var(--cta-padding-inline, 1.5rem);
        word-spacing: var(--cta-word-spacing, normal);
        font-size: var(--cta-font-size, 0.9rem);
        width: fit-content;
        min-width: var(--cta-min-width);
        letter-spacing: var(--cta-letter-spacing, normal);
        text-transform: var(--cta-text-transform, capitalize);
        display: flex;
        align-self: center;
        transition: all var(--cta-animation-time) ease-in-out;
        &:hover {
            border-color: var(--cta-border-color-hover, var(--surface-3));
            box-shadow: var(--cta-box-shadow-hover, var(--shadow-3));
            background-color: var(--cta-background-color-hover, transparent);
            background: var(--cta-background-hover, transparent);
            color: var(--cta-color-hover, var(--text-3));
            transition: all var(--cta-animation-time) ease-in-out;
        }
    }
</style>
