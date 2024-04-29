import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WishlistCourse from './WishlistCourse'

const AllWishCourse = ({carts,handleRemove,newPrice,newTime}) => {

    console.log(carts)
    
    
  return (
    <div className='lg:w-1/4 ml-10'>
        <div className='text-xl font-semibold mt-16 md:mt-0 text-center px-6 py-2 border rounded-md dark:border-violet-600'>
        <p>Add your Cart</p>
        </div>
       <div className='flex justify-between mt-6'>
       <p>Course Time : {newTime}</p>
        <div className="space-y-1 text-right">
		
    <p>Total amount:
			<span className="font-semibold">{newPrice}</span>
		</p>
		<p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
   
	</div>
       </div>
      {
        carts?.map((cart,index) => <WishlistCourse key={index}  handleRemove={handleRemove} cart={cart}></WishlistCourse>)
      }
    </div>
  )
}

AllWishCourse.propTypes = {
    carts: PropTypes.array,
    handleRemove: PropTypes.func,
    newPrice: PropTypes.number,
    newTime: PropTypes.number,
}

export default AllWishCourse
