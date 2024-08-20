export async function load({ params, fetch }) {
    const productRes = await fetch(`/api/products/${params.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    return productRes.json()
}