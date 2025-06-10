<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let selectedStyle = $state();
    let themeSelection;

    const handleChange = () => {
        dispatch("theme-preview-change", selectedStyle);
        themeSelection.blur();
    };
</script>

<div id="theme-selection-container">
    <select
        id="theme-selection"
        bind:value={selectedStyle}
        bind:this={themeSelection}
        onchange={handleChange}
    >
        <option value="Alps">Alps</option>
        <option value="March">March</option>
        <option value="Merpati">Merpati</option>
        <option value="Tabula">Tabula</option>
    </select>
</div>

<style>
    #theme-selection {
        z-index: 999;
        position: relative;
        cursor: pointer;
        padding: 0.5rem;
        background-color: white;
        border: none;
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
    }
</style>
