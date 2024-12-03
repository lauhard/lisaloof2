<script lang="ts">
    import Spacer from "$lib/components/Spacer.svelte";
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Digital Detox</title>
    <link rel="preload" as="image" href={Digitaldetox} />
    <meta
        name="description"
        content="Ein Tag ohne Smartphone ist kein Weltuntergang. Digital Detox durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Digitaldetox}
        alt="Smartphone Nahaufnahme"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<article>
    <div class="">
        <hgroup>
            <h1 class="heading">Digital Detox</h1>
            <p class="sub-heading">
                Ein Tag ohne Smartphone ist kein Weltuntergang
            </p>
        </hgroup>
        <Spacer></Spacer>
        <p class="text">
            Instagram, WhatsApp, TikTok und andere Soziale Medien beeinflussen
            uns täglich auf unterschiedliche Weise. Dieses Thema betrifft nicht
            nur Jugendliche. Auch Erwachsene bleiben vor der Informationsflut
            nicht verschont. Viele Menschen nutzen die Sozialen Medien jedoch in
            einem Übermaß oder fühlen sich übermäßig unwohl, wenn das Handy
            nicht in Reichweite ist.
        </p>
        <Spacer></Spacer>
        <p class="text">
            Eine häufige Ursache dafür ist Dopamin: ein Glückshormon, das bei
            der Handy-Nutzung ausgeschüttet wird. Es führt dazu, dass wir uns
            gut fühlen und diesen Zustand aufrechterhalten wollen. Es entsteht
            das Bedürfnis nach mehr. Mit jedem Klingeln oder Vibrieren des
            Handys findet eine Art Konditionierung statt: Der Griff nach dem
            Handy führt zur Dopamin-Ausschüttung. Wir fühlen uns gut.
        </p>
        <Spacer></Spacer>
        <p class="text">
            In der heutigen Zeit ist es daher wichtig, sich zu fragen, warum wir
            die Sozialen Medien nutzen und wie viel wir wirklich davon brauchen.
            Es geht nicht darum, Soziale Medien zu verteufeln, sondern vielmehr
            darum, selbst zu entscheiden, wie wir damit umgehen möchten und eine
            gesunde Einstellung dazu zu entwickeln.
        </p>
        <Spacer></Spacer>
        <p class="text">Ich freue mich darauf, Sie kennenzulernen.</p>
    </div>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
</style>
