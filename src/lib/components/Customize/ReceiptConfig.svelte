<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const handleModal = () => {
        dispatch("show-dialog", { state: true });
    };
</script>

<div id="config-button-container">
    <button id="customize-btn" onclick={handleModal}>Customize</button>
    <button id="save-change-btn">Save Change</button>
</div>

<style>
    #config-button-container {
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
    }

    #customize-btn {
        margin: 0 0.2rem 0.2rem 0.2rem;
    }

    #save-change-btn {
        margin: 0 0.27rem 0.2rem 0;
    }

    #config-button-container button {
        padding: 0.7rem;
        width: 100%;
    }

    #config-button-container:hover button {
        cursor: pointer;
    }

    @media screen and (min-width: 900px) {
        #config-button-container {
            width: 35%;
        }
    }
</style>
