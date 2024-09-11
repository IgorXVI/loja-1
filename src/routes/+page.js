export async function load({ fetch }) {
    const productsRes = await fetch("/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })

    return productsRes.json()
}
