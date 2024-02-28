import React, { useContext, useState } from 'react';
import "./Checkout.css";
import allProduct from '../Assets/allProducts';
import { ShopContext } from '../../Context/ShopContext';
import MultiStepForm from './MultiStepForm';

const Checkout = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const productsInCart = allProduct.filter(product => cartItems[product.id] > 0);
  const tax = 8.79;
  const taxAmount = getTotalCartAmount().toFixed(2);
  const taxTotal = tax + Number(taxAmount);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validateAddress();
  };

  const renderHrTags = (index, cartLength) => {
    if (index >= cartLength - 1) return null;
    if (index >= 2) {
      return <hr key={`hr-${index}`} />;
    }

    const hrCount = index % 2 === 0 ? index + 1 : index;
    let hrTags = [];
    for (let i = 0; i < hrCount; i++) {
      hrTags.push(<hr key={`hr-${index}-${i}`} />);
    }
    return hrTags;
  };

  return (
    <div className="checkout-container">
      <div className="left-side">
        <MultiStepForm/>
      </div>
      <div className="right-side">
        <h2 className="receipt-heading">Receipt Summary</h2>
        <hr />
        <div className="itemsFromCart">
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
    </div>
  );
}

export default Checkout;
