<script lang="ts">
    import { enhance } from "$app/forms";
    import { formAction } from "$lib/forms/enhance";
    import { createEventDispatcher } from "svelte";
    export let style = "";
    export let action = "";
    const dispatch = createEventDispatcher();
    export let myForm: HTMLFormElement;
    //    console.log("action:", action)
</script>

<div class="form-wrapper" {style}>
    <form
        bind:this={myForm}
        method="POST"
        use:enhance={(e) => formAction(e, dispatch)}
        action="?/{action}"
    >
        <slot></slot>
    </form>
</div>

<style lang="scss">
    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        form {
            min-width: var(--form-min-width, auto);
            max-width: var(--form-max-width, auto);
            width: var(--form-width, 80%);
            height: var(--form-height, auto);
            display: var(--display, "block");
            flex-direction: var(--direction, "column");
        }
    }
</style>
