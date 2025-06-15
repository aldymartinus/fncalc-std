<script>
    import { onMount } from "svelte";

    const f = (cash) => new Intl.NumberFormat().format(cash);
    let date, time, items, grand_total, paid;
    let name, short_addr, full_addr, footer_txt, phone;

    onMount(() => {
        ({ date, time, items, grand_total, paid } = JSON.parse(
            localStorage.getItem("final-cart"),
        ));

        ({ name, short_addr, full_addr, footer_txt, phone } = JSON.parse(
            localStorage.getItem("store-info"),
        ));
    });
</script>

<div id="receipt-container">
    <div id="receipt-header">
        <span id="store-name">{name}</span>
        <span id="address">
            {full_addr}
        </span>
    </div>
    <div id="receipt-identifier">
        <span>====================================</span>
        <div id="identifier-content">
            <span id="receipt-id">BON APTX4869</span>
            <span id="cashier-name">KASIR: BUDI</span>
        </div>
        <span>====================================</span>
    </div>
    <div id="item-list">
        {#each items as item}
            <div id="item">
                <div id="item-name">{item.name.toUpperCase()}</div>
                <div id="item-qty">{f(item.qty)}</div>
                <div id="item-price">{f(item.price)}</div>
                <div id="item-subtotal">{f(item.price * item.qty)}</div>
            </div>
        {/each}
        <span style="letter-spacing: 0.15px;"
            >-----------------------------------</span
        >
        <br />
        <span style="letter-spacing: 0.15px;"
            >-----------------------------------</span
        >
    </div>
    <div id="payment-details-container">
        <div id="grand-total" class="payment-details">
            <span class="payment-details-placeholder">Total Belanja</span>
            <span id="payment-details-value">{f(grand_total)}</span>
        </div>
        <div id="paid-amount" class="payment-details">
            <span class="payment-details-placeholder">Tunai</span>
            <span id="payment-details-value">{f(paid)}</span>
        </div>
        <div id="change" class="payment-details">
            <span class="payment-details-placeholder">Kembalian</span>
            <span id="payment-details-value">{f(paid - grand_total)}</span>
        </div>
        <span>====================================</span>
        <span id="transaction-time">Tgl. {date} {time} Dev. Aldy</span>
        <span style="letter-spacing: 0.16px;"
            >+---------------------------------+</span
        >
        <div id="footer-section">
            <span id="footer-text">{footer_txt}</span>
            <span>SMS/WA: {phone}</span>
        </div>
    </div>
</div>

<style>
    #change {
        margin: 0 0 0.15rem 0;
    }

    #item-list {
        margin: 0.15rem 0;
    }

    #footer-section {
        display: flex;
        flex-direction: column;
    }

    #footer-text {
        margin: 0.2rem 0 0.2rem 0;
    }

    #transaction-time {
        margin: 0.15rem 0;
        display: block;
        width: 100%;
    }

    #payment-details-container {
        margin: -0.19rem 0 0 0;
        width: 58mm;
    }

    .payment-details {
        display: flex;
        justify-content: space-between;
    }

    #item {
        margin: 0.1rem 0;
        width: 58mm;
        display: flex;
        justify-content: space-between;
    }

    #item div {
        /* border: 1px solid black; */
    }

    #item-name {
        word-spacing: -0.17rem;
        overflow: hidden;
        width: 15ch;
        text-overflow: clip;
        white-space: nowrap;
        text-align: left;
    }

    #item-qty {
        text-align: right;
        width: 3ch;
    }

    #item-price {
        text-align: right;
        width: 9ch;
    }

    #item-subtotal {
        width: 9ch;
        text-align: right;
    }

    #receipt-container {
        margin: 0 0.4rem 0 0;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #identifier-content {
        margin: 0.15rem 0;
        display: flex;
        justify-content: space-between;
    }

    #receipt-identifier {
        width: 58mm;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #store-name {
        margin: 4.5rem 0 0 0;
    }

    #address {
        white-space: pre-line;
        margin: 0 0 0.2rem 0;
    }

    #receipt-header {
        display: flex;
        flex-direction: column;
    }
</style>
