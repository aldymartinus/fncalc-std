<script>
    import { onMount } from "svelte";
    import Default from "$lib/receipt-template/Default.svelte";
    import March from "$lib/receipt-template/March.svelte";
    import Alps from "$lib/receipt-template/Alps.svelte";
    import Merpati from "$lib/receipt-template/Merpati.svelte";
    import Tabula from "$lib/receipt-template/Tabula.svelte";

    let selectedStyle = "Alps";
    const component = { Alps, Default, March, Merpati, Tabula };

    onMount(() => {
        // print();
    });
</script>

<main>
    <div id="page-setup">
        <div id="receipt-container">
            <svelte:component this={component[selectedStyle]} />
        </div>
    </div>
</main>

<style>
    @font-face {
        font-family: "IBM PS55";
        src: url("../receipt/fonts/web437_ibm_ps-55_re.woff") format("woff");
    }

    @font-face {
        font-family: "IBM MDA";
        src: url("../receipt/fonts/web437_ibm_mda.woff") format("woff");
    }

    @media print {
        @page {
            width: 58mm auto;
            margin: 0 auto;
        }
    }

    main {
        background-color: #fff;
        width: 100vw;
        height: 90vh;
    }

    #page-setup {
        background-color: #fff;
        width: 58mm;
        scale: 130%;
        margin: 0 auto;
        padding: 0.5rem;
        font-family: "IBM PS55", serif;
    }

    #receipt-container {
        margin: 0 auto;
        text-align: center;
    }
</style>
