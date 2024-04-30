import { useEffect, useState } from 'react'

import './App.css'
import Course from './Components/Courses/Course'
import AllWishCourse from './Components/Wishlist/AllWishCourse'
import Navbar from './Components/Navbar'
import Swal from 'sweetalert2'
import { addLS, getLs, removeLs } from './utilities/localstorage'

function App() {


  const [carts, addCart]= useState([])

  const [newPrice,setNewPrice] = useState(0)

  const [newTime, setNewTime] = useState(0)
  const [courses, setCourses] = useState([])

  
  

  useEffect(()=>{
      fetch('Course.json')
      .then(res=>res.json())
      .then(data => setCourses(data))
  },[])

  useEffect(()=>{
    
    if(courses.length){
      const getLsData = getLs()
      
      const saveCart = []
     
      for(const id of getLsData){
       const courseFind = courses.find(course => course.id === id)
        if(courseFind)
        {
          saveCart.push(courseFind)
        }
      }
      console.log(saveCart)
      addCart(saveCart)
      
     
    }},[courses])
  

  const handleAddCart = (newCart,price,time) => {
    
      
      if(carts.find(cart => cart.id ===newCart.id))
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already added this cart!",
        });
      }

      else{
      const allCart = [...carts, newCart]
      const addPrice = parseFloat(newPrice + price);
      const addedPrice = parseFloat(addPrice.toFixed(2))
      const addTime = parseInt(newTime + time)
      setNewTime(addTime)
      setNewPrice(addedPrice)
      addCart(allCart)  
      addLS(newCart.id)
      }
  }

  const handleRemove = (id,idPrice,time) =>{
      const removeCourse = carts.filter((cart)=>cart.id!==id)
      const removePrices = newPrice - parseFloat(idPrice)
      const removePrice = parseFloat(removePrices.toFixed(2))

      const addTime = parseInt(newTime - time)
      setNewTime(addTime)
      setNewPrice(removePrice)
      addCart(removeCourse)
      removeLs(id)
      
  }

  return (
    <>
    <Navbar carts= {carts}></Navbar>
     <div className='md:flex mt-10 mx-10'>
     <Course handleAddCart= {handleAddCart} courses={courses} ></Course>
     <AllWishCourse carts = {carts} handleRemove={handleRemove} newPrice={newPrice} newTime={newTime}></AllWishCourse>
     </div>
    </>
  )
}

export default App
