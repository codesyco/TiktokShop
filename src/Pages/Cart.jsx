import React, { useContext, useState } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import "./CSS/Cart.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import close from '../Components/Assets/Close.png'
import sad from '../Components/Assets/Sad.png'

// const displaytotal = (productsInCart, index) => {
//   ${productsInCart.newPrice * cartItems[product.id]}
//   document.getElementsByClassName()
// }

const Cart = (props, count) => {
  const {getTotalCartAmount, addToCart, productsInCart} = useContext(ShopContext);
  const [checkoutani, setCheckoutani] =useState("checkoutbtn")
  const product = props
  const gotocheckout = () =>{
    addToCart(product.id, count)
    setCheckoutani("checkoutbtn")
  }
  if (productsInCart <= 0) {
    return(
      <div className='cart-container'>
        <nav>
          <p>Your cart</p>
          <Link to='/'>

          <img src={close} alt="" />
          
          </Link>
        </nav>
        <div className='bodySection'>
          <div className='sadicon'>
          <img src={sad} alt="" />
          </div>
          <div className="empty-message">
            It appears your cart is empty <br />go to shop and add some items
          </div>
          <div className="gotoshop">
            <Link to='/category'>
              <button>Shop now</button>
            </Link>
          </div>
        </div>
      </div>
    )
} else{
    return (
      <div className='cart' style={{width: "100%", marginBottom:"auto"}}>
        <div className="cartbody" style={{width:"85%", height:"auto", margin:"auto", padding:"40px 60px"}}>
          <nav>
            <h1 style={{ margin:"0px 0px 40px 0px", fontWeight:"800"}}>YOUR CART</h1>
            <Link to='/'>
              <img src={close} alt="" />
            </Link>
          </nav>

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
            <Link to="/checkout">
              <button className={checkoutani} onClick={gotocheckout}> 
              Go to Checkout
              </button>
            </Link> 
          </div>
        </div>
      </div>
    )
}
}

export default Cart
