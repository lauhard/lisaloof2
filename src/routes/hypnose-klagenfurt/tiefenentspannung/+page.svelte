<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>Leistungen - Tiefenentspannung</title>
    <meta
        name="description"
        content="Tiefenentspannung mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<article class="">
    <div class="hero">
        <img
            class="hero-image"
            src="https://dummyimage.com/600x400/000/fff"
            alt="abgebrannte Zigarette"
            srcset=""
            width="100%"
            height="300px"
        />
        <span>Tiefenentspannung</span>
    </div>
    <hgroup>
        <h1 class="heading">Tiefenentspannung</h1>
        <p class="sub-heading">Den Körper und Geist in Einklang bringen</p>
    </hgroup>
    <p class="">
        Wir befinden uns in einem Zeitalter, welches durch Schnelllebigkeit und
        Hektik geprägt ist. Wir nehmen uns viel zu selten den Raum und die Zeit
        für uns selbst. Einfach mal entspannen und uns eine Auszeit vom Alltag
        nehmen, um unseren Körper und Geist in Einklang zu bringen. Hierfür
        bietet die Tiefenentspannung mittels Hypnose die perfekten
        Rahmenbedingungen.
    </p>
    <p class="">
        Ich würde mich freuen, Sie kennenzulernen und Sie auf dem Weg der
        Tiefenentspannung zu begleiten
    </p>
</article>

<style lang="scss">
</style>
