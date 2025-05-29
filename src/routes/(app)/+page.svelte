<script>
    import Cart from "$lib/components/Transaction/Cart.svelte";
    import Form from "$lib/components/Transaction/Form.svelte";
    import Modal from "$lib/components/Transaction/Modal.svelte";
    import Summary from "$lib/components/Transaction/Summary.svelte";

    let currentCart = $state([]);
    let checkoutState = $state(false);

    let itemDetails = $state({
        name: "",
        qty: "",
        price: "",
    });

    const handleEdit = (e) => {
        itemDetails = e.detail.payload;
    };
</script>

<Modal
    bind:checkoutState
    {currentCart}
    on:resetModal={(e) => (checkoutState = e.detail.state)}
/>
<Summary {currentCart} />
<Form bind:currentCart bind:itemDetails />
<Cart
    {currentCart}
    bind:checkoutState
    on:editItem={handleEdit}
    on:checkout={(e) => {
        checkoutState = e.detail.state;
    }}
/>
