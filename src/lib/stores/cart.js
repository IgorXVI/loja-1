import { writable, get } from "svelte/store"

export const cartItems = writable([])

export const addToCart = product => {
    const itemns = get(cartItems)

    const newItems = [...itemns, { product, quantity: 1 }]

    cartItems.update(() => newItems)
}

export const removeFromCart = index => {
    const itemns = get(cartItems)

    const newItems = itemns.filter(item => item.product.id !== index)

    cartItems.update(() => newItems)
}