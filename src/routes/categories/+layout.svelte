<script>
    import CategoryItem from "$lib/components/CategoryItem.svelte"
    import { page } from "$app/stores"
    export let data
</script>

<div class="grid grid-cols-4 md:grid-cols-8 gap-6 p-3">
    <div class="col-span-1">
        <p class="text-neutral-400 uppercase text-xs font-bold">Categories</p>
        <ul class="text-white mt-2.5 space-y-1">
            <CategoryItem
                name="All"
                slug="/"
                active={!$page.params.slug}
            ></CategoryItem>
            {#each data.categories as category}
                <CategoryItem
                    name={category.name}
                    slug={category.slug}
                    active={`/${$page.params.slug}` === category.slug}
                ></CategoryItem>
            {/each}
        </ul>
    </div>
    <div class="col-span-3 md:col-span-7">
        <slot></slot>
    </div>
</div>
