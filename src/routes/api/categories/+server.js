import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

export async function GET() {
    try {
        const categories = await db.category.findMany()
        return new Response(
            JSON.stringify({
                categories
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({
                message:
                    "Something went wrong while trying to fetch categories!",
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
}
