<script>
    export let name
    export let slug
    export let active
</script>

<li>
    <a
        href={`/categories${slug}`}
        class="hover:text-blue-500 duration-300 {active
            ? 'text-blue-500 underline'
            : 'text-white'}"
    >
        {name}
    </a>
</li>
