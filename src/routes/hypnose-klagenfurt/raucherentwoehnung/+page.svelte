<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Raucherentwoehnung</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <meta
        name="description"
        content="Sie wollen endlich rauchfrei werden? Raucherentwöhnung durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={Rauchfrei}
        alt="abgebrannte Zigarette"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Raucherentwöhnung durch Hypnose</h1>
        <p class="sub-heading">Rauchfrei werden und Lebensqualität steigern</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Zigaretten enthalten viele äußerst toxische Substanzen, wie
        Stickstoffoxide, Schwefeloxide und Ammoniak. Allein in Österreich
        sterben im Jahr ungefähr 14.000 Menschen an tabakinduzierten
        Krankheiten, wobei das Rauchen zu dem größten vermeidbaren Risikofaktor
        für viele verschiedene Krankheiten zählt. Sie sind sich dessen jedoch
        bereits bewusst, da Sie sich hier nach Möglichkeiten zur
        Raucherentwöhnung durch Hypnose informieren. Das zeigt Ihren Entschluss,
        etwas zu verändern.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich freue mich darauf, Sie bei Ihrem Vorhaben, das Rauchen aufzugeben,
        zu unterstützen.
    </p>
    <Spacer></Spacer>
    <p class="text">Zusammen können wir Ihr Ziel erreichen.</p>
</article>

<style lang="scss">
    article {
        display: flex;

        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: var(--content-width);
        padding: var(--side);
    }
</style>
