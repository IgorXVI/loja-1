<script>
    import ShopCard from "$lib/components/ShopCard.svelte"

    export let data
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-6">
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
        <p class="text-center text-neutral-400 text-2xl col-span-3 mt-12">
            No products found!
        </p>
    {/if}
</div>
