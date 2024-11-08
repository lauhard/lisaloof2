<div class="contact-wrapper flex-center">
    <a
        type="button"
        title=" Anrufen"
        class="contact circle flex-center"
        aria-label="phone link"
        href="tel:+4367761750953"
    >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
            /></svg
        >
    </a>
    <span class="number flex-center">+43 67761750953 </span>
</div>

<style lang="postcss">
    .contact {
        width: 4rem;
        height: 4rem;
        background: inherit;
        transition: all 200ms ease-in-out;
        border: 1px solid var(--accent);
    }
    .contact > svg {
        width: 2rem;
        fill: var(--accent);
        animation: none;
    }
    .contact:hover {
        background: var(--accent);
        //transform: scale(1.05); /* Slight scale effect */
        //box-shadow: 0 0 15px rgba(72, 206, 199, 0.7);
        box-shadow: var(--shadow-5);
        transition: all var(--animation-time) ease-in-out;

        //animation: pulse 1s infinite;
    }
    .contact:hover > svg {
        fill: white;
        transition: all var(--animation-time) ease-in-out;
        //animation: shake 0.5s ease-in-out infinite;
        animation-timing-function: ease-in-out;
    }
    .number {
        width: 100%;
        height: 2rem;
        border-radius: 2rem;
    }

    .circle {
        border-radius: 50%;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .contact-wrapper {
        width: 9rem;
        height: 7rem;
        gap: 0.5rem;
    }

    @keyframes shake {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(0deg);
        }
        15% {
            transform: rotate(0deg);
        }
        20% {
            transform: rotate(-7deg);
        }
        40% {
            transform: rotate(7deg);
        }
        60% {
            transform: rotate(-5deg);
        }
        80% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
