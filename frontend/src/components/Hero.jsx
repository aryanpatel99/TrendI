
import React, { useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {


  useEffect(() => {
    // dynamically import Flowbite AFTER component is mounted
    import('flowbite');
  }, []);




  return (


    <div id="default-carousel" className="relative w-full z-0" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-2xl md:h-[500px] shadow-lg">
        {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item="active">
          <img src={assets.hero_img} className="absolute inset-0 w-full h-full object-cover" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={assets.hero1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={assets.hero2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={assets.hero3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={assets.hero4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
        <button type="button" className="w-3 h-3 rounded-full bg-gray-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-500" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-500" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-500" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-500" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  )
}

export default Hero





// import React from 'react'
// import {assets} from '../assets/frontend_assets/assets.js'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* left */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//         <div className='text-[#414141]'>
//           <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
//           </div>
//           <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed pacifico-regular'>Latest Arrivals</h1>
//           <div className='flex items-center gap-2'>
//             <p className='font-semibold text-sm md:text-base '>SHOP NOW</p>
//             <p className='w-8 md:w-11 h-px bg-[#414141]'></p>
//           </div>
//         </div>
//       </div>


//       {/* right */}
//       <img src={assets.hero_img} className='w-full sm:w-1/2' alt="hero-img" />



//     </div>
//   )
// }

// export default Hero