<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Spacer from "$lib/components/Spacer.svelte";
    let placeholder = "https://dummyimage.com/600x400/000/fff";
</script>

<svelte:head>
    <title>Allgemeine Informationen</title>
    <link rel="preload" as="image" href={placeholder} />
    <meta
        name="description"
        content="Sie wollen endlich rauchfrei werden? Raucherentwöhnung durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={placeholder}
        alt="Information"
        srcset=""
        loading="eager"
        width="100%"
        height="100%"
    />
</div>

<article class="hypnose-information">
    <hgroup>
        <h1 class="heading">Allgemeine Informationen zu Hypnose</h1>
        <p class="sub-heading">So sind meine Sitzungen aufgebaut</p>
    </hgroup>

    <p class="text">
        Die erste Einheit beinhaltet ein kostenloses und unverbindliches
        Vorgespräch. Hierbei möchte ich mir ein Bild von Ihren Erwartungen oder
        bereits vorhandenen Hypnose-Erfahrungen machen. Danach werden wir
        gemeinsam Ihr persönliches Hypnose-Konzept besprechen. Wenn Sie sich
        nach dem Vorgespräch dazu entscheiden, mir Ihr Vertrauen zu schenken,
        stellen wir die Weichen, um gemeinsam an Ihrem Thema zu arbeiten.
    </p>
    <Spacer></Spacer>
    <p class="text">
        In der zweiten Einheit können Gedanken und Gefühle, welche nachträglich
        aufgekommen sind besprochen werden. Wir arbeiten intensiv lösungs- und
        ressourcenorientiert an Ihrem Thema.
    </p>
    <Spacer></Spacer>
    <p class="text">
        In der dritten Einheit (optional) möchte ich Ihnen anbieten, je nach
        Wunsch weiter an Ihren Themen zu arbeiten, neu aufgekommenes zu
        besprechen oder die Selbsthypnose bei Ihnen zu verankern, sodass Sie die
        Möglichkeit haben, auch selbst in Hypnose zu gehen und zu arbeiten.
    </p>
</article>

<style lang="scss">
    article {
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-self: center;
        .faqs {
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            justify-content: center;
            align-self: center;
        }
    }
</style>
