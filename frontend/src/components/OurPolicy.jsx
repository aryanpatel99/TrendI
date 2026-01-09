import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='group'>
        <img className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-300' src={assets.exchange_icon} alt="exhange-icon" />
        <p className='font-bold text-gray-900'>Easy Exchange Policy</p>
        <p className='text-gray-500 mt-1'>We offer hassle free exchange policy</p>
      </div>

      <div className='group'>
        <img className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-300' src={assets.quality_icon} alt="quality-icon" />
        <p className='font-bold text-gray-900'>7 Days Return Policy</p>
        <p className='text-gray-500 mt-1'>We provide 7 days free return policy</p>
      </div>

      <div className='group'>
        <img className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-300' src={assets.support_img} alt="support-icon" />
        <p className='font-bold text-gray-900'>Best Customer Support</p>
        <p className='text-gray-500 mt-1'>We provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy