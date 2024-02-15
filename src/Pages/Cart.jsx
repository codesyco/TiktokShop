import React from 'react'

const displayItem =   () => {
  document.getElementsByClassName()
}

const Cart = () => {
  return (
    <div className='cart' style={{width: "100%", height: "40rem"}}>
      <div className="cartbody" style={{width:"85%", height:"600px", margin:"auto", padding:"40px 60px"}}>
        <h1 style={{padding: "10px", margin:"10px"}}>YOUR CART</h1>
        <div className='orderdetails' style={{width: "85%",border:"1px solid grey", height:"250px", borderRadius:"20px"}}>

        </div>
        <div className='order summary' style={{marginTop:"20px"}}>
          <h2>Order Summary</h2>
          <div className="containerforsummary" >
            <div>Subtotal </div>
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
