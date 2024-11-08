<script lang="ts">
    export let classNames = "";
    export let faqs = [
        {
            id: 1,
            question: "Wie fühlt sich Hypnose an?",
            answer: `<p style="padding: 0 20px;">Hypnose fühlt sich für jeden Menschen unterschiedlich an. Die meisten beschreiben ihn als einen sehr angenehmen und befreienden Entspannungszustand, der durch Leichtigkeit getragen wird. Sie können in diesem Zustand auftanken, neue Kraft sammeln. Hypnose kann aber auch als sehr aktiver Zustand empfunden werden, in dem der Prozess des Arbeitens wahrgenommen wird. So macht jeder Mensch seine eigenen Erfahrungen in der Hypnose. Während der Hypnose könne Sie normal kommunizieren und diese immer unterbrechen.</ul>`,
        },
        {
            id: 2,
            question: "Kann jeder hypnotisiert werden?",
            answer: `<p style="padding: 0 20px;">Hypnose als Bewusstseinszustand ist eine biologische Fähigkeit, die jeder Mensch besitzt. Daher ist grundlegend jeder Mensch hypnotisierbar.
                Ausgeschlossen sind hierbei Menschen mit Erkrankungen des Gehirns oder neurologischen Störungen.
                Der Schlüssel zu einer erfolgreichen Hypnose liegt in der Motivation und dem Willen jedes einzelnen Menschen.
                Weitere Kontraindikationen für eine Hypnose:</p>
                <ul style="padding-left:40px;" >
                        <li>
                            Herz- und Anfallserkrankungen oder ähnliche Krankheitsbilder
                        </li>
                        <li>
                            Niedriger Blutdruck
                        </li>
                        <li>
                            Diabetes
                        </li>
                        <li>
                            Psychische Erkrankungen (Depression, Psychosen, Schizophrenie, Borderline, Suizidgefahr…)
                        </li>
                        <li>
                            Alkohol und Drogeneinfluss
                        </li>
                </ul>
            `,
        },
        {
            id: 3,
            question: "Ist Hypnose wie Schlaf?",
            answer: `<p style="padding: 0 20px;" >Nein! Hypnose ist kein Schlaf. Der Mensch befindet sich in einem Bewusstseinszustand zwischen Wachbewusstsein und Schlaf. In diesem ist er in der Regel klar, wach, kann sich an alles erinnern und hat immer die Möglichkeit, die Hypnose zu unterbrechen.</p>`,
        },
        {
            id: 4,
            question: "Macht Hypnose willenlos?",
            answer: `<p style="padding: 0 20px;" >Nein, ganz im Gegenteil! Der Wille des*der Hypnotisierten ist die Grundlage für den Erfolg der Hypnose, da wir immer mit den Zielen des*der Hypnotisierten arbeiten. Hypnose macht nicht willenlos und es werden keine Geheimnisse aufgedeckt, wenn der Hypnotisierte es nicht möchte.</p>`,
        },
        {
            id: 5,
            question: "Kann ich in Hypnose stecken bleiben?",
            answer: `<p style="padding: 0 20px;" >Nein! Hypnose ist ein natürlicher, biologischer Bewusstseinszustand unseres Gehirns. Selbst wenn es Menschen gibt, die sich in diesem angenehmen Zustand der Entspannung so wohl fühlen, dass sie ihn aktuell nicht verlassen möchten, führen äußere Reize oder die natürlichen menschlichen Bedürfnisse dazu, wieder ins Hier und Jetzt zu gelangen.</p>`,
        },
        {
            id: 6,
            question: "Zahlt die Krankenkasse eine Hypnosesitzung?",
            answer: `<p style="padding: 0 20px;" >Die gesetzlichen Krankenkassen übernehmen die Kosten nicht.  Ob die privaten Krankenkassen die Kosten übernehmen, sollten Sie vorab mit Ihrer Krankenkasse abklären.</p>`,
        },
    ];
</script>

<div class="faqs {classNames}" />
{#each faqs as faq}
    <details>
        <summary class="question">{faq.question}</summary>
        {@html faq.answer}
    </details>
{/each}

<style lang="scss">
    :root {
        --font-size-question: 17px;
        --font-size-answer: 17px;
        --max-width: 100%;
        --width: 100vw;
    }
    .faqs {
        width: var(--width);
        max-width: var(--max-width);
        height: auto;
        box-sizing: border-box;
    }

    .question {
        font-size: var(--font-size-question, 17px);
        font-weight: 600;
        width: calc(100% - 10px);
        box-sizing: border-box;
        text-transform: uppercase;
        color: var(--attention) !important;
    }

    .answer {
        font-size: var(--font-size-answer, --font-size-text);
        padding: 0px 20px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
