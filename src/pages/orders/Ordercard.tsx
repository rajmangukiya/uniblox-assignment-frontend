import React from 'react'
import type { Order, OrderProduct } from './types'

const Ordercard = ({ order }: { order: Order }) => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-4'>
            <h4 className='text-lg font-bold'>{order.id}</h4>
            {
                order.products.map((product) => (
                    <OrderProductCard key={product.id} product={product} />
                ))
            }
            <p className='text-sm text-gray-500'>Total Amount: Rs {order.products.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
            <p className='text-sm text-gray-500'>Total Amount After Discount: Rs {order.totalAmountAfterDiscount}</p>
            <p className='text-sm text-gray-500'>Discount Amount: Rs {order.discountAmount}</p>
            <p className='text-sm text-gray-500'>Coupon Code: {order.couponCode}</p>
        </div>
    )
}

const OrderProductCard = ({ product }: { product: OrderProduct }) => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-4'>
            <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
            <h4 className='text-lg font-bold'>{product.title}</h4>
            <p className='text-sm text-gray-500'>{product.description}</p>
            <p className='text-sm text-gray-500'>Rs {product.price}</p>
        </div>
    )
}

export default Ordercard