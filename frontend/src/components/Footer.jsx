import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.LOGO} className='mb-5 w-32' alt="brand-logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
                        TrendI is one of the best sites when it comes to online shopping and fashion. The finest of material, superior design and unbeatable style go into the making of our shopping collection.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 uppercase tracking-widest text-black'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <Link to={'/'}><li className='hover:text-black cursor-pointer transition-colors duration-200'>Home</li></Link>
                        <Link to={'/about'}><li className='hover:text-black cursor-pointer transition-colors duration-200'>About Us</li></Link>
                        <Link to={'/'}><li className='hover:text-black cursor-pointer transition-colors duration-200'>Delivery</li></Link>
                        <Link to={'/'}><li className='hover:text-black cursor-pointer transition-colors duration-200'>Privacy Policy</li></Link>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 uppercase tracking-widest text-black'>
                        Get in Touch
                    </p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition-colors duration-200'>+1-234-567-890</li>
                        <li className='hover:text-black cursor-pointer transition-colors duration-200'>contact@trendi.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr className='border-gray-200' />
                <p className='py-8 text-sm text-center text-gray-500'>Copyright &copy; 2025 TrendI. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer