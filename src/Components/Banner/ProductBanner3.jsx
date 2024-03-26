import React from 'react'
import './ProductBanner.css'
import jilmo from '../Assets/jilmo banner.jpg'

const ProductBanner3 = () => {
  return (
    <div className='bannerContainer'>
        <div className="bannerwrapper">
            <div className="banimage">
                <img src={jilmo} className='banimage_img' alt="Jilmo whisk" loading='lazy'/>
            </div>
            <div className="infoWrapper">
                <div className="infoWrapper-Inner">
                    <h2>Jillmo Danish Dough Whisk</h2>
                    <p>12inch Stainless Steel Whisk is made of stiff food grade 304 stainless steel</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductBanner3
