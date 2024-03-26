import React, { useContext, useEffect, useState } from 'react';
import './MultiStepForm.css'
import mastercard from '../Assets/Mastercard Logo.png'
import visa from '../Assets/Visa.png'
import amex from '../Assets/American Express.png'
import discover from '../Assets/Discover Card.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContext';
import { TailSpin } from 'react-loader-spinner'
const MultiStepForm = () => {
  const [renderCard, setRenderCard] = useState(false)
  const {userLogs, issubmitted} = useContext(ShopContext)
  const navigate = useNavigate()


  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    shippingAddress: '',
    shippingApartment: '',
    shippingCity: '',
    shippingZip: '',
    shippingState: '',
    shippingPhone: '',
    shippingCountry: '',
    billingAddress: '',
    billingApartment: '',
    billingCity: '',
    billingZip: '',
    billingState: '',
    billingPhone: '',
    billingCountry:'',
    useSameAddress: false,
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  

  const validateStep = () => {
    const errors = {};
    switch (currentStep) {
      case 1:
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          errors.email = 'Invalid email format';
        }
        break;
      case 2:
        if (!formData.shippingAddress.trim()) {
          errors.shippingAddress = 'Shipping address is required';
        }
        if (!formData.shippingCity.trim()) {
          errors.shippingCity = 'City is required';
        }
        if (!formData.shippingZip.trim()) {
          errors.shippingZip = 'Zipcode is required';
        }
        if (!formData.shippingState.trim()) {
          errors.shippingState = 'State is required';
        }
        if (!formData.firstName.trim()) {
          errors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
        break;
      case 3:
        if (!formData.firstName.trim()) {
          errors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
        if (!formData.billingAddress.trim()) {
          errors.billingAddress = 'Billing address is required';
        }
        if (!formData.billingCity.trim()) {
          errors.billingCity = 'City is required';
        }
        if (!formData.billingZip.trim()) {
          errors.billingZip = 'Zipcode is required';
        }
        if (!formData.billingState.trim()) {
          errors.billingState = 'State is required';
        }
        break;
      case 4:
        if (!formData.cardNumber.trim()) {
          errors.cardNumber = 'Card number is required';
        }
        if (!formData.expiryDate.trim()) {
          errors.expiryDate = 'Expiry date is required';
        }
        if (!formData.cvv.trim()) {
          errors.cvv = 'CVV is required';
        }
        break;
      default:
        break;
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });

    // type === 'checkbox' ? setFormData({ ...formData, [name]: type}) :
    // setFormData({ ...formData, [name]: value });


  };

  const goToNextStep = () => {
    if (validateStep()) {
      if (currentStep === 2 && formData.useSameAddress) {
        setCurrentStep(currentStep + 2); // Skip to step 4
      } else {
        setCurrentStep(currentStep + 1);
      }
      window.scrollTo(0,0)
    }
  };

  const goToPreviousStep = () => {
    if (currentStep === 4 && formData.useSameAddress) {
      setCurrentStep(currentStep - 2);
    } else {
      setCurrentStep(currentStep - 1);
    }
    window.scrollTo(0,0)
  };

      
  const urlss = "http://localhost:4400/api/user"

  // const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e)=> {
    e.preventDefault();
    userLogs(formData);
    setLoading(true)

    // navigate('/order');
    issubmitted();
    
    // if (formData.useSameAddress) {
    //   // const postData = shippingData;
    //   axios.post(urlss, {
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     shippingAddress: formData.shippingAddress,
    //     shippingApartment: formData.shippingApartment,
    //     shippingCity: formData.shippingCity,
    //     shippingState: formData.shippingState,
    //     shippingZip: formData.shippingZip,
    //     shippingCountry: formData.shippingCountry,
    //     shippingPhone: formData.shippingPhone,
    //     useSameAddress: formData.useSameAddress 
    //   })
    //     .then(() => {
    //       console.log('Shipping data submitted successfully');
    //     })
    //     .catch(error => {
    //       console.error('Error submitting shipping data:', error);
    //     });
    // } else {
    //   const billingData = {
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     shippingAddress: formData.shippingAddress,
    //     shippingApartment: formData.shippingApartment,
    //     shippingCity: formData.shippingCity,
    //     shippingState: formData.shippingState,
    //     shippingZip: formData.shippingZip,
    //     shippingCountry: formData.shippingCountry,
    //     shippingPhone: formData.shippingPhone,
    //     useSameAddress: formData.useSameAddress,
    //     billingAddress : formData.billingAddress,
    //     billingApartment : formData.billingApartment,
    //     billingCity : formData.billingCity,
    //     billingState : formData.billingState,
    //     billingZip : formData.billingZip,
    //     billingCountry : formData.billingCountry,
    //     billingPhone : formData.billingPhone,  
    //   };
    //   axios.post(urlss, {
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     shippingAddress: formData.shippingAddress,
    //     shippingApartment: formData.shippingApartment,
    //     shippingCity: formData.shippingCity,
    //     shippingState: formData.shippingState,
    //     shippingZip: formData.shippingZip,
    //     shippingCountry: formData.shippingCountry,
    //     shippingPhone: formData.shippingPhone,
    //     useSameAddress: formData.useSameAddress,
    //     billingAddress : formData.billingAddress,
    //     billingApartment : formData.billingApartment,
    //     billingCity : formData.billingCity,
    //     billingState : formData.billingState,
    //     billingZip : formData.billingZip,
    //     billingCountry : formData.billingCountry,
    //     billingPhone : formData.billingPhone, 
    //   })
    //     .then(() => {
    //       console.log('Form data submitted successfully');
    //     })
    //     .catch(error => {
    //       console.error('Error submitting form data:', error);
    //     });
    // }
    setTimeout(() => {
      if (formData.useSameAddress) {
          axios.post(urlss, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            shippingAddress: formData.shippingAddress,
            shippingApartment: formData.shippingApartment,
            shippingCity: formData.shippingCity,
            shippingState: formData.shippingState,
            shippingZip: formData.shippingZip,
            shippingCountry: formData.shippingCountry,
            shippingPhone: formData.shippingPhone,
            useSameAddress: formData.useSameAddress
          })
          .then(() => {
              console.log('Shipping data submitted successfully');
          })
          .catch(error => {
              console.error('Error submitting shipping data:', error);
          });
      } else {
          axios.post(urlss, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            shippingAddress: formData.shippingAddress,
            shippingApartment: formData.shippingApartment,
            shippingCity: formData.shippingCity,
            shippingState: formData.shippingState,
            shippingZip: formData.shippingZip,
            shippingCountry: formData.shippingCountry,
            shippingPhone: formData.shippingPhone,
            useSameAddress: formData.useSameAddress,
            billingAddress : formData.billingAddress,
            billingApartment : formData.billingApartment,
            billingCity : formData.billingCity,
            billingState : formData.billingState,
            billingZip : formData.billingZip,
            billingCountry : formData.billingCountry,
            billingPhone : formData.billingPhone,
          })
          .then(() => {
              console.log('Form data submitted successfully');
          })
          .catch(error => {
              console.error('Error submitting form data:', error);
          });
      }
      setIsFormDisabled(true);
      setLoading(false);

      // setTimeout(() => {
          navigate('/order');
      // }, 5000);
    }, 5000); 
    setIsFormDisabled(true);
  }


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='emailsection'>
            <label>Contact</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            {errors.email && <div className="error">{errors.email}</div>}
            <p><span>An invoice would be sent to this email address</span> <br />This invoice will include a breakdown of your purchase. You can use this invoice for your records or as proof of purchase.</p>
          </div>
        );
      case 2:
        return (
          <div className="shippingInfo">
            <h1>Shipping Information</h1>
            <div class="checkout-address">
              <div class="dynamic-form-field floating-form-field dynamic-form-field--firstName">
                <div class="form-field">
                  <input
                    aria-labelledby="firstNameInput-label firstNameInput-field-error-message"
                    autoComplete="given-name"
                    id="firstNameInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="firstName"
                    data-test="firstNameInput-text"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="error">{errors.firstName}</div>}
                  <label
                    for="firstNameInput"
                    id="firstNameInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--lastName">
                <div class="form-field">
                  <input
                    aria-labelledby="lastNameInput-label lastNameInput-field-error-message"
                    autoComplete="family-name"
                    id="lastNameInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="lastName"
                    data-test="lastNameInput-text"
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="error">{errors.lastName}</div>}
                  <label
                    for="lastNameInput"
                    id="lastNameInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--countryCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <select
                    aria-labelledby="countryCodeInput-label countryCodeInput-field-error-message"
                    autoComplete="country"
                    class="floating-select form-select optimizedCheckout-form-select"
                    data-test="countryCodeInput-select"
                    id="countryCodeInput"
                    name="shippingCountry"
                    onChange={handleChange}
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                  </select>
                  {errors.shippingCountry && <div className="error">{errors.shippingCountry}</div>}
                  <label
                    for="countryCodeInput"
                    id="countryCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Country
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--postCode">
                <div class="form-field">
                  <input
                    aria-labelledby="postCodeInput-label postCodeInput-field-error-message"
                    id="postCodeInput"
                    type="text"
                    pattern="[0-9]{5}(?:-[0-9]{4})?"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="shippingZip"
                    data-test="postCodeInput-text"
                    placeholder=" "
                    value={formData.shippingZip}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.shippingZip && <div className="error">{errors.shippingZip}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="postCodeInput"
                    id="postCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Postal Code
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--city">
                <div class="form-field">
                  <input
                    aria-labelledby="cityInput-label cityInput-field-error-message"
                    id="cityInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="shippingCity"
                    data-test="cityInput-text"
                    placeholder=" "
                    value={formData.shippingCity}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.shippingCity && <div className="error">{errors.shippingCity}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="cityInput"
                    id="cityInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    City
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--provinceCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <select
                    aria-labelledby="provinceCodeInput-label provinceCodeInput-field-error-message"
                    autoComplete="address-level1"
                    class="floating-select form-select optimizedCheckout-form-select"
                    data-test="provinceCodeInput-select"
                    id="provinceCodeInput"
                    name="shippingState"
                    onChange={handleChange}
                  >
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="AA">Armed Forces Americas</option>
                    <option value="AE">Armed Forces Europe</option>
                    <option value="AP">Armed Forces Pacific</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FM">Federated States Of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  {errors.shippingState && <div className="error">{errors.shippingState}</div>}
                  <label
                    for="provinceCodeInput"
                    id="provinceCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    State/Province
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine1">
                <div class="form-field">
                  <input
                    aria-labelledby="addressLine1Input-label addressLine1Input-field-error-message"
                    maxLength="40"
                    id="addressLine1Input"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="shippingAddress"
                    data-test="addressLine1Input-text"
                    placeholder=" "
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.shippingAddress && <div className="error">{errors.shippingAddress}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="addressLine1Input"
                    id="addressLine1Input-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Address Line 1
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine2">
                <div class="form-field">
                  <input
                    aria-labelledby="addressLine2Input-label addressLine2Input-field-error-message"
                    id="addressLine2Input"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="shippingApartment"
                    data-test="addressLine2Input-text"
                    placeholder=" "
                    value={formData.shippingApartment}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.shippingApartment && <div className="error">{errors.shippingApartment}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="addressLine2Input"
                    id="addressLine2Input-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Apt/suite{" "}
                    <small class="optimizedCheckout-contentSecondary">
                      (Optional)
                    </small>
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--phone">
                <div class="form-field">
                  <input
                    aria-labelledby="phoneInput-label phoneInput-field-error-message"
                    autoComplete="tel"
                    id="phoneInput"
                    type="tel"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="shippingPhone"
                    data-test="phoneInput-text"
                    placeholder=" "
                    value={formData.shippingPhone}
                    onChange={handleChange}
                  />
                  {errors.shippingPhone && <div className="error">{errors.shippingPhone}</div>}
                  <label
                    for="phoneInput"
                    id="phoneInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Phone Number{" "}
                    <small class="optimizedCheckout-contentSecondary">
                      (Optional)
                    </small>
                  </label>
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  name="useSameAddress"
                  checked={formData.useSameAddress}
                  onChange={handleChange}
                />
                My Billing Address is same as Shipping address
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="billingInfo">
            <h1>Billing Information</h1>
            <div class="checkout-address">
              <div class="dynamic-form-field floating-form-field dynamic-form-field--firstName">
                <div class="form-field">
                  <input
                    aria-labelledby="firstNameInput-label firstNameInput-field-error-message"
                    autoComplete="given-name"
                    id="firstNameInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="firstName"
                    data-test="firstNameInput-text"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="error">{errors.firstName}</div>}
                  <label
                    for="firstNameInput"
                    id="firstNameInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--lastName">
                <div class="form-field">
                  <input
                    aria-labelledby="lastNameInput-label lastNameInput-field-error-message"
                    autoComplete="family-name"
                    id="lastNameInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="lastName"
                    data-test="lastNameInput-text"
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="error">{errors.lastName}</div>}
                  <label
                    for="lastNameInput"
                    id="lastNameInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--countryCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <select
                    aria-labelledby="countryCodeInput-label countryCodeInput-field-error-message"
                    autoComplete="country"
                    class="floating-select form-select optimizedCheckout-form-select"
                    data-test="countryCodeInput-select"
                    id="countryCodeInput"
                    name="billingCountry"
                    onChange={handleChange}
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                  </select>
                  {errors.billingCountry && <div className="error">{errors.billingCountry}</div>}
                  <label
                    for="countryCodeInput"
                    id="countryCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Country
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--postCode">
                <div class="form-field">
                  <input
                    aria-labelledby="postCodeInput-label postCodeInput-field-error-message"
                    id="postCodeInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="billingZip"
                    data-test="postCodeInput-text"
                    placeholder=" "
                    value={formData.billingZip}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.billingZip && <div className="error">{errors.billingZip}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="postCodeInput"
                    id="postCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Postal Code
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--city">
                <div class="form-field">
                  <input
                    aria-labelledby="cityInput-label cityInput-field-error-message"
                    id="cityInput"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="billingCity"
                    data-test="cityInput-text"
                    placeholder=" "
                    value={formData.billingCity}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.billingCity && <div className="error">{errors.billingCity}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="cityInput"
                    id="cityInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    City
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--provinceCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <select
                    aria-labelledby="provinceCodeInput-label provinceCodeInput-field-error-message"
                    autoComplete="address-level1"
                    class="floating-select form-select optimizedCheckout-form-select"
                    data-test="provinceCodeInput-select"
                    id="provinceCodeInput"
                    name="billingState"
                    onChange={handleChange}
                  >
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="AA">Armed Forces Americas</option>
                    <option value="AE">Armed Forces Europe</option>
                    <option value="AP">Armed Forces Pacific</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FM">Federated States Of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  {errors.billingState && <div className="error">{errors.billingState}</div>}
                  <label
                    for="provinceCodeInput"
                    id="provinceCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    State/Province
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine1">
                <div class="form-field">
                  <input
                    aria-labelledby="addressLine1Input-label addressLine1Input-field-error-message"
                    maxLength="40"
                    id="addressLine1Input"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="billingAddress"
                    data-test="addressLine1Input-text"
                    placeholder=" "
                    value={formData.billingAddress}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.billingAddress && <div className="error">{errors.billingAddress}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="addressLine1Input"
                    id="addressLine1Input-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Address Line 1
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine2">
                <div class="form-field">
                  <input
                    aria-labelledby="addressLine2Input-label addressLine2Input-field-error-message"
                    id="addressLine2Input"
                    type="text"
                    class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                    name="billingApartment"
                    data-test="addressLine2Input-text"
                    placeholder=" "
                    value={formData.billingApartment}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.billingApartment && <div className="error">{errors.billingApartment}</div>}
                  <span
                    role="status"
                    aria-live="polite"
                    class="ui-helper-hidden-accessible"
                  ></span>
                  <label
                    for="addressLine2Input"
                    id="addressLine2Input-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Apt/suite
                    <small class="optimizedCheckout-contentSecondary">
                      (Optional)
                    </small>
                  </label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--phone">
                <div class="form-field">
                  <input
                    aria-labelledby="phoneInput-label phoneInput-field-error-message"
                    autoComplete="tel"
                    id="phoneInput"
                    type="tel"
                    class="form-input optimizedCheckout-form-input floating-input"
                    name="billingPhone"
                    data-test="phoneInput-text"
                    placeholder=" "
                    value={formData.billingPhone}
                    onChange={handleChange}
                  />
                  {errors.billingPhone && <div className="error">{errors.billingPhone}</div>}
                  <label
                    for="phoneInput"
                    id="phoneInput-label"
                    class="floating-label form-label optimizedCheckout-form-label"
                  >
                    Phone Number{" "}
                    <small class="optimizedCheckout-contentSecondary">
                      (Optional)
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <li class="form-checklist-item optimizedCheckout-form-checklist-item form-checklist-item--selected optimizedCheckout-form-checklist-item--selected">
              <div class="form-checklist-header form-checklist-header--selected">
                <div class="form-field">
                  <input
                    id="radio-braintree"
                    type="radio"
                    class="form-checklist-checkbox optimizedCheckout-form-checklist-checkbox"
                    name="paymentProviderRadio"
                    value="braintree"
                    checked=""
                  />
                  <label
                    for="radio-braintree"
                    class="form-label optimizedCheckout-form-label"
                  >
                    <div class="paymentProviderHeader-container">
                      <div
                        class="paymentProviderHeader-nameContainer"
                        data-test="payment-method-braintree"
                      >
                        <div
                          aria-level="6"
                          class="paymentProviderHeader-name"
                          data-test="payment-method-name"
                          role="heading"
                        >
                          Credit Card
                        </div>
                      </div>
                      <div class="paymentProviderHeader-cc">
                        <ul class="creditCardTypes-list">
                          <li
                            class="creditCardTypes-list-item"
                            data-test="visa-icon"
                          >
                            <span class="cardIcon">
                              <div
                                class="icon cardIcon-icon icon--medium"
                                data-test="credit-card-icon-visa"
                              >
                                <img src={visa} alt="" />
                              </div>
                            </span>
                          </li>
                          <li
                            class="creditCardTypes-list-item"
                            data-test="mastercard-icon"
                          >
                            <span class="cardIcon">
                              <div
                                class="icon cardIcon-icon icon--medium"
                                data-test="credit-card-icon-mastercard"
                              >
                                <img src={mastercard} alt="" />
                              </div>
                            </span>
                          </li>
                          <li
                            class="creditCardTypes-list-item"
                            data-test="american-express-icon"
                          >
                            <span class="cardIcon">
                              <div
                                class="icon cardIcon-icon icon--medium"
                                data-test="credit-card-icon-american-express"
                              >
                                <img src={amex} alt="" />
                              </div>
                            </span>
                          </li>
                          <li
                            class="creditCardTypes-list-item"
                            data-test="discover-icon"
                          >
                            <span class="cardIcon">
                              <div
                                class="icon cardIcon-icon icon--medium"
                                data-test="credit-card-icon-discover"
                              >
                                <img src={discover} alt="" />
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="form-checklist-body">
                <div>
                  <div
                    class="paymentMethod paymentMethod--creditCard"
                    data-test="credit-cart-payment-method"
                  >
                    <fieldset class="form-fieldset creditCardFieldset">
                      <legend class="form-legend is-srOnly">Credit card</legend>
                      <div class="form-body">
                        <div class="form-ccFields">
                          <iframe
                            id="mbc-payment-form--braintree_credit_card"
                            src="https://apps.minibc.com/apps/recurring/checkouts/payment/hosted/form/braintree/usd?storeID=NmZ1VzRYWkJ2dGxQWW9xUUZHTVFoQT09LkhMeCtFeStvTXc3UVd4TksvUkExTGc9PQEQUALSEQUALS&amp;token=608c2c052d2c3"
                            frameborder="0"
                            allowtransparency="true"
                            scrolling="no"
                            style={{ width: "100%", height: "168px" }}
                          ></iframe>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </li>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multistep-form-container">
      <form onSubmit={handleSubmit}>
        {renderStep()}
         {currentStep === 4 ?
          (<button type="submit" className="placeorder" >
            {loading ?  <TailSpin
              visible={true}
              height="30"
              width="100%"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              radius="1"
              // wrapperStyle={{}}
              wrapperClass=""
              />
               : 'PLACE ORDER'}
            </button>)
          : <></>
        }
      </form>
      <div className="button-container">
          {currentStep !== 1 && (
            <button
              type="button"
              onClick={goToPreviousStep}
              className="buttonp"
            >
              Previous
            </button>
          )}
          {currentStep !== 4 ? 
            (<button type="button" onClick={goToNextStep}>
              Next
            </button>)
           : <></>}
        </div>
    </div>
  );

}
export default MultiStepForm;
