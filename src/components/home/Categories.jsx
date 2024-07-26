import React, { useEffect, useState } from 'react'
import '../../css/Categories.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/slicer/ProductSlicer'
import Categoty from './Categoty'
function Categories({setSelectedCategory}) {
  const {categories}=useSelector(store => store.product)
  const dispatch = useDispatch()
  const [category,setCategory]=useState("")
  useEffect(()=>{
    if(category){
      setSelectedCategory(category)
    }
    dispatch(getAllCategories())
  },[dispatch,category])
  return (
    <div className='categories'>
      {
        categories?.map((category,i)=>(
          <Categoty setCategory={setCategory} key={i} category={category}/>
        ))
      }
    </div>
  )
}

export default Categories
