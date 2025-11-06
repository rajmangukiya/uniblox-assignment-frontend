import React, { useEffect, useState } from 'react'
import { getAPI, postAPI } from '../../helper/API/APIData'
import type { Order, OrderProduct } from './types'
import Ordercard from './Ordercard'

const Home = () => {
    const [orders, setOrders] = useState<Order[]>([])

    const fetchOrders = async () => {
        try {
            const response = await getAPI('order');
            const data = await response.json()
            console.log('orders', data);

            setOrders(data.orders.map((order: any) => ({
                id: order.id,
                products: order.products.map((p: any) => ({
                    id: p.product.id,
                    title: p.product.title,
                    description: p.product.description,
                    image: p.product.image,
                    price: p.product.price,
                    quantity: p.quantity,
                    totalPrice: p.product.price * p.quantity,
                })),
                totalAmountAfterDiscount: order.totalAmountAfterDiscount,
                discountAmount: order.discountAmount,
                couponCode: order.couponCode,
            })))
            
            // setOrders(data.orders)
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div>
            {
                orders.length > 0 ? (
                    <div className='grid grid-cols-4 gap-4 p-5'>
                        {orders.map((order) => (
                            <Ordercard key={order.id} order={order} />
                        ))}
                    </div>
                ) : <div className='text-center mt-5 text-2xl font-bold'>No orders found</div>
            }
        </div>
    )
}

export default Home