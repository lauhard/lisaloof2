<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; 2021 - <a href="">SvelteKit</a></p>
            </div>
            <div class="col-md-6">
                <p class="text-end">
                    <a href="">Privacy Policy</a> |
                    <a href="">Terms of Service</a>
                </p>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background-color: #f8f9fa;
        padding: 20px 0;
        min-height: 14rem;
    }
    footer p {
        margin: 0;
    }
    footer a {
        color: #000;
        text-decoration: none;
    }
    footer a:hover {
        text-decoration: underline;
    }
    footer .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    footer .row {
        display: flex;
        justify-content: space-between;
    }
    footer .text-end {
        text-align: end;
    }
    @media (max-width: 768px) {
        footer .row {
            flex-direction: column;
        }
        footer .text-end {
            text-align: start;
            margin-top: 10px;
        }
    }
</style>
