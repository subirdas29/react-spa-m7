import React, { useEffect, useState } from 'react'
import AllCourse from './AllCourse'
import PropTypes from 'prop-types'

const Course = ({handleAddCart}) => {
  const [courses, setCourses] = useState([])
  

  useEffect(()=>{
      fetch('Course.json')
      .then(res=>res.json())
      .then(data => setCourses(data))
  },[])

  
  return (
<div className='lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-4'>
  {
    courses.map(course => <AllCourse key={course.id} handleAddCart={handleAddCart}  course = {course}></AllCourse>)
  }
</div>
)
}
Course.propTypes = {
  handleAddCart: PropTypes.func.isRequired
}


export default Course
