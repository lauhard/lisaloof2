<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>Allgemeine Informationen</title>
    <link
        rel="preload"
        as="image"
        href="https://dummyimage.com/600x400/000/fff"
    />
    <meta
        name="description"
        content="Sie wollen endlich rauchfrei werden? Raucherentwöhnung durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section>
    <aritcle class="raucherentwoehnung">
        <div class="hero">
            <img
                class="hero-image"
                src="https://dummyimage.com/600x400/000/fff"
                alt="abgebrannte Zigarette"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Allgemeine Informationen</span>
        </div>

        <div class="">
            <h1 class="">Allgemeine Informationen zu Hypnose</h1>
            <p class="">So sind meine Sitzungen aufgebaut</p>
            <p>
                Die erste Einheit beinhaltet ein kostenloses und unverbindliches
                Vorgespräch. Hierbei möchte ich mir ein Bild von Ihren
                Erwartungen oder bereits vorhandenen Hypnose-Erfahrungen machen.
                Danach werden wir gemeinsam Ihr persönliches Hypnose-Konzept
                besprechen. Wenn Sie sich nach dem Vorgespräch dazu entscheiden,
                mir Ihr Vertrauen zu schenken, stellen wir die Weichen, um
                gemeinsam an Ihrem Thema zu arbeiten.
            </p>
            <hr />
            <p>
                In der zweiten Einheit können Gedanken und Gefühle, welche
                nachträglich aufgekommen sind besprochen werden. Wir arbeiten
                intensiv lösungs- und ressourcenorientiert an Ihrem Thema.
            </p>
            <hr />
            <p>
                In der dritten Einheit (optional) möchte ich Ihnen anbieten, je
                nach Wunsch weiter an Ihren Themen zu arbeiten, neu
                aufgekommenes zu besprechen oder die Selbsthypnose bei Ihnen zu
                verankern, sodass Sie die Möglichkeit haben, auch selbst in
                Hypnose zu gehen und zu arbeiten.
            </p>
            <hr />
        </div>
    </aritcle>
</section>

<style lang="scss">
    section {
        display: flex;
        height: var(--section-height);
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .raucherentwoehnung {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>
