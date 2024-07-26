import React from 'react'
import '../../css/Categories.css'
function Categoty({category,setCategory}) {
  return (
    <div onClick={()=>setCategory(category)} className='category'>
      {category}
    </div>
  )
}

export default Categoty
