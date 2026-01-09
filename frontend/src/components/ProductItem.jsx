import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext)
  return (
    <Link className='group block overflow-hidden rounded-xl bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100' to={`/product/${id}`}>
      <div className='relative overflow-hidden rounded-lg bg-gray-100 aspect-4/5'>
        <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out' src={image[0]} alt={name} />
      </div>
      <div className="mt-3">
        <p className='text-xs text-gray-500 mb-1'>TRENDI</p>
        <p className='text-sm font-semibold text-gray-900 truncate'>{name}</p>
        <p className='text-sm font-bold text-black mt-1'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem