<script>
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();

    let { modalState } = $props();
    let configWindow,
        storeName,
        storeFullAddr,
        storeShortAddr,
        footerTxt,
        storePhone;

    let {name, short_addr, full_addr, footer_txt, phone} = $state('');

    onMount(() => {
        ({ name, short_addr, full_addr, footer_txt, phone } = JSON.parse(
            localStorage.getItem("store-info"),
        ));
    });

    $effect(() => {
        if (modalState) {
            configWindow.style.display = "flex";
            configWindow?.showModal();
        }
    });

    const resetModal = () => {
        dispatch("close-dialog", { state: false });
        configWindow.style.display = "none";
        configWindow?.close();
    };
</script>

<dialog id="config-window" bind:this={configWindow}>
    <span id="modal-title">Customize Receipt</span>
    <div id="prompt-input">
        <input
            type="text"
            id="store-name-txt"
            bind:this={storeName}
            bind:value={name}
            placeholder="Store Name"
        />
        <input
            type="text"
            id="store-short-addr-txt"
            bind:this={storeShortAddr}
            bind:value={short_addr}
            placeholder="Short Address"
        />
        <textarea
            id="store-full-addr-txt"
            placeholder="Full Address"
            bind:this={storeFullAddr}
            bind:value={full_addr}
            rows="5"
            cols="25"
        ></textarea>
        <input
            type="text"
            bind:this={storePhone}
            bind:value={phone}
            inputmode="tel"
            id="store-phone-txt"
            placeholder="Phone"
        />
        <input
            type="text"
            id="footer-txt"
            bind:this={footerTxt}
            bind:value={footer_txt}
            placeholder="Footer Text"
        />
        <div id="dialog-btn-container">
            <button id="cancel-btn" onclick={resetModal}>Cancel</button>
            <button id="save-btn">Save</button>
        </div>
    </div>
</dialog>

<style>
    dialog {
        background-color: #f9f9f9;
        border: 1px solid #b0b0b0;
        border-radius: 2.5px;
        z-index: 99999;
        position: absolute;
        top: -20%;
        display: none;
        flex-direction: column;
        justify-content: center;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(0.5px);
    }

    #dialog-btn-container {
        margin: 0.2rem 0 0 0;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    #dialog-btn-container button {
        cursor: pointer;
        width: 100%;
    }

    #config-window {
        padding: 0;
    }

    #modal-title {
        color: #333;
        padding: 0.3rem;
        margin: 0;
        background-color: #e1e7f5;
        font-weight: 600;
        text-align: center;
    }

    #prompt-input {
        margin: 1rem;
        display: flex;
        flex-direction: column;
    }

    #prompt-input input,
    textarea {
        padding: 0.3rem;
        margin: 0 0 0.3rem 0;
    }

    #cancel-btn {
        padding: 0.4rem;
        margin: 0 0.25rem 0 0;
    }

    @media screen and (min-width: 900px) {
        dialog {
            top: -20%;
        }
    }
</style>
