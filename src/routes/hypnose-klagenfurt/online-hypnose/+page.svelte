<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { Check } from "lucide-svelte";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import Spacer from "$lib/components/Spacer.svelte";
    import SubNav from "$lib/components/SubNav.svelte";
</script>

<svelte:head>
    <title>Leistungen - Online Hypnose</title>
    <link rel="preload" as="image" href={OnlineHypnose} />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<div class="hero">
    <img
        class="hero-image"
        src={OnlineHypnose}
        alt="Frau mit Laptop auf der Couch"
        srcset=""
        width="100%"
        height="100%"
    />
</div>
<SubNav></SubNav>
<article class="">
    <hgroup>
        <h1 class="heading">Online Hypnose</h1>
        <p class="sub-heading">Hypnose bequem von Zuhause</p>
    </hgroup>
    <p class="text">
        Wir arbeiten in Hypnose mit Ihrem Unterbewusstsein und dafür müssen Sie
        sich nicht physisch mit mir in einem Raum befinden. Es ist also möglich,
        unabhängig von Ihrem Standort Hypnose in Anspruch zu nehmen und an Ihren
        Themen zu arbeiten.
    </p>
    <Spacer></Spacer>
    <p class="text">
        Wenn Sie also nicht aus dem Raum Klagenfurt kommen und gerne mit mir
        zusammenarbeiten wollen, ist Online Hypnose die perfekte Möglichkeit
        dafür.
    </p>
    <Spacer></Spacer>
</article>

<article class="prequisits">
    <h3 class="">Voraussetzungen für eine erfolgreiche Online Hypnose:</h3>
    <section>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>Eine stabile Internetverbindung</p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>
                Einen Laptop, ein Tablet oder Smartphone mit einer Webcam,
                Mikrofon und Lautsprechern <br />(Hierbei sollten Tablet oder
                Smartphone fest installiert sein, damit Sie Ihre Hände frei
                haben)
            </p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p>
                Einen Raum oder Ort mit einem bequemen Stuhl, einer Couch oder
                Sessel
            </p>
        </div>
        <div class="prequisit">
            <div>
                <Check color="var(--accent)" />
            </div>
            <p class="">
                Die Umgebung sollte entsprechend ruhig sein und ihre
                Privatsphäre gewahrt
            </p>
        </div>
    </section>
</article>

<style lang="scss">
    article {
        padding: var(--side);
        max-width: var(--content-width);
    }
    .prequisits {
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        align-self: center;
        background-color: var(--surface-3);
        width: 100%;
        padding: var(--side);
        padding-block: 3rem;
        max-width: var(--content-width);

        section {
            margin-top: 2rem;
            align-self: center;
            max-width: 700px;
            width: 100%;
            .prequisit {
                display: flex;
                flex-direction: row;
                width: 100%;
                p {
                    margin-left: 1rem;
                }
            }
        }
    }
</style>
