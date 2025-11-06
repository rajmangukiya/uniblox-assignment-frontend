import React, { useEffect, useState } from 'react'
import { getAPI, postAPI } from '../../helper/API/APIData'
import type { Product } from './types'
import ProductCard from './ProductCard'

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])

    const fetchProducts = async () => {
        try {
            const response = await getAPI('product');
            const data = await response.json()
            setProducts(data.products)
        } catch (error) {
            // setError(error as string | null)
        }
    }

    const handleAddToCart = async (id: string, quantity: number) => {
        try {
            const requestData = {
                product: {
                    productId: id,
                    quantity: quantity
                }
            }
            const response = await postAPI('cart/update-cart', requestData)
            const data = await response.json()
            if (response.status === 200) {
                fetchProducts()
            } else {
                window.alert(data.error)
            }
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div className='grid grid-cols-4 gap-4 p-5'>
                {products.map((product) => (
                    <ProductCard handleAddToCart={handleAddToCart} key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home