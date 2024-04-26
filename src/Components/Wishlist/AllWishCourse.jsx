import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WishlistCourse from './WishlistCourse'

const AllWishCourse = ({carts,handleRemove}) => {

   
    
  return (
    <div className='lg:w-1/4 h-1/2'>
        <div className='text-xl font-semibold mt-16 md:mt-0 text-center px-6 py-2 border rounded-md dark:border-violet-600'>
        <p>Add your Cart</p>
        </div>
      {
        carts.map(cart => <WishlistCourse key={cart.id} handleRemove={handleRemove} cart={cart}></WishlistCourse>)
      }
    </div>
  )
}

AllWishCourse.propTypes = {
    carts: PropTypes.array,
    handleRemove: PropTypes.func
}

export default AllWishCourse
