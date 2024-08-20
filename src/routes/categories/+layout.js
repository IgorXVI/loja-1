export async function load({ fetch }) {
    const categoriesRes = await fetch("/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    return categoriesRes.json()
}