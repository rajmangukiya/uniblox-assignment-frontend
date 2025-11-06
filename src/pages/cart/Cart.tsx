import React, { useEffect, useState } from 'react'
import { getAPI, postAPI } from '../../helper/API/APIData'
import CartProductCard from './CartProductCard'
import type { CartProduct } from './types'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

    const fetchCart = async () => {
        try {
            const response = await getAPI('cart');
            const data = await response.json()
            console.log(data);
            setCartProducts(data.cart.products.map((p: any) => ({
                id: p.product.id,
                title: p.product.title,
                description: p.product.description,
                image: p.product.image,
                price: p.product.price,
                quantity: p.quantity,
            })))
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    const handleUpdateCart = async (id: string, quantity: number) => {
        try {
            const requestData = {
                product: {
                    productId: id,
                    quantity: quantity
                }
            }
            const response = await postAPI('cart/update-cart', requestData)
            const data = await response.json()
            console.log(data);
            fetchCart()
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    const handleCheckout = async () => {
        try {
            const response = await postAPI('order', {})
            const data = await response.json()
            console.log(data);
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <div>
            <div className='grid grid-cols-4 gap-4 p-5'>
                {cartProducts.map((product) => (
                    // <ProductCard handleAddToCart={handleAddToCart} key={product.id} product={product} />
                    <CartProductCard product={product} handleUpdateCart={handleUpdateCart} key={product.id} />
                ))}
            </div>

            <div className='flex justify-end p-5'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart