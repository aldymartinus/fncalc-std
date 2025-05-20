<dialog id="checkout-prompt">
    <span id="final-gt">Enter Paid Amount</span>
    <div id="prompt-input">
        <input type="text" id="paid-amount" inputmode="numeric" />
        <div id="dialog-btn-container">
            <button id="print-btn">Print</button>
            <button id="cancel-btn">Cancel</button>
        </div>
    </div>
</dialog>

<style>
    dialog {
        border: 1px solid #b0b0b0;
        border-radius: 2.5px;
        z-index: 99999;
        position: absolute;
        top: -40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(0.5px);
    }

    #dialog-btn-container {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    #dialog-btn-container button {
        cursor: pointer;
        width: 100%;
    }

    #final-gt {
        font-weight: 600;
        text-align: center;
    }

    #prompt-input {
        margin: 0.3rem 0 0 0;
        display: flex;
        flex-direction: column;
    }

    #paid-amount {
        padding: 0.3rem;
        margin: 0 0 0.3rem 0;
    }

    #print-btn {
        padding: 0.4rem;
        margin: 0 0.25rem 0 0;
    }

    @media screen and (min-width: 900px) {
        dialog {
            top: -25%;
        }
    }
</style>
