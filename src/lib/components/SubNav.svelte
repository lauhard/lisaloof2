<script lang="ts">
    import { page } from "$app/stores";
    import Subroutes from "$lib/subroutes";
    let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 815}
    <details class="dropdown">
        <summary>WEITERE LEISTUNGEN</summary>
        <ul>
            {#each Subroutes as route}
                <li>
                    <a href={route.path}>{route.name}</a>
                </li>
                <!-- content here -->
            {/each}
        </ul>
    </details>
{/if}

<style lang="scss">
    summary {
        word-spacing: 0.5rem;
    }
</style>
