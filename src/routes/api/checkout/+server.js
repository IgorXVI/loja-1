import Stripe from "stripe"

import { STRIPE_API_KEY, WEBSITE_MAIN_HOST, API_VERSION } from "$env/static/private"

const stripe = new Stripe(STRIPE_API_KEY, {
    apiVersion: API_VERSION
})

export const POST = async ({ request }) => {
    try {
        const { items } = await request.json()
        let lineItems = []
        await items.forEach(item => {
            lineItems.push({
                price_data: {
                    product: item.stripe_id,
                    currency: "brl",
                    unit_amount: item.price
                },
                quantity: 1
            })
        })

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: "payment",
            success_url: `${WEBSITE_MAIN_HOST}/payment-success`,
            cancel_url: `${WEBSITE_MAIN_HOST}/payment-canceled`
        })

        return new Response(JSON.stringify({
            url: session.url
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({
            message: "Something went wrong while trying to checkout!",
            error: error.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}