<script>
    import CartItem from "$lib/components/CartItem.svelte"
    import { get } from "svelte/store"
    import { cartItems } from "$lib/stores/cart"
    import { formatPrice } from "$lib/helpers/price"

    const calcTotal = (arr) =>
        arr.reduce((acc, item) => acc + item.quantity * item.product.price, 0)

    let items = get(cartItems)
    let totalPrice = formatPrice(calcTotal(items))

    cartItems.subscribe((newCartItems) => {
        items = newCartItems
        totalPrice = formatPrice(calcTotal(newCartItems))
    })

    const handleCheckout = async () => {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                items: items.map((item) => ({
                    stripe_id: item.product.stripe_id,
                    price: item.product.price
                }))
            })
        })

        const data = await response.json()
        window.location = data.url
    }
</script>

<div class="text-white p-3">
    <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold">Cart</h1>
        <a
            href="/categories"
            class="text-neutral-400 underline hover:text-blue-500 duration-300"
            >Continue shopping</a
        >
    </div>
    <div class="py-12 flex flex-col space-y-4">
        {#if items.length > 0}
            {#each items as item}
                <CartItem product={item.product}></CartItem>
            {/each}
        {:else}
            <p class="text-center text-neutral-400 text-2xl mt-12">
                Cart is empty
            </p>
        {/if}
    </div>
    {#if items.length > 0}
        <div class="flex flex-col items-end space-y-4">
            <h2 class="text-xl font-bold">Total: R$ {totalPrice}</h2>
            <button
                class="bg-blue-500 rounded-full px-4 py-2 font-bold hover:bg-blue-600 duration-300"
                on:click={handleCheckout}>Proceed to checkout</button
            >
        </div>
    {/if}
</div>
