<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const f = (cash) => new Intl.NumberFormat().format(cash);

    let { checkoutState, currentCart } = $props();
    const currentGT = $derived(
        currentCart.reduce((acc, n) => acc + n.price, 0),
    );
    let checkoutPrompt;
    let paidAmount;

    $effect(() => {
        if (checkoutState) checkoutPrompt?.showModal();
    });

    const resetModal = () => {
        checkoutPrompt.close();
        paidAmount.value = "";
        dispatch("resetModal", { state: false });
    };

    const handleCheckout = () => {
        let paid = parseInt(paidAmount?.value.toString().replace(/,/g, ""));

        if (paidAmount?.value == "") paid = currentGT;
        if (paid < currentGT) {
            paidAmount.value = "";
            paidAmount?.focus();
            return;
        }

        const date = new Date();
        const currentDate =
            date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const currentMonth =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const currentHour =
            date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const currentMinutes =
            date.getMinutes() < 10
                ? `0${date.getMinutes()}`
                : date.getMinutes();
        const currentSeconds =
            date.getSeconds() < 10
                ? `0${date.getSeconds()}`
                : date.getSeconds();

        const finalCart = {
            date: `${currentDate}/${currentMonth}/${date.getFullYear()}`,
            time: `${currentHour}:${currentMinutes}:${currentSeconds}`,
            items: currentCart,
            grand_total: currentGT,
            paid: paid,
        };

        localStorage.setItem("final-cart", JSON.stringify(finalCart));
        resetModal();
        window.open("/receipt/");
    };
</script>

<dialog id="checkout-prompt" bind:this={checkoutPrompt}>
    <span id="final-gt">GT: {f(currentGT)}</span>
    <div id="prompt-input">
        <input
            type="text"
            id="paid-amount"
            inputmode="numeric"
            bind:this={paidAmount}
        />
        <div id="dialog-btn-container">
            <button id="print-btn" onclick={handleCheckout}>Print</button>
            <button id="cancel-btn" onclick={resetModal}>Cancel</button>
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
