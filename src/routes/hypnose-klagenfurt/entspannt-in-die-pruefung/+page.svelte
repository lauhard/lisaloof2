<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>Leistungen - Entspannt in die Prüfung / Entspannt vortragen</title>
    <link
        rel="preload"
        as="image"
        href="https://dummyimage.com/600x400/000/fff"
    />
    <meta
        name="description"
        content="Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <div class="hero">
        <img
            class="hero-image"
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
            srcset=""
            width="100%"
            height="300px"
        />
        <span>Entspannt in die Prüfung</span>
    </div>
    <article class="">
        <hgroup>
            <h1 class="heading">
                Entspannt in die Prüfung - Entspannt vortragen
            </h1>
            <p class="sub-heading">
                Meistern Sie Prüfungen, Vorträge oder Präsentationen durch
                Hypnose
            </p>
        </hgroup>
        <p class="">
            Wer kennt es nicht? Es steht eine Prüfung oder ein wichtiger Vortrag
            an und die Aufregung steigt. Wir bekommen schwitzige Hände oder
            unser Herzschlag erhöht sich. Bei manchen Menschen kann dies sogar
            zu einem kompletten Blackout führen, was sie nachhaltig beschäftigt
            oder belastet. Mittels Hypnose ist es möglich, sich diese
            Situationen genauer anzuschauen und zu verändern.
        </p>
        <p class="">
            Ich möchte Sie darin unterstützen, entspannter Vorträge zu halten
            oder Prüfungen zu meistern und zusätzlich Ihr Selbstbewusstsein zu
            stärken.
        </p>
    </article>
</section>

<style lang="scss">
</style>
