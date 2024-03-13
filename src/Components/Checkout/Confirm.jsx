import React, { useContext } from 'react'
import ok from "../Assets/ok.png"
import { ShopContext } from '../../Context/ShopContext'
import allProduct from '../Assets/allProducts';
import './Confirm.css'

const Confirm = () => {
    const {cartItems, getTotalCartAmount, userlog} = useContext(ShopContext);
    const tax = 8.79;
  const taxAmount = getTotalCartAmount().toFixed(2);
  const taxTotal = tax + Number(taxAmount);
    const productsInCart = allProduct.filter(product => cartItems[product.id] > 0);
    const renderHrTags = (index, cartLength) => {
        if (index >= cartLength - 1) return null;
        if (index >= 2) {
          return <hr key={`hr-${index}`} />;
        }
        console.log(userlog)
    
        const hrCount = index % 2 === 0 ? index + 1 : index;
        let hrTags = [];
        for (let i = 0; i < hrCount; i++) {
          hrTags.push(<hr key={`hr-${index}-${i}`} />);
        }
        return hrTags;
      };
    //   const data = {formData: formData}
  return (
    <div className='orderContainer'>
      <div className="orderWrapper">
        <div className="orderMessage">
            <img src={ok} alt="" />
            <p>Thank you!
            </p>
            <h1>Your order has been placed</h1>
            <p>Order #234567890 is prepring to be shipped and would be with you soon</p>
        </div>
        <hr />
        <div className="tracking">
            <span>Tracking number</span>
            <p>
                A tracking number would be provided once item ships
            </p>
        </div>
        <hr />
        <div className="itemOrdered">
        {productsInCart.map((product, index) => (
            <React.Fragment key={product.id}>
              <div className="cartitembox" style={{ display: "flex" }}>
                <div className='classitemFormat' style={{ display: "block", padding: "10px 10px 10px 20px"}}>
                  <img src={product.image} width={80} height={80} alt={product.name} style={{ borderRadius: "10px", padding: "10px", backgroundColor:"white"}} />
                </div>
                <div className="info" style={{ width: "100%"}}>
                  <div style={{ padding: "30px 10px 0px 0px", width: "100%" }}>
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>{product.name}</p>
                  </div>
                  <div className="quantityandprice">
                    <div className="quantitybuttons">
                      <button className='cartquantity' style={{ minWidth: "20px", maxWidth: "40px" }}>x {cartItems[product.id]}</button>
                    </div>
                  </div>
                </div>
              </div>
              {renderHrTags(index, productsInCart.length)}
            </React.Fragment>
          ))}
        </div>
        <hr />
        <div className="orderAddress">
            <div className="o-wrapper">
              <div className="shipadd">
                <h2>shipping address</h2>
                <p>{userlog.shippingAddress}, {userlog.shippingApartment} <br />{userlog.shippingCity}, {userlog.shippingState}</p>
              </div>
              <div className="billadd">
                <h2>billing address</h2>
                <p>{userlog.billingAddress}, {userlog.billingApartment}<br /> {userlog.billingCity}, {userlog.billingState}</p>
              </div>
            </div>
        </div>
        <hr />
        <div className="ordercard">
            {/* map last 4 digit on card number + card expiry */}
            <div className="card">
                card
            </div>
            <div className="shippingMethod">
                <img src="" alt="" />
            </div>
        </div>
        <hr />
        <div className="subtotal">
        <div className="receipt">
          <div>
            <table className="table">
              <tbody> {/* <tbody> tag added */}
                <tr>
                  <td>Shipping</td>
                  <td className="price">Free</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="price">${getTotalCartAmount().toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="price">${tax}</td>
                </tr>
                {/* <tr className="total">
                <td>Total</td>
                <td className="price">${taxTotal.toFixed(2)}</td>
              </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className='git' style={{display:"flex", justifyContent:"space-between", padding:"15px 20px"}}>
          <p style={{fontWeight:"650", fontSize:"18px"}}>Total (USD)</p>
          <p style={{fontWeight:"650", fontSize:"18px"}}>${taxTotal.toFixed(2)}</p>
        </div>
        </div>
        <div className="navaway">
          <button onClick={()=> window.location.reload()} type="submit" className="btnorder btn-primary">Place Another Order</button>
        </div>
        
      </div>
    </div>
  )
}

export default Confirm
