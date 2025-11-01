import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e)=>{
        // if we submit the form then page will reload so to prevent that we use preventDefault
         e.preventDefault()
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, placeat?</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-300'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>

         
    </div>
  )
}

export default NewsLetterBox