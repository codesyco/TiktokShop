import React, { useState } from 'react';
import './MultiStepForm.css'
import mastercard from '../Assets/Mastercard Logo.png'
import visa from '../Assets/Visa.png'
import amex from '../Assets/American Express.png'
import discover from '../Assets/Discover Card.png'

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    shippingAddress: '',
    shippingApartment: '',
    shippingCity: '',
    shippingZip: '',
    shippingState: 'AL',
    billingAddress: '',
    billingApartment: '',
    billingCity: '',
    billingZip: '',
    billingState: 'AL',
    useSameAddress: false,
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (currentStep === 4) {
        // Submit form data
        console.log('Form submitted:', formData);
      } else {
        setCurrentStep(currentStep + 1);
      }
  };

  const goToNextStep = () => {
      if (currentStep === 2 && formData.useSameAddress) {
        setCurrentStep(currentStep + 2); // Skip to step 4
      } else {
        setCurrentStep(currentStep + 1);
      }
      window.scrollTo(0,0)
  };

  const goToPreviousStep = () => {
    if (currentStep === 4 && formData.useSameAddress) {
      setCurrentStep(currentStep - 2);
    } else {
      setCurrentStep(currentStep - 1);
    }
    window.scrollTo(0,0)

  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='emailsection'>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        );
      case 2:
        return (
          <div className='shippingInfo'>
            <h1>Shipping Information</h1>
            <div class="checkout-address">
              <div class="dynamic-form-field floating-form-field dynamic-form-field--firstName">
                <div class="form-field"><input aria-labelledby="firstNameInput-label firstNameInput-field-error-message"
                  autoComplete="given-name" id="firstNameInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingAddress.firstName" 
                  data-test="firstNameInput-text" placeholder=" " value={formData.shippingAddress.firstName} onChange={handleChange}  /><label for="firstNameInput"
                    id="firstNameInput-label" class="floating-label form-label optimizedCheckout-form-label">First
                    Name</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--lastName">
                <div class="form-field"><input aria-labelledby="lastNameInput-label lastNameInput-field-error-message"
                  autoComplete="family-name" id="lastNameInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingAddress.lastName"
                  data-test="lastNameInput-text" placeholder=" " value={formData.shippingAddress.lastName} onChange={handleChange}/><label for="lastNameInput"
                    id="lastNameInput-label" class="floating-label form-label optimizedCheckout-form-label">Last
                    Name</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--countryCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon"><svg height="24" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg></div>
                  </div><select aria-labelledby="countryCodeInput-label countryCodeInput-field-error-message"
                    autoComplete="country" class="floating-select form-select optimizedCheckout-form-select"
                    data-test="countryCodeInput-select" id="countryCodeInput" name="shippingAddress.countryCode">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                  </select><label for="countryCodeInput" id="countryCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">Country</label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--postCode">
                <div class="form-field"><input aria-labelledby="postCodeInput-label postCodeInput-field-error-message"
                  id="postCodeInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingZip" data-test="postCodeInput-text" placeholder=" " value={formData.shippingZip} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="postCodeInput" id="postCodeInput-label"
                      class="floating-label form-label optimizedCheckout-form-label">Postal Code</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--city">
                <div class="form-field"><input aria-labelledby="cityInput-label cityInput-field-error-message"
                  id="cityInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingCity" data-test="cityInput-text" placeholder=" " value={formData.shippingCity} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="cityInput" id="cityInput-label"
                      class="floating-label form-label optimizedCheckout-form-label">City</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--provinceCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon"><svg height="24" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg></div>
                  </div><select aria-labelledby="provinceCodeInput-label provinceCodeInput-field-error-message"
                    autoComplete="address-level1" class="floating-select form-select optimizedCheckout-form-select"
                    data-test="provinceCodeInput-select" id="provinceCodeInput"
                    name="shippingAddress.stateOrProvinceCode">
                    <option value="">Select a state</option>
                  </select><label for="provinceCodeInput" id="provinceCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">State/Province</label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine1">
                <div class="form-field"><input
                  aria-labelledby="addressLine1Input-label addressLine1Input-field-error-message" maxLength="40"
                  id="addressLine1Input" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingAddress.address1" data-test="addressLine1Input-text" placeholder=" "
                  value={formData.shippingAddress.address1} onChange={handleChange} autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="addressLine1Input"
                      id="addressLine1Input-label" class="floating-label form-label optimizedCheckout-form-label">Address
                    Line 1</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine2">
                <div class="form-field"><input
                  aria-labelledby="addressLine2Input-label addressLine2Input-field-error-message"
                  id="addressLine2Input" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingApartment" data-test="addressLine2Input-text" placeholder=" " value={formData.shippingApartment} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="addressLine2Input"
                      id="addressLine2Input-label" class="floating-label form-label optimizedCheckout-form-label">Address
                    Line 2 <small class="optimizedCheckout-contentSecondary">(Optional)</small></label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--phone">
                <div class="form-field"><input aria-labelledby="phoneInput-label phoneInput-field-error-message"
                  autoComplete="tel" id="phoneInput" type="tel"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingPhone"
                  data-test="phoneInput-text" placeholder=" " value={formData.shippingPhone} onChange={handleChange} /><label for="phoneInput" id="phoneInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">Phone Number <small
                      class="optimizedCheckout-contentSecondary">(Optional)</small></label></div>
              </div>
              <label>
                <input type="checkbox" name="useSameAddress" checked={formData.useSameAddress} onChange={handleChange} />
                My Billing Address is same as Shipping address
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='billingInfo'>
            <h1>Billing Information</h1>
            <div class="checkout-address">
              <div class="dynamic-form-field floating-form-field dynamic-form-field--firstName">
                <div class="form-field"><input aria-labelledby="firstNameInput-label firstNameInput-field-error-message"
                  autoComplete="given-name" id="firstNameInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingAddress.firstName"
                  data-test="firstNameInput-text" placeholder=" " value={formData.billingAddress.firstName}
                  onChange={handleChange} /><label for="firstNameInput"
                    id="firstNameInput-label" class="floating-label form-label optimizedCheckout-form-label">First
                    Name</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--lastName">
                <div class="form-field"><input aria-labelledby="lastNameInput-label lastNameInput-field-error-message"
                  autoComplete="family-name" id="lastNameInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingAddress.lastName"
                  data-test="lastNameInput-text" placeholder=" " value={formData.billingAddress.lastName} onChange={handleChange} /><label for="lastNameInput"
                    id="lastNameInput-label" class="floating-label form-label optimizedCheckout-form-label">Last
                    Name</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--countryCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon"><svg height="24" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg></div>
                  </div><select aria-labelledby="countryCodeInput-label countryCodeInput-field-error-message"
                    autoComplete="country" class="floating-select form-select optimizedCheckout-form-select"
                    data-test="countryCodeInput-select" id="countryCodeInput" name="shippingAddress.countryCode">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                  </select><label for="countryCodeInput" id="countryCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">Country</label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--postCode">
                <div class="form-field"><input aria-labelledby="postCodeInput-label postCodeInput-field-error-message"
                  id="postCodeInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingAddress.postalCode" data-test="postCodeInput-text" placeholder=" " value={formData.billingAddress.billingZip} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="postCodeInput" id="postCodeInput-label"
                      class="floating-label form-label optimizedCheckout-form-label">Postal Code</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--city">
                <div class="form-field"><input aria-labelledby="cityInput-label cityInput-field-error-message"
                  id="cityInput" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingAddress.city" data-test="cityInput-text" placeholder=" " value={formData.billingAddress.billingCity} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="cityInput" id="cityInput-label"
                      class="floating-label form-label optimizedCheckout-form-label">City</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--provinceCode">
                <div class="form-field">
                  <div class="floating-select-chevron">
                    <div class="icon"><svg height="24" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg></div>
                  </div><select aria-labelledby="provinceCodeInput-label provinceCodeInput-field-error-message"
                    autoComplete="address-level1" class="floating-select form-select optimizedCheckout-form-select"
                    data-test="provinceCodeInput-select" id="provinceCodeInput"
                    name="shippingAddress.stateOrProvinceCode">
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                  </select><label for="provinceCodeInput" id="provinceCodeInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">State/Province</label>
                </div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine1">
                <div class="form-field"><input
                  aria-labelledby="addressLine1Input-label addressLine1Input-field-error-message" maxLength="40"
                  id="addressLine1Input" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingAddress.address1" data-test="addressLine1Input-text" placeholder=" "
                  value={formData.billingAddress.billingAddress} autoComplete="off" onChange={handleChange} /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="addressLine1Input"
                      id="addressLine1Input-label" class="floating-label form-label optimizedCheckout-form-label">Address
                    Line 1</label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--addressLine2">
                <div class="form-field"><input
                  aria-labelledby="addressLine2Input-label addressLine2Input-field-error-message"
                  id="addressLine2Input" type="text"
                  class="form-input optimizedCheckout-form-input floating-input ui-autocomplete-input"
                  name="shippingAddress.address2" data-test="addressLine2Input-text" placeholder=" " value={formData.billingAddress.billingApartment} onChange={handleChange}
                  autoComplete="off" /><span role="status" aria-live="polite"
                    class="ui-helper-hidden-accessible"></span><label for="addressLine2Input"
                      id="addressLine2Input-label" class="floating-label form-label optimizedCheckout-form-label">Address
                    Line 2 <small class="optimizedCheckout-contentSecondary">(Optional)</small></label></div>
              </div>
              <div class="dynamic-form-field floating-form-field dynamic-form-field--phone">
                <div class="form-field"><input aria-labelledby="phoneInput-label phoneInput-field-error-message"
                  autoComplete="tel" id="phoneInput" type="tel"
                  class="form-input optimizedCheckout-form-input floating-input" name="shippingAddress.phone"
                  data-test="phoneInput-text" placeholder=" " value={formData.billingAddress.billingPhone} onChange={handleChange} /><label for="phoneInput" id="phoneInput-label"
                    class="floating-label form-label optimizedCheckout-form-label">Phone Number <small
                      class="optimizedCheckout-contentSecondary">(Optional)</small></label></div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <li
              class="form-checklist-item optimizedCheckout-form-checklist-item form-checklist-item--selected optimizedCheckout-form-checklist-item--selected">
              <div class="form-checklist-header form-checklist-header--selected">
                <div class="form-field"><input id="radio-braintree" type="radio"
                  class="form-checklist-checkbox optimizedCheckout-form-checklist-checkbox"
                  name="paymentProviderRadio" value="braintree" checked="" /><label for="radio-braintree"
                    class="form-label optimizedCheckout-form-label">
                    <div class="paymentProviderHeader-container">
                      <div class="paymentProviderHeader-nameContainer" data-test="payment-method-braintree">
                        <div aria-level="6" class="paymentProviderHeader-name" data-test="payment-method-name"
                          role="heading">Credit Card</div>
                      </div>
                      <div class="paymentProviderHeader-cc">
                        <ul class="creditCardTypes-list">
                          <li class="creditCardTypes-list-item" data-test="visa-icon"><span class="cardIcon">
                            <div class="icon cardIcon-icon icon--medium" data-test="credit-card-icon-visa">
                              <img src={visa} alt="" />
                            </div>
                          </span></li>
                          <li class="creditCardTypes-list-item" data-test="mastercard-icon"><span
                            class="cardIcon">
                            <div class="icon cardIcon-icon icon--medium"
                              data-test="credit-card-icon-mastercard">
                              <img src={mastercard} alt="" />
                            </div>
                          </span></li>
                          <li class="creditCardTypes-list-item" data-test="american-express-icon"><span
                            class="cardIcon">
                            <div class="icon cardIcon-icon icon--medium"
                              data-test="credit-card-icon-american-express">
                              <img src={amex} alt="" />
                            </div>
                          </span></li>
                          <li class="creditCardTypes-list-item" data-test="discover-icon"><span class="cardIcon">
                            <div class="icon cardIcon-icon icon--medium"
                              data-test="credit-card-icon-discover">
                              <img src={discover} alt="" />
                            </div>
                          </span></li>
                        </ul>
                      </div>
                    </div>
                  </label></div>
              </div>
              <div class="form-checklist-body">
                <div>
                  <div class="paymentMethod paymentMethod--creditCard" data-test="credit-cart-payment-method">
                    <fieldset class="form-fieldset creditCardFieldset">
                      <legend class="form-legend is-srOnly">Credit card</legend>
                      <div class="form-body">
                        <div class="form-ccFields"><iframe id="mbc-payment-form--braintree_credit_card"
                          src="https://apps.minibc.com/apps/recurring/checkouts/payment/hosted/form/braintree/usd?storeID=NmZ1VzRYWkJ2dGxQWW9xUUZHTVFoQT09LkhMeCtFeStvTXc3UVd4TksvUkExTGc9PQEQUALSEQUALS&amp;token=608c2c052d2c3"
                          frameborder="0" allowtransparency="true" scrolling="no"
                          style={{ width: "100%", minHeight: "164px", height: "147px" }}></iframe></div>
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
          <div className="button-container">
            {currentStep !== 1 && <button type="button" onClick={goToPreviousStep} className='buttonp'>Previous</button>}
            {currentStep !== 4 ? <button type="button" onClick={goToNextStep}>Next</button> : <button type="submit" className='placeorder'>PLACE ORDER</button>}
          </div>
        </form>
      </div>
  );
};

export default MultiStepForm;
