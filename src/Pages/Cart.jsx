import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import "./CSS/Cart.css"

// const displaytotal = (productsInCart, index) => {
//   ${productsInCart.newPrice * cartItems[product.id]}
//   document.getElementsByClassName()
// }

const Cart = ({item}) => {
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
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <p>Subtotal</p>
              <p>$100</p>
            </div>
            <div> Discount</div>
            <div>Delivery fee</div>
          </div>
            <div>Total</div>
          <button className='checoutbtn'> Go to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
