<script lang="ts">
    import type { Route } from "../../app";
    import routes from "$lib/routes";
    import subRoutes from "$lib/subroutes";
    import { page } from "$app/stores";
    import { onMount, type Snippet } from "svelte";

    let {
        children = null,
        brand = null,
        style = "",
        theme = "",
        show = $bindable(),
        ...props
    } = $props();
    let innerWidth = $state(800);
    let openSubmenu = $state(false);

    let isActive = (routePath: string) => {
        if (
            $page.url.pathname == routePath ||
            ($page.url.pathname.includes(routePath.toLocaleLowerCase()) &&
                routePath.toLocaleLowerCase() != "/")
        ) {
            return true;
        }
    };
    let anchors: NodeListOf<HTMLLIElement> | null = $state(null);
    let anchorSlider: HTMLDivElement | null = $state(null);

    let hoverAnimation = () => {
        if (anchors === null) {
            anchors = document.querySelectorAll(".route");
            console.log(anchors);
            anchorSlider = document.getElementById(
                "route-indicator",
            ) as HTMLDivElement;
        }
        if (anchorSlider === null) {
            anchorSlider = document.createElement("div");
            anchorSlider.classList.add("anchor-slider");
            anchorSlider.id = "route-indicator";
        }

        for (let route of anchors) {
            route.addEventListener("mouseover", (e) => {
                let anchor = e.target as HTMLLIElement;
                if (!anchor.classList.contains("active") && anchorSlider) {
                    anchor.style.zIndex = "999999";
                    let rect = anchor.getBoundingClientRect();
                    anchorSlider.style.left = `${rect.left + 15}px`;
                    anchorSlider.style.width = `${rect.width - 30}px`;
                    anchorSlider.style.opacity = "1";
                }
            });
            route.addEventListener("mouseout", (e) => {
                let anchor = e.target as HTMLLIElement;
                if (!anchor.classList.contains("active") && anchorSlider) {
                    anchorSlider.style.opacity = "0";
                }
            });
        }
    };
    onMount(() => {
        hoverAnimation();
    });
    $effect(() => {
        if (innerWidth) {
            console.log("start hover animation");
            setTimeout(() => {
                hoverAnimation();
            }, 500);
        }
    });
</script>

<svelte:window bind:innerWidth />

<nav class="">
    <div class="navigation">
        {#if brand != null}
            <ul class="brand">
                {@render (brand as Snippet)()}
            </ul>
        {/if}

        {#if innerWidth <= 815 && innerWidth}
            <ul>
                {@render themeSwticher()}
                <li class="aside-button-wrapper">
                    <button
                        class="aside-button"
                        onclick={() => (show = !show)}
                        onkeydown={() => (show = !show)}
                        type="button"
                        aria-label="toggle menu"
                        aria-live="polite"
                        title="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-menu"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" /><line
                                x1="4"
                                x2="20"
                                y1="6"
                                y2="6"
                            /><line x1="4" x2="20" y1="18" y2="18" /></svg
                        >
                    </button>
                </li>
            </ul>
        {:else}
            <ul class="routes-desktop">
                <div class="anchor-slider" id="route-indicator"></div>
                {#each routes as route}
                    {#if route.name.toLocaleLowerCase() == "hypnose"}
                        <li class:active={isActive(route.path) || openSubmenu}>
                            <a
                                class="route"
                                onfocus={() => {
                                    openSubmenu = true;
                                }}
                                onmousedown={() => {
                                    openSubmenu = !openSubmenu;
                                }}
                                onmouseover={() => {
                                    openSubmenu = true;
                                }}
                                aria-haspopup="true"
                                aria-expanded={openSubmenu}
                                href={(route as Route).path}
                            >
                                {route.name}
                            </a>
                        </li>
                    {:else}
                        <li class:active={isActive(route.path)}>
                            <a
                                class="route"
                                onmouseleave={() => {
                                    openSubmenu = false;
                                }}
                                href={(route as Route).path}
                            >
                                {route.name}
                            </a>
                        </li>
                    {/if}
                    <ul
                        class="submenu"
                        aria-label="services submenu"
                        class:submenuShow={openSubmenu}
                        onmouseleave={() => {
                            openSubmenu = false;
                        }}
                    >
                        {#each subRoutes as subroute}
                            <li>
                                <a class="" href={(subroute as Route).path}>
                                    {subroute.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/each}
                {@render themeSwticher()}
            </ul>
        {/if}
    </div>
</nav>

{#snippet themeSwticher()}
    {#if children}
        <li>
            {@render (children as Snippet)()}
        </li>
    {/if}
{/snippet}

<style lang="scss">
    nav {
        height: 6rem;
        background-color: var(--surface-1);
        box-sizing: border-box;
        position: fixed;
        z-index: 100;
        top: 0;
        width: 100%;
        box-shadow: var(--shadow-2);
        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            box-sizing: border-box;
        }
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li {
            margin: 0;
            padding: 0;
            display: flex;
            text-transform: uppercase;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-size: 0.77rem; //14px;
            text-align: center;
            margin-right: 1.15rem;
            text-align: center;
            height: 100%;
            a {
                text-decoration: none;
                text-align: center;
                color: var(--text-1);
                letter-spacing: 1px;
                font-weight: lighter;
            }
        }
        .routes-desktop {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            justify-self: center;
        }
        .active {
            a {
                position: relative;
                &::before {
                    content: "";
                    display: block;
                    width: calc(100% - 30px);
                    height: 2px;
                    background-color: var(--brand);
                    position: absolute;
                    bottom: 1.8rem;
                    left: 0;
                    transform: translateX(15px);
                    z-index: 0;
                    border-radius: 8px;
                }
            }
        }
        .anchor-slider {
            width: 0px;
            height: 2px;
            background-color: var(--brand);
            position: absolute;
            top: 2.25rem;
            left: 60%;
            z-index: 0;
            border-radius: 10px;
            transition: all 0.3s ease-out;
        }
        .aside-button {
            background: inherit;
            border: none;
            margin: 0;
            padding: 0;
            box-shadow: none;
            .lucide-menu {
                margin-bottom: 0.25rem;
                height: 1.25rem;
                stroke-width: 2.5px;
                color: var(--accent);
            }
        }
    }
    .submenu {
        width: 300px;
        height: 0px;
        color: white;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        position: absolute;
        overflow: hidden;
        top: 4rem;
        opacity: 0;
        z-index: 5;
        margin-left: -2rem;
        border-radius: 1.5rem;
        transition: all var(--animation-time) ease-in-out;
        padding-inline-start: 1.5rem;
    }
    .submenuShow {
        top: 5.2rem;
        width: 300px;
        height: 300px;
        overflow: auto;
        padding-bottom: 1rem;
        box-shadow: var(--shadow-1);
        color: var(--text-1);
        overflow-y: hidden;
        opacity: 1;
        background-color: var(--surface-1);
        transition: all var(--animation-time) ease-in-out;
    }

    @media (max-width: 575.98px) {
        nav {
            box-shadow: var(--shadow-1);
            background: var(--surface-1);
        }
    }
</style>
