import React from 'react'
import type { CartProduct } from './types'

const CartProductCard = ({ product, handleUpdateCart }: { product: CartProduct, handleUpdateCart: (id: string, quantity: number) => void }) => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-4 flex flex-col justify-between'>
            <div>
                <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
                <h4 className='text-lg font-bold mt-2'>{product.title}</h4>
                <p className='text-sm text-gray-500'>{product.description}</p>
                <p className='text-xl text-gray-500 font-bold my-3'>Rs {product.price}</p>
            </div>
        <div className='flex items-center gap-2'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => handleUpdateCart(product.id, product.quantity + 1)}>+</button>
            <p className='text-sm text-gray-500 font-bold'>{product.quantity}</p>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => handleUpdateCart(product.id, product.quantity - 1)}>-</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => handleUpdateCart(product.id, 0)}>Remove from Cart</button>
        </div>
        </div>
    )
}

export default CartProductCard