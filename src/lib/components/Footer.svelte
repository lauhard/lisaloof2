<script>
    import { author, instagram } from "$lib/project.config";
    import Instagram from "$lib/svg/instagram.svg";
    //current year
    let year = new Date().getFullYear();
</script>

<footer>
    <section class="footer">
        <div class="cell contact">
            <h4>Kontakt</h4>
            <address class="address-wrapper">
                Lisa-Marie Loof <br />
                Waagplatz 3, 9020 Klagenfurt <br />
                Österreich
            </address>
            <br />
            <ul>
                <li>
                    <a class="" href="tel:+4367761750953"
                        >Tel: +43 (0) 67761750953</a
                    >
                </li>
                <li>
                    <a class="" href="mailto:praxis@lisaloof.com"
                        >Mail: praxis@lisaloof.com</a
                    >
                </li>
            </ul>
        </div>
        <div class="cell sitemap">
            <h4>Links</h4>
            <ul>
                <li>
                    <a class="" href="/">Startseite</a>
                </li>
                <li>
                    <a class="" href="/ueber-mich">Über mich</a>
                </li>
                <li>
                    <a class="" href="/hypnose-klagenfurt">Hypnose</a>
                </li>
                <li>
                    <a class="" href="/psychologische-beratung"
                        >Psychologische Beratung</a
                    >
                </li>
                <li>
                    <a class="" href="/kontakt">Kontakt</a>
                </li>
                <li>
                    <a class="" href="/info">Info</a>
                </li>
                <li>
                    <a
                        class="insta-button"
                        role="button"
                        href={instagram}
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="cell legal-notice">
            <h4>Rechtliches</h4>
            <ul>
                <li>
                    <a class="" href="/impressum">Impressum</a>
                </li>
                <li>
                    <a class="" href="/datenschutz">Datenschutz</a>
                </li>
            </ul>
        </div>
    </section>
    <p class="copyright">© {year} {author} M.Sc. All rights reserved.</p>
</footer>

<style lang="scss">
    footer {
        background-color: #525b58;
        display: flex;
        padding-top: 6rem;
        padding-bottom: 2rem;
        min-height: 15rem;
        width: 100%;
        position: relative;
        .copyright {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 1px;
            color: var(--brand);
        }

        section {
            margin-left: 25rem;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
            justify-content: space-between;
            min-height: 15rem;
            margin-bottom: 3rem;

            .cell {
                display: flex;
                flex-direction: column;
                width: 33.3%;
                height: 100%;

                p,
                h4,
                address,
                a,
                li {
                    color: #fff;
                    text-decoration-color: #fff;
                    font-size: 1.1rem;
                }
                a {
                    &:hover {
                        color: var(--primary);
                        text-decoration-color: var(--primary);
                    }
                }

                li {
                    text-decoration: none;
                    list-style: none;
                }
                h4 {
                    width: 33.3%;
                    font-size: 1.5rem;
                    color: var(--brand);
                    text-align: left;
                }
                .insta-button {
                    background: none;
                    border: none;
                    box-shadow: none;
                    margin: 0;
                    padding: 0;
                    img {
                        height: 3rem;
                        width: 3rem;
                        margin-top: 1rem;
                    }
                    p {
                        text-decoration: underline;
                        &:hover {
                            color: var(--primary);
                        }
                    }
                }
            }
        }
        .contact {
            .address-wrapper {
                margin: 0;
            }
        }
    }

    @media (max-width: 1200px) {
        footer {
            padding-top: 2rem;
            section {
                margin-left: 0;
                flex-direction: column;
                width: 100%;
                .cell {
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    h4 {
                        width: auto;
                        text-align: center;
                        margin-top: 2rem;
                    }
                }
            }

            .contact {
                margin-left: 0rem;
                .address-wrapper {
                    margin: 0;
                }
            }
        }
        footer {
            text-align: start;
            //margin-top: 10px;
        }
    }
</style>
