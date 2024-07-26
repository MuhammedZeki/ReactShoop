import React from 'react'
import '../../css/Filter.css'
function Filter({setFilter}) {
  return (
    <div className='filter'>
      <select onChange={(e)=>setFilter(e.target.value)} className='select'>
        <option className='option'>Seçiniz</option>
        <option className='option' value="inc">Artan Fiyata Göre</option>
        <option className='option' value="dec">Azalan Fiyata Göre</option>
      </select>
    </div>
  )
}

export default Filter
