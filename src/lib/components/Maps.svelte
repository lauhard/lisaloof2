<div class="contact-wrapper flex-center">
    <a
        type="button"
        href="https://maps.app.goo.gl/pRxEHQqSaaTQySaW6"
        class="contact circle flex-center"
        target="_blank"
        rel="noopener noreferrer"
        title="Karte öffnen"
        aria-label="navigate to contact"
    >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
            ><defs
                ><style>
                    .cls-1 {
                        fill: none;
                    }
                </style></defs
            ><g data-name="Layer 2" id="Layer_2"
                ><path
                    d="M22,19a1,1,0,0,1-.7-.28l-4.24-4.1a6.67,6.67,0,0,1,0-9.64h0a7.17,7.17,0,0,1,9.88,0,6.67,6.67,0,0,1,0,9.64l-4.24,4.1A1,1,0,0,1,22,19ZM22,5a5.07,5.07,0,0,0-3.55,1.42h0a4.66,4.66,0,0,0,0,6.76L22,16.61l3.55-3.43a4.66,4.66,0,0,0,0-6.76A5.09,5.09,0,0,0,22,5Zm-4.24.7h0Z"
                /><path
                    d="M11,29a1,1,0,0,1-.5-.13l-7-4A1,1,0,0,1,3,24V6a1,1,0,0,1,.5-.87,1,1,0,0,1,1,0l7,4A1,1,0,0,1,12,10V28a1,1,0,0,1-.5.87A1,1,0,0,1,11,29ZM5,23.42l5,2.86V10.58L5,7.72Z"
                /><path
                    d="M11,29a1,1,0,0,1-.5-.13A1,1,0,0,1,10,28V10a1,1,0,0,1,.5-.87l6-3.43a1,1,0,0,1,1.37.38,1,1,0,0,1-.37,1.36L12,10.58v15.7l5.5-3.15a1,1,0,1,1,1,1.74l-7,4A1,1,0,0,1,11,29Z"
                /><path
                    d="M25,29a1,1,0,0,1-.5-.13l-7-4A1,1,0,0,1,17,24V15a1,1,0,0,1,2,0v8.42l5,2.86V16a1,1,0,0,1,2,0V28a1,1,0,0,1-.5.87A1,1,0,0,1,25,29Z"
                /><path
                    d="M22,13a3,3,0,1,1,3-3A3,3,0,0,1,22,13Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,22,9Z"
                /></g
            ><g id="frame"><rect class="cls-1" height="32" width="32" /></g
            ></svg
        >
    </a>
    <div class="number flex-center leading-relaxed">
        <p>Karte öffnen</p>
    </div>
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
