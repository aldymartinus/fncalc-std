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


<div id="receipt-header">
    <span id="store-name">Lorem Store</span>
    <span id="alt-store-name"></span>
    <span id="address">Jl. Asphalt No.420</span>
</div>
<div id="receipt-date">
    <span id="date">{date}</span>
    <span id="time">{time}</span>
</div>
<div id="item-list">
    {#each items as item}
        <div id="item">
            <span id="item-name">{item.name} x{item.qty}</span>
            <div id="price">
                <span id="base-price">@{f(item.price)}</span><span id="subtotal"
                    >{f(item.qty * item.price)}</span
                >
            </div>
        </div>
    {/each}
</div>
<div id="total">
    <span>Total</span>
    <span id="total-price">{f(grand_total)}</span>
</div>
<div id="pay">
    <div id="paid">
        <span>Cash</span>
        <span id="paid-nominal">{f(paid)}</span>
    </div>
    <div id="change">
        <span>Change</span>
        <span id="change-nominal">{f(paid - grand_total)}</span>
    </div>
</div>
<div id="receipt-footer">
    <span id="sign"></span>
    <div id="sign-space"></div>
</div>

<style>
    #store-name {
        font-size: 1.5rem;
        margin: 5.6rem 0 0.1rem 0;
    }

    #alt-store-name {
        margin: -0.3rem 0 0.2rem 0;
        font-weight: 100;
        font-size: 1.5rem;
    }

    #address {
        font-size: 1rem;
        margin: 0 0 0.2rem 0;
    }

    #receipt-header {
        display: flex;
        flex-direction: column;
    }

    #receipt-date {
        padding: 0.5rem 0 0.5rem 0;
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 1rem;
    }

    #item {
        margin: 0 0 0.1rem 0;
        padding: 0.1rem 0 0.1rem 0;
        display: flex;
        text-align: left;
        flex-direction: column;
        font-size: 1.15rem;
    }

    #price {
        display: flex;
        justify-content: space-between;
    }

    #total {
        padding: 0.5rem 0 0.5rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 1.15rem;
        text-decoration: underline;
        font-weight: bold;
    }

    #total-price {
        font-size: 1.2rem;
    }

    #pay {
        font-size: 1.15rem;
    }

    #paid {
        display: flex;
        justify-content: space-between;
    }

    #change {
        display: flex;
        justify-content: space-between;
    }

    #receipt-footer {
        display: none;
        margin: 5rem 0 0 0;
    }

    #sign {
        font-size: 2rem;
    }

    #sign-space {
        height: 35rem;
    }
</style>
