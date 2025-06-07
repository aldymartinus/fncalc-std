<script>
    import { onMount } from "svelte";

    const f = (cash) => new Intl.NumberFormat().format(cash);
    let date, time, items, grand_total, paid;

    onMount(() => {
        ({ date, time, items, grand_total, paid } = JSON.parse(
            localStorage.getItem("final-cart"),
        ));
    });
</script>

<div id="receipt-container">
    <div id="receipt-header">
        <div id="store-information">
            <span id="store-name"><b>LOREM STORE</b></span>
            <span id="store-address">Jl. Aspal No. 48</span>
        </div>
        <div id="receipt-information">
            <span></span>
            <span id="date">{date}</span>
        </div>
    </div>
    <div id="receipt-table">
        <table>
            <thead>
                <tr>
                    <th>QTY</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody>
                {#each items as item}
                    <tr>
                        <td id="item-qty">{f(item.qty)}</td>
                        <td id="item-name">{item.name}</td>
                        <td id="item-price">{f(item.price)}</td>
                        <td id="item-subtotal">{f(item.price * item.qty)}</td>
                    </tr>
                {/each}
                <tr>
                    <td colspan="3" class="no-border">TOTAL <b>>></b></td>
                    <td id="grand-total"><b>{f(grand_total)}</b></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="receipt-footer">

    </div>
</div>

<style>
    #receipt-information {
        flex-direction: column;
        display: flex;
    }

    #store-information {
        margin: 0 0 0.1rem 0;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    #receipt-header {
        display: flex;
        justify-content: space-between;
    }

    #date {
        margin: 0 0.4rem 0 0;
    }

    #receipt-container {
        width: 60mm;
        margin: 3rem 0.7rem 0 0;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
    }

    table {
        border-collapse: collapse;
        border: 1px solid black;
    }

    th,
    td {
        border: 1px solid black;
    }

    #item-qty {
        width: 3ch;
    }

    .no-border {
        text-align: center;
    }

    #item-name {
        padding: 0 0.1rem;
        margin: 0 0.1rem 0 0;
        word-spacing: -0.17rem;
        overflow: hidden;
        width: 15ch;
        text-overflow: clip;
        white-space: nowrap;
        text-align: left;
    }

    #item-price {
        text-align: right;
        width: 9ch;
    }

    #grand-total {
        text-align: right;
        width: 9ch;
    }

    #item-subtotal {
        text-align: right;
        width: 9ch;
    }
</style>
