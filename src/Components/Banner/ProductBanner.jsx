import React from 'react'
import "./ProductBanner.css"
import { Link } from 'react-router-dom'

const ProductBanner = () => {
  return (
    <div className='banner-container'>
        <div className='firstbannerbox'>
            <h1>MINI BUT <br />POWERFUL!</h1>
            <p>Blends small cuts (1 inch) ice cube, frozen fruits, vegeatable and seeds well.</p>
            <Link to="/products/1">
                <button>Preview</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductBanner
