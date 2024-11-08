<script lang="ts">
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
        <a
            class=" teaser"
            title={btnTitle}
            {href}
            type="button"
            aria-label="auto">Erfahren Sie Mehr</a
        >
    </footer>
</article>

<style lang="scss">
    .card {
        box-shadow: var(--shadow-3);
        border: 1px solid #d4cfa241;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0rem;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        height: 570px;
        .card-image {
            object-fit: fill;
            width: 100%;
            height: 100%;
            min-height: 280px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 1rem;
            }
        }
        .card-header {
            margin: 0;
            padding: 0;
            display: flex;
            width: 100%;
            height: 100%;
            min-height: 3rem;
        }
        .card-body {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
            height: 100%;
            min-height: 5.5rem;
        }
        footer {
            border: none;
            display: flex;
            height: 100%;
            margin: 0;
            padding: 0;
            justify-content: center;
            min-height: 1.3rem;
            a {
                background-color: transparent;
                border-radius: 1rem;
                margin: 0;
                font-size: 0.9rem;
                padding-block: 0.5rem;
                width: 10rem;
                display: flex;
                align-self: end;
                border-color: var(--surface-4);
                &:hover {
                    border-color: var(--brand);
                    color: var(--text-3);
                    background-color: #8d7c3071;
                }
            }
        }
        transition: all var(--animation-time) ease-in-out;
        &:hover {
            box-shadow: var(--shadow-5);
            transition: all var(--animation-time) ease-in-out;
            border: 1px solid #bbb7b773;
        }
    }
</style>
