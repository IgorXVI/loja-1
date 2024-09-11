import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

export async function GET({ params }) {
    try {
        const category = await db.category.findUnique({
            where: {
                slug: `/${params.slug}`
            },
            include: {
                products: true
            }
        })

        if (!category || !category.products) {
            return new Response(
                JSON.stringify({
                    products: []
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
        }

        return new Response(
            JSON.stringify({
                products: category.products
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
