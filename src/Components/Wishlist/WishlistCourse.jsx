import React from 'react'
import PropTypes from 'prop-types'

const WishlistCourse = ({cart}) => {
	// console.log(cart)
	const { name, img, price} = cart;
	

  return (
    
      <div className="flex-col space-y-4  dark:bg-gray-50 dark:text-gray-800">
	<h2 className="text-xl font-semibold">{cart.length}</h2>
	<ul className="flex flex-col divide-y dark:divide-gray-300">
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover max-w-20 max-h-20 dark:border- rounded outline-none  dark:bg-gray-500" src={img} alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex pb-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold ">{name}</h3>
							<p className="text-sm dark:text-gray-600">Classic</p>
						</div>
						<div>
							<p className="text-lg font-semibold">59.99</p>
							<p className="text-sm line-through dark:text-gray-400">{price}</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<button type="button" className="flex items-center px-2 py-1 pr-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h- fill-current">
								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span className='text-right'>Add to favorites</span>
						</button>
					</div>
				</div>
			</div>
		</li>
		
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">357 €</span>
		</p>
		<p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<button type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
    
  )
}

WishlistCourse.propTypes = {
    cart: PropTypes.array,
}

export default WishlistCourse
