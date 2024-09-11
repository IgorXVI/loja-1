<script>
    import { formatPrice } from "$lib/helpers/price"
    import { addToCart } from "$lib/stores/cart"

    export let data

    const product = data.product

    let priceFormated = "0"

    if (product) {
        priceFormated = formatPrice(product.price)
    }

    const handleAddToCart = () => addToCart(product)
</script>

{#if product}
    <div
        class="text-white group grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 bg-black rounded-md h-[720px] border-neutral-400 p-10"
    >
        <div class="md:col-span-2 h-full flex items-center justify-center">
            <img
                src={product.image}
                alt={product.name}
                class="h-auto md:h-[500px]"
            />
        </div>

        <div class="flex flex-col space-y-4">
            <h1 class="text-5xl bold">{product.name}</h1>
            <div class="bg-blue-500 w-fit py-1.5 px-2.5 rounded-full">
                R$ {priceFormated}
            </div>
            <hr />
            <p class="text-neutral-400">{product.description}</p>
            <button
                class="bg-blue-600 rounded-full px-6 py-4 hover:bg-blue-500 duration-300"
                on:click={handleAddToCart}>Add to cart</button
            >
        </div>
    </div>
{:else}
    <p class="w-full text-center pt-32">Product not found!</p>
{/if}
