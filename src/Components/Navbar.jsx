import React from 'react'
import PropTypes from 'prop-types'
import { FaCartPlus,FaHeart } from "react-icons/fa6";
const Navbar = ({carts}) => {

  return (
    <div className='flex justify-between mx-10 mt-10'>
      <p className='font-bold text-4xl'>Courses</p>
      <div className='flex'>
      <FaCartPlus className='w-10 h-10 mr-4 relative'  />
      <span className=' border rounded-full px-2 absolute font-semibold bg-violet-600 text-white top-7 right-25 '>{carts.length}</span>
      <FaHeart className='w-10 h-10'/>
      
      <span className=' border rounded-full px-2 absolute font-semibold bg-violet-600 text-white top-7 right-14'>1</span>
    </div>
    </div>
  )
}

Navbar.propTypes = {
carts: PropTypes.array
}

export default Navbar
