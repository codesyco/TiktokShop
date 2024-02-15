import React, { useContext } from 'react'
import TopSelling from '../Components/Top Selling/TopSelling'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e)=> e.id === Number(productId))
  return (
    <div>
      {/* <Breadcrumb product={allProduct.name}/> */}
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product;
