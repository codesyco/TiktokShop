import React from 'react'
import "./ProductBanner.css"
import { Link } from 'react-router-dom'

const ProductBanner2 = () => {
  return (
    <div className='banner-container'>
        <div className='secondbannerbox'>
            <h1>sleek pantry canisters</h1>
            <p>Made from exceptionally durable clear plastic</p>
            <Link to="/products/6">
                <button>Preview</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductBanner2;
