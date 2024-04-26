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


  const handleRemove = id =>{
    
      const removeCourse = carts.filter((cart,index)=>index!==id)
      addCart(removeCourse)
      console.log(removeCourse)
  }

  

  return (
    <>
    <Navbar carts= {carts}></Navbar>
     <div className='md:flex mt-10 mx-10'>
     <Course handleAddCart= {handleAddCart} ></Course>
     <AllWishCourse carts = {carts} handleRemove={handleRemove}></AllWishCourse>
     </div>
    </>
  )
}

export default App
