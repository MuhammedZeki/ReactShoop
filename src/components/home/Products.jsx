import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSort, getAllProducts, selectedCategoryy } from '../../redux/slicer/ProductSlicer'
import Product from './Product'
import '../../css/Products.css'
import ReactPaginate from 'react-paginate';
function Products({selectedCategory,filter,search}) {
    const {products,status} = useSelector(store => store.product)
    const dispatch = useDispatch()
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(()=>{
      if(selectedCategory){
        dispatch(selectedCategoryy(selectedCategory))
      }else{
        dispatch(getAllProducts())
      }     
    },[dispatch,selectedCategory])
    const itemsPerPage = 6
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    
    if(products.length === 0){
        return <div>Ürün Bulunmamaktadır</div>
    }
  };
    return (
    <div className='propag'>
      <div className='products flex-row'>
        {
          status == "loading" ? <div>Yükleniyor</div> : 
          currentItems?.
          sort((a,b)=> filter === "inc" ? a.price-b.price : filter === "dec" ? b.price-a.price : null)?.
          filter((product)=>{
            return search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search)
          }).map((product)=>(
              <Product key={product.id} product={product}/>
          ))
        }
      </div>
      <div className='flex-row'>
        <ReactPaginate
          className='paginate'
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default Products
