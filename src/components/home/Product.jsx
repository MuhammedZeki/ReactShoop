import React from 'react'
import { CiStar } from "react-icons/ci";
import '../../css/Product.css'
import { useNavigate } from 'react-router-dom';
function Product({product}) {
  const navigate = useNavigate()
  return (
    <div className='flex-column product'>
      <div>
        <img className='product_img' width={200} height={200} src={product?.image}/>
      </div>
      <div>
        <p style={{height:"30px"}}>{product?.title}</p>
        <div className='flex-row rate'>
          <div className='flex-row'><CiStar />{product?.rating.rate}</div>
          <div>{product?.price}TL</div>
        </div>
      </div>
      <button onClick={()=>navigate(`/product-details/${product?.id}`)} className='button'>Ürünü İncele</button>
    </div>
  )
}

export default Product
