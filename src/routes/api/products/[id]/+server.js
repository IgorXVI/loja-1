import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

export async function GET({ params }) {
    try {
        const product = await db.product.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })

        return new Response(JSON.stringify({
            product
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({
            message: "Something went wrong while trying to fetch product by id!",
            error: error.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}