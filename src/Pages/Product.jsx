import React, { useContext } from 'react'
import TopSelling from '../Components/Top Selling/TopSelling'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ShopCategory from './ShopCategory';


const Product = () => {
  const {allProduct, shopProducts} = useContext(ShopContext);
  const {productId} = useParams();
  let product
  if (productId > 10) {
    product = shopProducts.find((e)=> e.id === Number(productId))
  }else{
    product = allProduct.find((e)=> e.id === Number(productId))
  }
  return (
    <div>
      {product ? (
        <Breadcrumb product={product}/>,
        <ProductDisplay product={product} />
      ) : (
        <ShopCategory/>
      )}
    </div>
  )
}

export default Product;
