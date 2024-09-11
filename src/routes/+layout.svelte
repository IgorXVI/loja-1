<script>
    import "../app.css"
    import Header from "../lib/components/Header.svelte"
    import Footer from "../lib/components/Footer.svelte"
</script>

<main class="h-screen flex flex-col px-3 md:px-10">
    <div class="sticky md:static">
        <Header></Header>
    </div>
    <div class="overflow-y-scroll md:overflow-y-clip flex flex-col flex-grow">
        <div class="mb-auto md:px-96">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</main>
