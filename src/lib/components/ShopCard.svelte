<script>
    import { formatPrice } from "../helpers/price"

    export let id
    export let name
    export let price
    export let image = "/no-image.png"

    const priceFormated = formatPrice(price)
</script>

<a
    href={`/product/${id}`}
    class="group relative flex w-full h-full items-center justify-center rounded-lg bg-black border border-neutral-800 hover:border-blue-600"
>
    <img
        src={image}
        alt={name}
        class="w-full h-full object-contain group-hover:scale-105 duration-300"
    />
    <div
        class="absolute bottom-[60px] text-white rounded-full p-1 border border-neutral-900 bg-[rgba(0,0,0,0.5)]
		flex justify-between group-hover:border-blue-700 group-hover:bg-blue-700 duration-300"
    >
        <div class="flex items-center px-4">
            <span>{name}</span>
        </div>
        <div class="flex-none rounded-full bg-blue-600 py-2 px-4 font-bold">
            <span>R$ {priceFormated}</span>
        </div>
    </div>
</a>
