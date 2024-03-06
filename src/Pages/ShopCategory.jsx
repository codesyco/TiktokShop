import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdownicon from '../Components/Assets/Expand Arrow.png'
import allProduct from '../Components/Assets/allProducts';
import Item from '../Components/Items/Item';
import cindy from '../Components/Assets/cindy.jpg'


const ShopCategory = (props) => {
  const {allProducts} = useContext(ShopContext);
  return (
    <div className='shopCategory'>
      <div className="shopcategory-indexsorting">
        <p>
          <span> Showing 1-9</span> out of 9 products
        </p>
        <div className="shopcategorysort">
            Sort by 
          <img width={20} height={20} src={dropdownicon} alt="" />
        </div>
      </div>
      <div className="catpage">
        <aside className='stickybar'>
        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={cindy} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">cindy</h3>
                                    <span className="job">Top customer</span>
                                </div>
                            </div>
                            <p> I love the convenience of just turning knob and cereal appears. No fuss, no mess! I bought the dispenser b/c my 14 yr old can't seem to pour a bowl of cereal w/o spilling it or the milk or both. The container releases one serving at a time per turn of knob. great for clumsy hands in a hurry! No spills at all!, i recommend most items on this website they are very useful</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
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
