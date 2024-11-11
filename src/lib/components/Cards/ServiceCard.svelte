<script lang="ts">
    import CtaButton2 from "../Buttons/CtaButton.svelte";

    let {
        src = "https://via.placeholder.com/300",
        cardTitle = "title",
        href = "#",
        btnTitle = "Erfahren Sie mehr zu...",
        descr = "description",
    } = $props();
</script>

<article class="card">
    <div class="card-image">
        <img
            {src}
            alt="rauchfrei"
            loading="lazy"
            srcset=""
            width="100%"
            height="100%"
        />
    </div>
    <div class="card-header">
        <h3 class="card-heading">{cardTitle}</h3>
    </div>
    <div class="card-body">
        <p>{descr}</p>
    </div>
    <footer>
        <CtaButton2 {href} title={btnTitle} --border-color="var(--surface-3)"
        ></CtaButton2>
    </footer>
</article>

<style lang="scss">
    .card {
        --card-border-color: #d4cfa241;
        --card-border-color-hover: #bbb7b773;
        --font-size: 1rem;
        --color: var(--text-1);
        --color-hover: var(--text-3);

        box-shadow: var(--shadow-1);
        border: 1px solid var(--card-border-color);
        background-color: #fff;

        display: flex;
        flex-direction: column;
        padding: 0rem;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 1rem !important;
        border-radius: 1rem;
        overflow: hidden;
        max-height: 500px;
        .card-image {
            object-fit: fill;
            width: 100%;
            height: 100%;
            min-height: 280px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 0.7rem;
            }
        }
        .card-header {
            margin: 0;
            padding: 0;
            display: flex;
            width: 100%;
            height: 100%;
            min-height: 3rem;
            height: 3rem;
            justify-content: center;
            align-items: center;
            .card-heading {
                font-size: 1.5rem;
                display: flex;
                margin-top: 1rem;
                justify-content: center;
                color: var(--text-1);
            }
        }
        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: start;
            p {
                padding-inline: 0.5rem;
                text-align: center;
                line-height: 1.4rem;
            }

            margin: 0;
            height: 100%;
            min-height: 5rem;
        }
        footer {
            //button styles
            --box-shadow-hover: none;
            --box-shadow: none;
            --border-color-hover: var(--card-border-color-hover);

            border: none;
            display: flex;
            height: 100%;
            margin: 0;
            padding: 0;
            margin-top: 1rem;
            justify-content: center;
            min-height: 1.3rem;
        }
        transition: all var(--animation-time) ease-in-out;
        &:hover {
            box-shadow: var(--shadow-3);
            transition: all var(--animation-time) ease-in-out;
            border: 1px solid var(--card-border-color-hover);
        }
    }
</style>
