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

        items.push({
            name: 'TL',
            qty: '',
            price: 0
        })

        items.push({
            name: 'CASH',
            qty: '',
            price: 0
        })
    });
</script>

<div id="receipt-container">
    <div id="receipt-header">
        <span id="store-name">
            {name}
            <br>
            {short_addr}
            <br>
        </span>
    </div>
    <span id="transaction-time">TGL {date} {time}</span>
    <div id="item-list">
        {#each items as item, index}
            {#if index + 1 == items.length - 1}
            <div id="item" style="margin: 0.2rem 0 0 0;">
                <div id="item-qty"></div>
                <div id="item-name">{item.name.toUpperCase()}</div>
                <div id="item-subtotal">·  {f(grand_total)}</div>
            </div>
            {:else if index + 1 === items.length}
            <div id="item">
                <div id="item-qty"></div>
                <div id="item-name">{item.name.toUpperCase()}</div>
                <div id="item-subtotal">·  {f(paid)}</div>
            </div>
            {:else}
            <div id="item">
                <div id="item-qty">{f(item.qty)}</div>
                <div id="item-name">{item.name.toUpperCase()}</div>
                <div id="item-subtotal">·  {f(item.price * item.qty)}</div>
            </div>
            {/if}
        {/each}
    </div>
    <div id="footer-section">
        <span id="footer-text">{footer_txt}</span>
    </div> 
</div>

<style>
    #footer-section {
        text-decoration: underline;
        margin: 0.5rem 0 0 0;
        width: 60mm;
    }

    #transaction-time {
        justify-content: center;
        margin: 0.75rem 0 0.75rem 0.4rem;
        display: flex;
        width: 60mm;
    }

    #item {
        width: 62mm;
        display: flex;
        justify-content: center;
    }

    #item-name {
        margin: 0 0.1rem 0 0;
        word-spacing: -0.17rem;
        overflow: hidden;
        width: 15ch;
        text-overflow: clip;
        white-space: nowrap;
        text-align: left;
    }

    #item-qty {
        margin: 0 0.1rem 0 0;
        text-align: center;
        width: 3ch;
    }

    #item-subtotal {
        width: 9ch;
        text-align: right;
    }

    #receipt-container {
        margin: 0 0.7rem 0 0;
        font-size: 0.90rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #store-name {
        white-space: pre-line;
        margin: 3.5rem 0 0 0;
    }

    #receipt-header {
        display: flex;
        flex-direction: column;
    }
</style>
