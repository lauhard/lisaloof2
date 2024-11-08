<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import { Check } from "lucide-svelte";
</script>

<svelte:head>
    <title>Leistungen - Online Hypnose</title>
    <link
        rel="preload"
        as="image"
        href="https://dummyimage.com/600x400/000/fff"
    />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="hero">
            <img
                class="hero-image"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Frau mit Laptop auf der Couch"
                srcset=""
                width="100%"
                height="300px"
            />
            <h1>Online Hypnose</h1>
        </div>
        <div class="">
            <p class="">Hypnose bequem von Zuhause</p>
            <p class="">Funktioniert Online Hypnose?</p>
            <p class="">
                Die Antwort lautet, ja warum denn nicht. Wir arbeiten in Hypnose
                mit Ihrem Unterbewusstsein und dafür müssen Sie sich nicht
                physisch mit mir in einem Raum befinden. Es ist also möglich,
                unabhängig von Ihrem Standort „Ihre Zeit für Hypnose und
                Weiterentwicklung“ in Anspruch zu nehmen und an Ihren Themen zu
                arbeiten.
            </p>
            <p class="">Voraussetzungen für eine erfolgreiche Online Hypnose</p>
            <div class="">
                <div class="">
                    <p>Eine stabile Internetverbindung</p>
                </div>
                <div class="">
                    <Check />
                    <p>
                        Einen Laptop, ein Tablet oder Smartphone mit einer
                        Webcam, Mikrofon und Lautsprechern <br />(Hierbei
                        sollten Tablet oder Smartphone fest installiert sein,
                        damit Sie Ihre Hände frei haben)
                    </p>
                </div>
                <div class="">
                    <p>
                        Einen Raum oder Ort mit einem bequemen Stuhl, einer
                        Couch oder Sessel
                    </p>
                </div>
                <div class="">
                    <p class="">
                        Die Umgebung sollte entsprechend ruhig sein und ihre
                        Privatsphäre gewahrt
                    </p>
                </div>
            </div>
            <p class="">
                Wenn Sie also nicht aus dem Raum Klagenfurt kommen und gerne mit
                mir zusammenarbeiten wollen, ist Online Hypnose die perfekte
                Möglichkeit dafür.
            </p>
        </div>
    </div>
</section>

<style lang="scss">
</style>
