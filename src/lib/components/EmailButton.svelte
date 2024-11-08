<div class="contact-wrapper flex-center">
    <a
        class="contact circle flex-center"
        type="button"
        title="Kontaktformular öffnen"
        aria-label="navigate to contact"
        href="/kontakt"
    >
        <svg
            style="enable-background:new 0 0 24 24;"
            version="1.1"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><g id="info" /><g id="icons"
                ><path
                    d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z"
                    id="email"
                /></g
            ></svg
        >
    </a>
    <span class="number flex-center">praxis@lisaloof.com</span>
</div>

<style lang="postcss">
    .contact {
        width: 4rem;
        height: 4rem;
        background: inherit;
        border: 1px solid var(--accent);
        transition: all var(--animation-time) ease-in-out;
    }
    .contact > svg {
        width: 2rem;
        fill: var(--accent);
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
        width: 10rem;
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
