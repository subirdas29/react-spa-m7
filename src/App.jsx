import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Components/Courses/Course'
import AllWishCourse from './Components/Wishlist/AllWishCourse'
import Navbar from './Components/Navbar'

function App() {


  const [carts, addCart]= useState([])

  const [newPrice,setNewPrice] = useState(0)

  const handleAddCart = (newCart,price) => {
    
      const allCart = [...carts, newCart]
      const addedPrice = newPrice + price;
      setNewPrice(addedPrice)
      addCart(allCart)  
  }

  

  

  const handleRemove = (id,idPrice) =>{
      const removeCourse = carts.filter((cart)=>cart.id!==id)
      const removePrice = newPrice - idPrice
      setNewPrice(removePrice)
      addCart(removeCourse)
      console.log(removeCourse)
  }

  

  return (
    <>
    <Navbar carts= {carts}></Navbar>
     <div className='md:flex mt-10 mx-10'>
     <Course handleAddCart= {handleAddCart} ></Course>
     <AllWishCourse carts = {carts} handleRemove={handleRemove} newPrice={newPrice}></AllWishCourse>
     </div>
    </>
  )
}

export default App
