<script>
    import ReceiptConfig from "$lib/components/Customize/ReceiptConfig.svelte";
    import ThemeSelect from "$lib/components/Customize/ThemeSelect.svelte";
    import Alps from "$lib/receipt-template/Alps.svelte";
    import March from "$lib/receipt-template/March.svelte";
    import Merpati from "$lib/receipt-template/Merpati.svelte";
    import Tabula from "$lib/receipt-template/Tabula.svelte";

    let selectedStyle = 'Alps';
    const component = { Alps, March, Merpati, Tabula };
</script>


<main>
    <ThemeSelect bind:selectedStyle on:theme-preview-change={(e) => selectedStyle = e.detail}/>
    <div id="page-setup">
        <div id="receipt-container">
            <svelte:component this={component[selectedStyle]} />
        </div>
    </div>
    <ReceiptConfig />
</main>

<style>
    @font-face {
        font-family: "IBM PS55";
        src: url("../../receipt/fonts/web437_ibm_ps-55_re.woff") format("woff");
    }

    main {
        overflow: hidden;
        flex-direction: column;
        display: flex;
        height: 94vh;
    }

    #page-setup {
        overflow: hidden;
        display: flex;
        scale: 120%;
        margin: 0 auto;
        font-family: "IBM PS55", serif;
    }

    #receipt-container {
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
    }
</style>
