import React, { useState } from 'react'
import Slick from '../components/home/Slick'
import Filter from '../components/home/Filter'
import Categories from '../components/home/Categories'
import Products from '../components/home/Products'
import  '../css/Home.css'
function Home({search}) {
  const [selectedCategory,setSelectedCategory]=useState("")
  const [filter,setFilter]=useState("")
  return (
    <div>
      <Slick />
      <Filter setFilter={setFilter}/>
      <div className='cat_pro'>
        <Categories setSelectedCategory={setSelectedCategory}/>
        <Products search={search} filter={filter} selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}

export default Home
