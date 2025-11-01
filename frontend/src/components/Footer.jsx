import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.LOGO} className='mb-5 w-32' alt="brand-logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    TrendI is one of the best sites when it comes to online shopping and fashion. The finest of material, superior design and unbeatable style go into the making of our shopping collection. Our range of online shopping men's wear, women's wear and kids wear is the best in the market. Compared with other men's shopping sites, TrendI brings you the best price products which won't hurt your pocket.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-234-567-890</li>
                    <li>contact@trendi.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr className='text-gray-300' />
            <p className='py-5 text-sm text-center'>Copyright &copy; 2025 TrendI. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer