import React from 'react'
import './Acheivements.css'
import happycustomer from '../Assets/happycustomer.jpg'
import deliverycard from '../Assets/delivery.jpg'
import productscard from '../Assets/productscatalogue.jpg'

const Acheivements = () => {
  return (
    <div className='acheivementscard'>
      <div className="cardcontainer">
        <img src={productscard} alt="" />
        <h2>Trendy Tiktok Products</h2>
      </div>
      <div className="cardcontainer">
        <img src={deliverycard} alt="" />
        <h2> Swift Deliveries</h2>
      </div>
      <div className="cardcontainer">
        <img src={happycustomer} alt="" />
        <h2>Lots of Happy Customers</h2>
      </div>
    </div>
  )
}

export default Acheivements
