import React from 'react'
import PropTypes from 'prop-types'

const AllCourse = ({course,handleAddCart}) => {
    const {id, name, img, price, time} = course;
  return (
    <div>
      <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
	</div>

	<div className='flex justify-between'>
        <p>Price: {price}</p>
        <p>Time: {time} h</p>
    </div>
    <div>
      <button onClick={()=>handleAddCart(course)} className="px-6 py-2 mt-4 w-full border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">Add Cart</button>
    </div>
    </div>
    </div>
  )
}

AllCourse.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func.isRequired
}

export default AllCourse
