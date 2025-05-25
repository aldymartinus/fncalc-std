<script>
    import Cart from "$lib/components/Transaction/Cart.svelte";
    import Form from "$lib/components/Transaction/Form.svelte";
    import Modal from "$lib/components/Transaction/Modal.svelte";
    import Summary from "$lib/components/Transaction/Summary.svelte";

    let currentCart = $state([]);
    let itemDetails = $state({
        name: '',
        qty: '',
        price: ''
    });

    const handleEdit = (e) => {
        itemDetails = e.detail.payload;
    };
</script>

<Modal />
<Summary currentCart = {currentCart} />
<Form bind:currentCart bind:itemDetails />
<Cart currentCart = {currentCart} on:editItem={handleEdit} />