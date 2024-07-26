import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProductt } from '../../redux/slicer/ProductSlicer'
import { getAllBasket } from '../../redux/slicer/BasketSlicer'

function Product() {
  const dispatch = useDispatch()
  const {selectedProduct} = useSelector(store=>store.product)
  const {id} = useParams()
  const [count,setCount]=useState(0)
  useEffect(()=>{
    dispatch(selectedProductt(id))
  },[dispatch,id])
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const newBasket=()=>{
    const request ={
      id:id,
      title:selectedProduct.title,
      image:selectedProduct.image,
      price:selectedProduct.price,
      count:count
    }
    dispatch(getAllBasket(request))
  }
  return (
    <div className='productDetails flex-column'>
      <div>
        <img width={400} height={500} src={selectedProduct?.image}/>
      </div>
      <div>
        <h4>{selectedProduct?.title}</h4>
        <p>{selectedProduct?.description}</p>
        <div style={{justifyContent:"space-between"}} className='flex-row'>
          <p>{selectedProduct?.price}TL</p>
          <a style={{textDecoration:"none"}} href="/">Geri Dön</a>
        </div>
      </div>
      <div className='flex-row countContainer'>
        <div className='flex-row'>
            <span onClick={decrement} className='count'>-</span>
            <span className='count'>{count}</span>
            <span onClick={increment} className='count'>+</span>
        </div>
        <div>
          <button onClick={newBasket} className='countButton'>Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default Product
