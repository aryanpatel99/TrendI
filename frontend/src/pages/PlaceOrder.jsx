import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:py-14 min-h-[80h] border-t border-gray-200'>
      {/* left side */}
      <div className='flex flex-col gap-4  w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="email" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="number" placeholder='ZipCode' />
          <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded-lg px-3.5 py-1.5 w-full' type="number" placeholder='Phone' />
      </div>

      {/* ---------- right side ---------- */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={"METHOD"} />
          {/* -------- payment methods -------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe'?'bg-green-400':''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="stripe" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'razorpay'?'bg-green-400':''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="stripe" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod'?'bg-green-400':''}`}></p>
              <p className='font-medium text-gray-600 text-sm mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm active:scale-98 rounded-lg'>PLACE ORDER</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder
