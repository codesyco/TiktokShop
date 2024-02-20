import React, { useContext } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import "./CSS/Cart.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

// const displaytotal = (productsInCart, index) => {
//   ${productsInCart.newPrice * cartItems[product.id]}
//   document.getElementsByClassName()
// }

const Cart = ({item}) => {
  const {getTotalCartAmount, addToCart} = useContext(ShopContext);

  const gotocheckout = () =>{
    addToCart(item)
  }

  return (
    <div className='cart' style={{width: "100%", marginBottom:"auto"}}>
      <div className="cartbody" style={{width:"85%", height:"auto", margin:"auto", padding:"40px 60px"}}>
        <h1 style={{ margin:"0px 0px 40px 0px", fontWeight:"800"}}>YOUR CART</h1>
        <div className='orderdetails' style={{width: "85%",border:"1px solid grey", height:"auto", borderRadius:"20px"}}>
          <CartItems/>
        </div>
        <div className='ordersummary' style={{marginTop:"20px", width:"85%"}}>
          <h2 style={{fontWeight:" 700"}}>Order Summary</h2>
          <div className="containerforsummary" >
            <div style={{display:"flex", justifyContent:"space-between", width:"45%"}}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"45%"}}>
              <p>Discount</p>
              <p> $0.00</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"45%"}}>
              <p>Delivery fee</p>
              <p>Free</p>
            </div>
          </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"45%"}}>
              <p>Total</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
          <button className='checoutbtn' onClick={gotocheckout}> <Link to="/checkout">
            Go to Checkout
            </Link> 
            </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
