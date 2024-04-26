import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Components/Courses/Course'
import AllWishCourse from './Components/Wishlist/AllWishCourse'
import Navbar from './Components/Navbar'

function App() {


  const [carts, addCart]= useState([])

  const handleAddCart = newCart => {
    const allCart = [...carts, newCart]
     addCart(allCart)
  
  }


  return (
    <>
    <Navbar carts= {carts}></Navbar>
     <div className='md:flex mx-14'>
     <Course handleAddCart= {handleAddCart}  ></Course>
     <AllWishCourse carts = {carts}></AllWishCourse>
     </div>
    </>
  )
}

export default App
