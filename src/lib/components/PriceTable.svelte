<script lang="ts">
    let { price = 120, discount = price - 20 } = $props();
</script>

<article class="price-list">
    <table role="grid">
        <thead>
            <tr>
                <th scope="col" class="spacer" />
                <th scope="col" class="text-center attention"
                    >Kostenloses Vorgespräch + 1. Einheit
                </th>
                <th scope="col" class="text-center attention">2. Einheit</th>
                <th scope="col" class="text-center attention"
                    >3. Einheit <br /> (optional)</th
                >
            </tr>
        </thead>
        <tbody>
            <tr class="mobile">
                <td class="text" />
                <td class="text"> Dauer </td>
                <td class="text" />
            </tr>
            <tr class="duration">
                <th scope="row">Dauer</th>
                <td class="text-center">ca. 1.5 - 2 Stunden</td>
                <td class="text-center">ca. 1 Stunde</td>
                <td class="text-center">ca. 1 Stunde</td>
            </tr>
            <tr class="mobile">
                <td class="text" />
                <td class="text"> Honorar </td>
                <td class="text" />
            </tr>
            <tr>
                <th scope="row">Honorar</th>
                <td class="text-center">{price} €</td>
                <td class="text-center">{price} €</td>
                <td class="text-center">{price} €</td>
            </tr>
            <tr class="mobile">
                <td class="text" />
                <td class="text">
                    Studierende<br />Auszubildende
                </td>
                <td class="text" />
            </tr>
            <tr class="offer">
                <th scope="row">Studierende & <br /> Auszubildende</th>
                <td class="text-center">{discount} €</td>
                <td class="text-center">{discount} €</td>
                <td class="text-center">{discount} €</td>
            </tr>
        </tbody>
        <tfoot />
    </table>
    <p class="text text-center attention">
        * Das Honorar ist vor jeder Sitzung in bar zu bezahlen. *
    </p>
</article>

<style lang="scss">
    article {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        box-shadow: none;
        padding: 1.5rem 0;
        margin: 0px;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
    }
    p {
        color: var(--text-1);
    }
    table {
        background-color: var(--primary);
        thead {
            background-color: var(--primary);
            tr {
                th {
                    color: var(--text-1-dark);
                    background-color: var(--primary);
                    font-size: 1rem !important;
                }
            }
        }

        th,
        tr,
        td {
            color: var(--text-1);
            font-size: 1rem;
            line-height: 1.4rem;
        }
        .offer {
            th,
            td {
                background-color: var(--primary);
                background-color: var(--brand) !important;
                color: #fff;
                height: 80px !important;
                min-height: 80px !important;
                max-height: 80px !important;
                box-sizing: border-box;
                border-bottom: none !important;
            }
            position: relative;
            height: 80px !important;
            min-height: 80px !important;
            max-height: 80px !important;
            box-sizing: border-box;
        }
        .duration {
            width: 100%;
        }
        tbody {
            th {
                width: 15%;
                padding-left: 50px;
            }
            td:nth-of-type(1) {
                width: 30%;
            }
            td:nth-of-type(2) {
                width: 20%;
            }
            td:nth-of-type(3) {
                width: 20%;
            }
            .mobile {
                display: none;
            }
        }
    }
    @media screen and (max-width: 770px) {
        table {
            th[scope="row"] {
                display: none;
            }
            .spacer {
                display: none;
            }
            thead {
                tr {
                    th {
                        font-size: 1rem !important;
                    }
                }
            }
            th,
            tr,
            td {
                color: var(--text-1);
                font-size: 1rem;
            }
        }
        .mobile {
            display: table-row !important;
            overflow: hidden !important;
            overflow: hidden !important;
            td {
                text-align: center;
                word-wrap: break-word !important;
                color: var(--brand);
                font-weight: 500;
                font-size: 1rem;
                height: 60px !important;
            }
        }
        .attention {
            font-size: 1rem;
            font-weight: 500;
        }
        .duration {
            background-color: #fff !important;
            width: 100%;
            th,
            td {
                color: var(--text) !important;
                z-index: 10;
            }
        }
    }
    @media screen and (max-width: 400px) {
        thead,
        tr,
        th,
        td {
            font-size: 13px !important;
        }
    }
</style>
