<script lang="ts">
    let {
        email = "john@doe.com",
        title = "Kontaktformular öffnen",
        arialLabel = "navigate to contact-form",
        href = "#",
    } = $props();
</script>

<div class="contact-wrapper flex-center">
    <a
        class="contact circle flex-center"
        type="button"
        {title}
        aria-label={arialLabel}
        {href}
    >
        <svg
            style="enable-background:new 0 0 24 24;"
            version="1.1"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><g id="info" /><g id="icons"
                ><path
                    d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z"
                    id="email"
                /></g
            ></svg
        >
    </a>
    <span class="description flex-center">{email}</span>
</div>

<style lang="scss">
    .contact {
        width: var(--btn-width, 4rem);
        height: var(--btn-height, 4rem);
        max-width: var(--btn-height, 4rem);
        max-width: var(--btn-width, 4rem);
        min-width: var(--btn-height, 4rem);
        min-width: var(--btn-width, 4rem);
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
