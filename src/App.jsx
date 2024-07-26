import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import PageContainer from './container/PageContainer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import NotFoundPage from './components/error/NotFoundPage'
import { useState } from 'react'
function App() {
  const [search,setSearch]=useState("")
  return (
    <>
      <PageContainer>
        <Navbar setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={<Home search={search}/>}/>
          <Route path='/product-details/:id' element={<ProductDetails />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </PageContainer>
      
    </>
  )
}

export default App
