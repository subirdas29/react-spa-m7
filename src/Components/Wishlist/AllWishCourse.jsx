import React from 'react'
import PropTypes from 'prop-types'
import WishlistCourse from './WishlistCourse'

const AllWishCourse = ({carts}) => {
    console.log(carts)
  return (
    <div className='ml-4'>
        <p>Add your Cart</p>
      {
        carts.map(cart => <WishlistCourse key={cart.id} cart={cart}></WishlistCourse>)
      }
    </div>
  )
}

AllWishCourse.propTypes = {
    carts: PropTypes.object
}

export default AllWishCourse
