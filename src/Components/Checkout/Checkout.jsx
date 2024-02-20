import React from 'react'
import "./Checkout.css"

const Checkout = () => {
  return (
  <div className="row" style={{display:"flex", height:"500px"}}>
    <div className="col-75">
      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-50">
              <h3>Billing Address</h3>
              <label for="fname"><i className="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
              <label for="email"><i className="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="john@example.com"/>
              <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
              <label for="city"><i className="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York"/>
              <div className="row">
                <div className="col-50">
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY"/>
                </div>
                <div className="col-50">
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001"/>
                </div>
              </div>
            </div>
            <div className="col-50">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div className="icon-container">
                <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
                <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
              </div>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
              <div className="row">
                <div className="col-50">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                </div>
                <div className="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352"/>
                </div>
              </div>
            </div>
          </div>
          <label>
            <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
          </label>
          <input type="submit" value="Continue to checkout" classNameName="btn"/>
        </form>
      </div>
    </div>
    <div className="col-25">
      <div className="container">
        <h4>Cart <span classNameName="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> Total $30</span></h4>
      </div>
    </div>
  </div>
)
}

export default Checkout
