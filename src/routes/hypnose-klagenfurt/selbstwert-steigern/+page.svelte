<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    import Selbstwert from "$lib/images/selbstwert-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Selbstwert steigern</title>
    <link rel="preload" as="image" href={Selbstwert} />
    <meta
        name="description"
        content="Selbstwert steigern mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>
<div class="hero">
    <img
        class="hero-image"
        src={Selbstwert}
        alt="Papier am Fenster mit der Aufschrift mindfulness"
        srcset=""
        width="100%"
        height="100%"
    />
    <span>Selbstwertsteigerung</span>
</div>
<article class="">
    <hgroup>
        <h1 class="heading">Selbswert steigern durch Hypnose</h1>
        <p class="sub-heading">Sie sind gut so wie Sie sind!</p>
    </hgroup>
    <Spacer></Spacer>
    <p class="text">
        Wir alle sind viel zu oft von negativen Einflüssen umgeben, die unser
        Selbstwertgefühl beeinträchtigen. Es ist daher wichtig, dass wir uns mit
        unseren Gefühlen, Gedanken und Handlungen auseinandersetzen. Indem wir
        Verantwortung für unser Handeln übernehmen, können wir selbstbewusst
        durchs Leben gehen. Des Weiteren wirkt der Selbstwert als ein wichtiger
        Schutzfaktor gegen Stress und ist somit ein positiver Faktor für unsere
        Widerstandskraft und Gesundheit.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Ich würde mich freuen, Sie kennenzulernen und Sie darin zu unterstützen,
        Ihren Selbstwert zu steigern und sich einfach wohlzufühlen.
    </p>
</article>

<style lang="scss">
</style>
