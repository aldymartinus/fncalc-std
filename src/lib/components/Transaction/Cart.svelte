<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const f = (cash) => new Intl.NumberFormat().format(cash);

    let { currentCart, checkoutState } = $props();

    const removeItem = (index) => {
        currentCart.splice(index, 1);
    };

    const editItem = (index) => {
        const payload = {
            name: currentCart[index].name,
            qty: currentCart[index].qty,
            price: currentCart[index].price,
        };

        dispatch("editItem", { payload });

        removeItem(index);
    };

    const clearCart = () => {
        currentCart.splice(0, currentCart.length);
    };

    const checkout = () => {
        if (currentCart.length > 0) dispatch("checkout", { state: true });
    };
</script>

<div id="cart-container">
    <div id="item-list">
        {#each currentCart as item, index}
            <div id="item">
                <div id="item-details">
                    <span id="cart-item-name">{item.name}</span>
                    <span id="price-equation"
                        >{item.qty} x {f(item.price)} = {f(
                            item.qty * item.price,
                        )}</span
                    >
                </div>
                <div id="action-btn-container">
                    <button
                        onclick={() => {
                            editItem(index);
                        }}
                        id="edit-btn"
                        data-index="0"
                        aria-label="edit-btn"
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button
                        onclick={() => {
                            removeItem(index);
                        }}
                        id="remove-btn"
                        data-index="0"
                        aria-label="remove-btn"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        {/each}
    </div>
    <div class="btn-group">
        <button
            id="clear-cart-btn"
            aria-label="clear-cart-btn"
            onclick={clearCart}
        >
            <i class="fa-solid fa-broom"></i>
        </button>
        <button id="proceed-btn" onclick={checkout}>Proceed</button>
    </div>
</div>

<style>
    #cart-container {
        margin: 0.39rem 0;
        padding: 0 0.25rem 0.15rem 0.25rem;
        display: flex;
        flex-direction: column;
    }

    #item-list {
        height: 54vh;
        border-radius: 2px;
        border: 1px solid #b0b0b0;
    }

    #proceed-btn {
        width: 87%;
        cursor: pointer;
        margin: 0.2rem 0 0.2rem 0;
        padding: 0.7rem;
        font-weight: 600;
        color: #333;
    }

    .btn-group {
        margin: 0.25rem 0 -4px 0;
        display: flex;
    }

    #clear-cart-btn {
        width: 13%;
        cursor: pointer;
        margin: 0.2rem 0.27rem 0.2rem 0;
        padding: 0.7rem;
        font-weight: 600;
        color: #333;
    }

    #item-details {
        display: flex;
        color: #333;
        flex-direction: column;
    }

    #item {
        font-size: 90%;
        user-select: none;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 0.2rem;
        padding: 0.2rem;
        border-bottom: 1px solid #b0b0b0;
    }

    #action-btn-container {
        opacity: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #edit-btn {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: #333;
        margin: 0 0.3rem 0 0;
    }

    #remove-btn {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: #333;
    }

    #cart-item-name {
        font-weight: 600;
        margin: 0 0 -0.2rem 0;
    }

    #price-equation {
        font-weight: 400;
    }

    @media screen and (min-width: 900px) {
        #cart-container {
            margin: 0;
        }

        #clear-cart-btn {
            margin: 0.2rem 0.27rem 0.2rem 0.05rem;
        }

        #item-list {
            height: 58.5vh;
            margin: 0.2rem 0;
        }

        #proceed-btn {
            margin: 0.2rem 0;
        }

        .btn-group {
            margin: 0 0 0 0;
        }
    }
</style>
