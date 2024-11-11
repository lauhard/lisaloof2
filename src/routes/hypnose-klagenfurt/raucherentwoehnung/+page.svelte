<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>Leistungen - Raucherentwoehnung</title>
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
    <div class="hero">
        <img
            class="hero-image"
            src="https://dummyimage.com/600x400/000/fff"
            alt="abgebrannte Zigarette"
            srcset=""
            width="100%"
            height="300px"
        />
        <span>Raucherentwöhnung</span>
    </div>

    <article class="">
        <hgroup>
            <h1 class="heading">Raucherentwöhnung durch Hypnose</h1>
            <p class="sub-heading">
                Rauchfrei werden und Lebensqualität steigern
            </p>
        </hgroup>
        <p class="">
            Zigaretten enthalten viele äußerst toxische Substanzen, wie
            Stickstoffoxide, Schwefeloxide und Ammoniak. Allein in Österreich
            sterben im Jahr ungefähr 14.000 Menschen an tabakinduzierten
            Krankheiten, wobei das Rauchen zu dem größten vermeidbaren
            Risikofaktor für viele verschiedene Krankheiten zählt. Sie sind sich
            dessen jedoch bereits bewusst, da Sie sich hier nach Möglichkeiten
            zur Raucherentwöhnung durch Hypnose informieren. Das zeigt Ihren
            Entschluss, etwas zu verändern.
        </p>
        <br />
        <p class="">
            Ich freue mich darauf, Sie bei Ihrem Vorhaben, das Rauchen
            aufzugeben, zu unterstützen. <br /> Zusammen können wir Ihr Ziel erreichen.
        </p>
    </article>
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
        max-width: var(--content-width);
        padding: var(--side);
        p {
            text-align: justify;
            align-self: center;
            text-align-last: center;
            justify-self: center;
            width: 100%;
        }
    }
</style>
