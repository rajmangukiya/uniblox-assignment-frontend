import React from 'react'
import type { Order, OrderProduct } from './types'

const Ordercard = ({ order }: { order: Order }) => {

    return (
        <div className='border-2  rounded-md p-4 w-full mb-5'>
            <h4 className='text-lg font-bold mb-3'>Order ID: #{order.id}</h4>
            {
                order.products.map((product) => (
                    <OrderProductCard key={product.id} product={product} />
                ))
            }
            <p className='text-sm text-gray-500 font-normal mt-3'>Total Amount: Rs <span className='font-bold'>{order.products.reduce((acc, product) => acc + product.price * product.quantity, 0)}</span></p>
            <p className='text-sm text-gray-500 font-normal'>Total Amount After Discount: Rs <span className='font-bold'>{order.totalAmountAfterDiscount}</span></p>
            <p className='text-sm text-gray-500 font-normal'>Discount Amount: Rs <span className='font-bold'>{order.discountAmount}</span></p>
            <p className='text-sm text-gray-500 font-normal'>Coupon Code: <span className='font-bold'>{order.couponCode}</span></p>
        </div>
    )
}

const OrderProductCard = ({ product }: { product: OrderProduct }) => {

    return (
        <div className='bg-gray-200 rounded-md p-4 flex gap-2 mb-5'>
            <img src={product.image} height={100} width={100} alt={product.title} className='w-48 object-cover' />
            <div className='flex flex-col justify-between py-5'>
                <div>
                    <h4 className='text-lg font-bold'>{product.title}</h4>
                    <p className='text-sm text-gray-500'>{product.description}</p>
                    <p className='text-xl text-gray-500 font-bold my-3'>Rs {product.price}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-500'>Quantity: {product.quantity}</p>
                    <p className='text-sm text-gray-500'>Total Price: Rs {product.totalPrice}</p>
                </div>
            </div>
    </div>
  );
};

export default Ordercard;