<div id="receipt-form">
    <input
        type="text"
        name="item-name"
        id="item-name"
        placeholder="Item Name"
    />
    <div id="number-input-container">
        <input
            type="number"
            name="item-qty"
            id="item-qty"
            placeholder="Quantity"
        />
        <input
            type="text"
            name="item-price"
            id="item-price"
            placeholder="Price"
            inputmode="numeric"
        />
    </div>
    <hr />
    <div class="btn-group">
        <button id="clear-form-btn" aria-label="clear-form-btn">
            <i class="fa-solid fa-eraser"></i>
        </button>
        <input type="button" value="Add Item" id="add-btn" />
    </div>
</div>

<style>
    hr {
        width: 100%;
    }
    #receipt-form {
        margin: 0.3rem;
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
            margin: 0.2rem 0;
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
