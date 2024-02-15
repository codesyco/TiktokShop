import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdownicon from '../Components/Assets/Expand Arrow.png'
import allProduct from '../Components/Assets/allProducts';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const {allProducts} = useContext(ShopContext);
  return (
    <div className='shopCategory'>
      <div className="shopcategory-indexsorting">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategorysort">
            Sort by 
          <img width={20} height={20} src={dropdownicon} alt="" />
        </div>
      </div>
      <div className="catpage">
        <aside className='stickybar'>
          here we go
          {/* this place would contain top rated products data and testimonials */}
        </aside> 
        
        <div className="shopcategoryproducts">
          {allProduct.map((item, i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
