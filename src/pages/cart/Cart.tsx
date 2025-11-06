import React, { useEffect, useState } from 'react'
import { getAPI, postAPI } from '../../helper/API/APIData'
import CartProductCard from './CartProductCard'
import type { CartProduct } from './types'
import TextInput from '../../components/input/TextInput'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
    const [couponCode, setCouponCode] = useState<string>('')

    const fetchCart = async () => {
        try {
            const response = await getAPI('cart');
            const data = await response.json()
            setCartProducts(data.cart?.products?.map((p: any) => ({
                id: p.product.id,
                title: p.product.title,
                description: p.product.description,
                image: p.product.image,
                price: p.product.price,
                quantity: p.quantity,
            })) ?? [])
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
            const requestData = {
                couponCode: null as string | null
            }

            if (couponCode && couponCode.trim() !== '') {
                requestData.couponCode = couponCode
            }

            const response = await postAPI('order', requestData)
            const data = await response.json()
            if (response.status === 200) {
                window.alert('Order placed successfully')
            } else {
                window.alert(data.message)
            }
            fetchCart()
        } catch (error) {
            window.alert(error as string | null)
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])

    if (cartProducts.length === 0) {
        return (
            <div className='text-center mt-5 text-2xl font-bold'>No products in cart</div>
        )
    }

    return (
        <div>
            <div className='pl-5'>
                <div className='grid grid-cols-4 gap-4 p-5'>
                    {cartProducts.map((product) => (
                        // <ProductCard handleAddToCart={handleAddToCart} key={product.id} product={product} />
                        <CartProductCard product={product} handleUpdateCart={handleUpdateCart} key={product.id} />
                    ))}
                </div>

                <TextInput
                    id="couponCode"
                    label="Coupon Code"
                    className="w-1/2"
                    name="couponCode"
                    type="text"
                    required={true}
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                />

                <div className='flex justify-start py-5'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart