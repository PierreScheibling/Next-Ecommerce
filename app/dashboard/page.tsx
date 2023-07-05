import { PrismaClient } from '@prisma/client'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import formatPrice from '@/util/PriceFormat'
import Image from 'next/image'

export const revalidate = 0

const fetchOrders = async () => {
    const prisma  = new PrismaClient()
    const user = await getServerSession(authOptions)
    if(!user){
        return null
    }
    const orders = await prisma.order.findMany({
        where: {userId: user?.user?.id, }, // status: "complete" },
        include: {products: true}
    })
    return orders
}

export default async function Dashboard() {
    const orders = await fetchOrders()
    if(orders === null){
        return <div>You need to be logged in to view your orders</div>
    }
    if(orders.length === 0){
        <div><h1>No orders placed</h1></div>
    }
    return (
        <div>
            <h1 className="text-center text-2xl font-thin">Your Orders</h1>
            <div className="font-medium">
                {orders.map((order) => (
                    <div key={order.id} className="flex flex-col pt-6 px-6 pb-3 my-4 bg-base-200">
                        <div className="grid grid-cols-2 mb-2">
                            <p>Date : {new Date(order.createdDate).toLocaleDateString('en-GB')}</p>
                            <p className="flex justify-end">Total: {formatPrice(order.amount)}</p>
                        </div>
                        <div className="text-xs grid grid-cols-4 items-center gap-2 py-2">
                            {order.products.map((product) => (
                                <div key={product.id} className="flex">
                                    <Image src={product.image!} alt={product.name} width={36} height={36} priority={true} className="w-16 h-16 object-cover"/>
                                    <div className="flex-col items-center px-3 text-xs font-thin justify-between h-16">
                                        <h2 className="hidden md:flex">{product.name}</h2>
                                        <p className="hidden md:flex">{formatPrice(product.unit_amount)}</p>
                                        <p className="hidden md:flex">Quantity: {product.quantity}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 mb-2 mt-2">
                            <p className="text-xs font-thin mt-1 items-center">Order reference: {order.id}</p>
                            <p className="hidden md:flex text-xs justify-end items-center">
                            Status: {" "}<span className={`${order.status === 'complete' ? "bg-teal-500" : "bg-orange-500"} text-white py-1 rounded-md px-2 mx-2 text-xs`}>{order.status}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}