<script lang="ts">
    import LogoSvg from "$lib/components/LogoSvg.svelte";
</script>

<a href="/" class="logo logo-wrapper">
    <div class="circle">
        <LogoSvg
            height="50px"
            animation={true}
            --leaves-main="#fff"
            --leaves-overlay="#fff"
            --tree-color="#fff"
            --tree-overlay="#fff"
            --svg-stroke-width=".1rem"
            --svg-stroke="#fff"
        />
    </div>
    <div class="brand-wrapper">
        <small class="brand-text-top">Psychologin | Coach</small>
        <span class="brand-name">Lisa-Marie Loof</span>
        <small class="brand-text-bottom">Dipl. Hypnosetrainerin</small>
    </div>
</a>

<style lang="scss">
    :global(#logoSvg) {
        width: auto;
        display: flex;
        vertical-align: center;
    }
    .logo {
        min-width: 15.4rem;
        display: flex;
        flex-direction: row;
        vertical-align: center;
        align-items: center;
        margin-inline: 0.5rem;
        text-decoration: none;
    }
    .circle {
        min-width: 70px;
        width: 70px;
        height: 70px;
        min-height: 70px;
        background: var(--brand);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        padding-bottom: 0.2rem;
    }
    .brand-wrapper {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        margin: 0 0 0 10px;
        .brand-name {
            padding: 0;
            margin: 0;
            border: 1px solid var(--brand);
            border-radius: 1rem;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            margin-block: 3px;
            padding-bottom: 2px;
            letter-spacing: 1px;
            color: var(--brand);
            font-weight: 600;
        }
        .brand-text-bottom,
        .brand-text-top {
            padding: 0;
            margin: 0;
            margin-left: 1px;
            //line-height: 1.4;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 2.5px;
            text-align: center;
            color: var(--text-3);
            font-family: PlusJakartaSans-Light, sans-serif;
        }
        .brand-text-top {
            padding-bottom: 2px;
        }
    }
</style>
