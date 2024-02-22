import React, { useContext, useState } from 'react';
import "./Checkout.css";
import allProduct from '../Assets/allProducts';
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const productsInCart = allProduct.filter(product => cartItems[product.id] > 0);
  const tax = 7;
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
        <div className="itemsFromCart">
          {productsInCart.map((product, index) => (
            <React.Fragment key={product.id}>
              <div className="cartitembox" style={{display:"flex"}}>
                <div className='classitemFormat' style={{ display: "block", padding: "20px" }}>
                  <img src={product.image} width={100} height={100} alt={product.name} style={{borderRadius:"10px", padding:"10px"}}/>    
                </div>
                <div className="info" style={{width:"100%"}}>
                  <div style={{padding:"15px 10px 0px 0px", display:"flex", justifyContent:"space-between", width:"100%"}}>
                    <p style={{fontSize:"15px", fontWeight:"600"}}>{product.name}</p>
                  </div>
                  <div className="quantityandprice" style={{display:"flex", marginTop:"55px", gap:"80px"}}>
                    <div className="quantitybuttons">
                      <button className='cartquantity' style={{minWidth:"20px", maxWidth:"40px"}}>x {cartItems[product.id]}</button>
                    </div>
                  </div>
                </div>
              </div>
              {renderHrTags(index, productsInCart.length)}
            </React.Fragment>
          ))}
        </div>
        <div className="receipt">
          <h2 className="receipt-heading">Receipt Summary</h2>
          <div>
            <table className="table">
              <tbody> {/* <tbody> tag added */}
                <tr>
                  <td>Discount</td>
                  <td className="price">To be determined</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="price">${getTotalCartAmount().toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="price">${tax}</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td className="price">${taxTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="right-side">
        <div className="shippingAddress">
          <h3 className="shipping-heading">Shipping Information</h3>
          <form className='form-box' onSubmit={handleSubmit}> {/* Added onSubmit */}
            <div>
              <label htmlFor="address"> Address</label>
              <input
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="apartment">Apartment, Suite, Unit, etc.:</label>
              <input
                type="text"
                id="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">Town / City:</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <select id="state" value={formData.state} onChange={handleInputChange}>
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                {/* List of US states */}
              </select>
            </div>
            <div>
              <label htmlFor="zip">Zip Code:</label>
              <input
                type="text"
                id="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
                pattern="[0-9]{5}(?:-[0-9]{4})?"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </form> {/* Closing form tag */}

          <div className="payment-info">
            <h3 className="payment-heading">Payment Information</h3>
            <form
              className="form-box"
              encType="text/plain"
              method="get"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  name="full-name"
                  placeholder="Full name"
                  required
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="credit-card-num">
                  Card Number
                  <span className="card-logos">
                    <i className="card-logo fa-brands fa-cc-visa"></i>
                    <i className="card-logo fa-brands fa-cc-amex"></i>
                    <i className="card-logo fa-brands fa-cc-mastercard"></i>
                    <i className="card-logo fa-brands fa-cc-discover"></i>
                  </span>
                </label>
                <input
                  id="credit-card-num"
                  name="credit-card-num"
                  placeholder="1234-5678-9876-5432"
                  required
                  type="text"
                />
              </div>

              <div>
                <p className="expires">Expires on:</p>
                <div className="card-experation">
                  <label htmlFor="expiration-month">Month</label>
                  <select id="expiration-month" name="expiration-month" required>
                    <option value="">Month:</option>
                    <option value="January">01</option>
                    <option value="February">02</option>
                    <option value="March">03</option>
                    <option value="April">04</option>
                    <option value="May">05</option>
                    <option value="June">06</option>
                    <option value="July">07</option>
                    <option value="August">08</option>
                    <option value="September">09</option>
                    <option value="October">10</option>
                    <option value="November">11</option>
                    <option value="December">12</option>
                    {/* Other months */}
                  </select>

                  <label className="expiration-year" htmlFor="expiration-year">Year</label>
                  <select id="expiration-year" name="expiration-year" required>
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2024">2025</option>
                    <option value="2024">2026</option>
                    <option value="2024">2027</option>
                    <option value="2024">2028</option>
                    <option value="2024">2029</option>
                    {/* Other years */}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  placeholder="415"
                  type="text"
                  required
                />
                <a className="cvv-info" href="#">What is CVV?</a>
              </div>

              <button className="btn">
                <i className="fa-solid fa-lock"></i> Book Securely
              </button>
            </form>

            <p className="footer-text">
              <i className="fa-solid fa-lock"></i>
              Your credit card information is encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
