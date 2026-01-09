import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (e) => {
    // if we submit the form then page will reload so to prevent that we use preventDefault
    e.preventDefault()
  }

  return (
    <div className='text-center py-10 bg-gray-100 rounded-lg'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='mt-3 text-gray-500'>Join our community and be the first to know about new arrivals and exclusive offers.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3'>
        <div className='w-full flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
          <input className='w-full outline-none py-3 px-5 text-gray-700' type="email" placeholder='Enter your email address' required />
          <button className='bg-black text-white text-xs px-8 py-4 font-semibold hover:bg-gray-800 transition-colors uppercase tracking-wider' type='submit'>Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default NewsLetterBox