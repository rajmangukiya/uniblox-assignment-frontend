import React from 'react'
import type { Product } from './types'

const ProductCard = ({ product, handleAddToCart }: { product: Product, handleAddToCart: (id: string, quantity: number) => void }) => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-4 flex flex-col justify-between'>
            <div>
                <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
                <h4 className='text-lg font-bold mt-2'>{product.title}</h4>
                <p className='text-sm text-gray-500'>{product.description}</p>
                <p className='text-xl text-gray-500 font-bold my-3'>Rs {product.price}</p>
            </div>
        {
            product.isInCart ? (
                <button className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => handleAddToCart(product.id, 0)}>Remove from Cart</button>
            ) : (
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => handleAddToCart(product.id, 1)}>Add to Cart</button>
            )
        }
        </div>
    )
}

export default ProductCard