import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

export async function GET() {
    try {
        const products = await db.product.findMany()
        return new Response(JSON.stringify({
            products
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({
            message: "Something went wrong while trying to fetch products!",
            error: error.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}