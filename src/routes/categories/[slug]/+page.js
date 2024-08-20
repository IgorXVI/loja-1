export async function load({ params, fetch }) {
    const productsRes = await fetch(`/api/categories/${params.slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    return productsRes.json()
}