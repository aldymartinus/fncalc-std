<script>
    let { currentCart, itemDetails } = $props();

    let nameInput;
    let qtyInput;
    let priceInput;

    const addItem = () => {
        const isFormBlank =
            nameInput.value === "" ||
            qtyInput.value === "" ||
            priceInput.value === "";
        if (!isFormBlank) {
            currentCart.push({
                name: itemDetails.name,
                qty: itemDetails.qty,
                price: itemDetails.price,
            });

            clearForm();
        }
    };

    const clearForm = () => {
        itemDetails.name = "";
        itemDetails.qty = "";
        itemDetails.price = "";

        nameInput?.focus();
    };

    const validateNumberInput = (e) => {
        if (e.target.id === "item-price") {
            if (e.key === "Enter") addItem();
        }
        if (e.key == "Backspace" || e.key == "Enter" || e.key == "Tab") return;
        if (e.key < "0" || e.key > "9") e.preventDefault();
    };
</script>

<div id="receipt-form">
    <input
        bind:this={nameInput}
        bind:value={itemDetails.name}
        type="text"
        name="item-name"
        id="item-name"
        placeholder="Item Name"
    />
    <div id="number-input-container">
        <input
            bind:this={qtyInput}
            bind:value={itemDetails.qty}
            onkeydown={validateNumberInput}
            type="number"
            name="item-qty"
            id="item-qty"
            placeholder="Quantity"
        />
        <input
            bind:this={priceInput}
            bind:value={itemDetails.price}
            onkeydown={validateNumberInput}
            type="number"
            name="item-price"
            id="item-price"
            placeholder="Price"
            inputmode="numeric"
        />
    </div>
    <hr />
    <div class="btn-group">
        <button
            id="clear-form-btn"
            aria-label="clear-form-btn"
            onclick={clearForm}
        >
            <i class="fa-solid fa-eraser"></i>
        </button>
        <input type="button" value="Add Item" id="add-btn" onclick={addItem} />
    </div>
</div>

<style>
    hr {
        width: 100%;
    }
    #receipt-form {
        margin: 0.2rem 0;
        padding: 0.1rem 0.25rem 0 0.25rem;
        display: flex;
        flex-direction: column;
    }

    #receipt-form input {
        padding: 0.3rem;
    }

    #receipt-form > :first-child {
        margin: 0 0 0.2rem 0;
    }

    #number-input-container {
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    #number-input-container input {
        width: 100%;
    }

    #number-input-container > :first-child {
        margin-right: 0.2rem;
    }

    #receipt-form input#add-btn {
        width: 87%;
        cursor: pointer;
        padding: 0.5rem;
        font-weight: 600;
        color: #333;
    }

    #clear-form-btn {
        width: 13%;
        margin: 0 0.2rem 0 0;
        cursor: pointer;
        padding: 0.5rem;
        font-weight: 600;
        color: #333;
    }

    .btn-group {
        display: flex;
    }

    @media screen and (min-width: 900px) {
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type="number"] {
            -moz-appearance: textfield;
        }

        #receipt-form {
            margin: 0.25rem 0;
            display: flex;
            flex-direction: column;
        }

        hr {
            border: none;
            height: 1px;
            background-color: #999;
        }

        #receipt-form input#add-btn {
            font-size: 0.8rem;
        }
    }
</style>
