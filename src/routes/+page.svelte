<script>
    import ShopCard from "../lib/components/ShopCard.svelte"
    export let data
</script>

<div class="grid md:grid-cols-3 grid-cols-1 gap-6 p-6">
    {#if data.products.length > 0}
        {#each data.products as product}
            <ShopCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
            ></ShopCard>
        {/each}
    {:else}
        <p class="w-full text-center pt-32">No products available!</p>
    {/if}
</div>
