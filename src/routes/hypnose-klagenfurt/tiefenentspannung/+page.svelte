<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>Leistungen - Tiefenentspannung</title>
    <link rel="preload" as="image" href="" />
    <meta
        name="description"
        content="Tiefenentspannung mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="hero">
            <img
                class="hero-image"
                src="source.unsplash.com/1600x900/?hypnose"
                alt="abgebrannte Zigarette"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Tiefenentspannung</span>
        </div>
        <div class="">
            <h1 class="">Tiefenentspannung</h1>
            <p class="">Den Körper und Geist in Einklang bringen</p>
            <p class="">
                Wir befinden uns in einem Zeitalter, welches durch
                Schnelllebigkeit und Hektik geprägt ist. Wir nehmen uns viel zu
                selten den Raum und die Zeit für uns selbst. Einfach mal
                entspannen und uns eine Auszeit vom Alltag nehmen, um unseren
                Körper und Geist in Einklang zu bringen. Hierfür bietet die
                Tiefenentspannung mittels Hypnose die perfekten
                Rahmenbedingungen.
            </p>
            <p class="">
                Ich würde mich freuen, Sie kennenzulernen und Sie auf dem Weg
                der Tiefenentspannung zu begleiten
            </p>
        </div>
    </div>
</section>

<style lang="scss">
</style>
