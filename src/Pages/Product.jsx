import React, { useContext } from 'react'
import TopSelling from '../Components/Top Selling/TopSelling'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ShopCategory from './ShopCategory';


const Product = () => {
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e)=> e.id === Number(productId))
  console.log(product)
  return (
    <div>
      {product ? (
        <Breadcrumb product={product}/>,
        console.log(<Breadcrumb/>),
        <ProductDisplay product={product} />
      ) : (
        <ShopCategory/>
      )}
    </div>
  )
}

export default Product;
