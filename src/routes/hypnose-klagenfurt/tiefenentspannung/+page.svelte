<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Tiefenentspannung</title>
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <meta
        name="description"
        content="Tiefenentspannung mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Tiefenentspannung}
        alt="abgebrannte Zigarette"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Tiefenentspannung</h1>
        <p class="sub-heading">Den Körper und Geist in Einklang bringen</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wir befinden uns in einem Zeitalter, welches durch Schnelllebigkeit und
        Hektik geprägt ist. Wir nehmen uns viel zu selten den Raum und die Zeit
        für uns selbst. Einfach mal entspannen und uns eine Auszeit vom Alltag
        nehmen, um unseren Körper und Geist in Einklang zu bringen. Hierfür
        bietet die Tiefenentspannung mittels Hypnose die perfekten
        Rahmenbedingungen.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich würde mich freuen, Sie kennenzulernen und Sie auf dem Weg der
        Tiefenentspannung zu begleiten
    </p>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
