import React, { useEffect, useState } from 'react'
import AllCourse from './AllCourse'
import PropTypes from 'prop-types'


const Course = ({handleAddCart,courses}) => {
  

 
  return (
<div className='lg:w-3/4 md:h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>
  {
    courses.map((course,idx) => <AllCourse key={idx} handleAddCart={handleAddCart} course = {course}></AllCourse>)
  }
</div>
)
}
Course.propTypes = {
  handleAddCart: PropTypes.func,
  courses: PropTypes.array,
}


export default Course
