<script>
    let { currentCart } = $props();
    const f = (cash) => new Intl.NumberFormat().format(cash);
    const itemCount = currentCart.length;
</script>

<div id="cart-summary">
    <span id="item-count">Item count: {currentCart.length}</span>
    <span id="current-gt"
        >Grand total: {f(currentCart.reduce((acc, n) => acc + n.price * n.qty, 0))}</span
    >
</div>

<style>
    #cart-summary {
        padding: 0.1rem;
        display: flex;
        justify-content: space-between;
        background-color: #e1e7f5;
    }

    #cart-summary span {
        color: #333;
        font-size: 0.8rem;
        padding: 0.2rem;
        font-weight: 700;
    }

    #cart-summary > :first-child {
        margin: 0 0 0 0.32rem;
    }

    #cart-summary > :last-child {
        margin: 0 0.1rem 0 0;
    }

    @media screen and (min-width: 900px) {
        #cart-summary {
            padding: 0.15rem 0;
        }

        #cart-summary span {
            margin: 0 auto;
            font-size: 0.9rem;
        }

        #cart-summary > :first-child {
            margin: 0 0 0 0.1rem;
        }

        #cart-summary > :last-child {
            margin: 0 0.1rem 0 0;
        }
    }
</style>
