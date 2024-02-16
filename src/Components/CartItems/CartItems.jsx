import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const {allProducts,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div>
      
    </div>
  )
}

export default CartItems
