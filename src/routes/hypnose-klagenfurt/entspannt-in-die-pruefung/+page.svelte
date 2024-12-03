<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Entspannt in die Prüfung / Entspannt vortragen</title>
    <link rel="preload" as="image" href={Pruefungsangst} />
    <meta
        name="description"
        content="Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Pruefungsangst}
        alt=""
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article>
    <hgroup>
        <h1 class="heading">Entspannt in die Prüfung - Entspannt vortragen</h1>
        <p class="sub-heading">
            Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose
        </p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wer kennt es nicht? Es steht eine Prüfung oder ein wichtiger Vortrag an
        und die Aufregung steigt. Wir bekommen schwitzige Hände oder unser
        Herzschlag erhöht sich. Bei manchen Menschen kann dies sogar zu einem
        kompletten Blackout führen, was sie nachhaltig beschäftigt oder
        belastet. Mittels Hypnose ist es möglich, sich diese Situationen genauer
        anzuschauen und zu verändern.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich möchte Sie darin unterstützen, entspannter Vorträge zu halten oder
        Prüfungen zu meistern und zusätzlich Ihr Selbstbewusstsein zu stärken.
    </p>
</article>

<style lang="scss">
    .hero-image {
        object-position: center -360px;
    }
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
