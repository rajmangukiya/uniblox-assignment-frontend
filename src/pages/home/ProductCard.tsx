import React from 'react'
import type { Product } from './types'

const ProductCard = ({ product, handleAddToCart }: { product: Product, handleAddToCart: (id: string, quantity: number) => void }) => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-4'>
            <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
            <h4 className='text-lg font-bold'>{product.title}</h4>
            <p className='text-sm text-gray-500'>{product.description}</p>
            <p className='text-sm text-gray-500'>Rs {product.price}</p>
            {/* <p className='text-sm text-gray-500'>{product.createdAt}</p>
        <p className='text-sm text-gray-500'>{product.updatedAt}</p> */}
        {
            product.isInCart ? (
                <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => handleAddToCart(product.id, 0)}>Remove from Cart</button>
            ) : (
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => handleAddToCart(product.id, 1)}>Add to Cart</button>
            )
        }
        </div>
    )
}

export default ProductCard