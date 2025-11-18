import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 border-gray-200  pt-2 transition-opacity ease-in duration-500 opacity-100'>

      {/* product Data */}
      <div className='flex gap-12 mt-3 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => {
              return <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 rounded cursor-pointer' />
            })}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded' src={image} alt="" />
          </div>
        </div>

        {/* product details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`border border-gray-200 py-2 px-4 bg-gray-100 rounded-lg ${item == size ? "border-gray-900" : ""} `}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className='px-8 py-3 bg-black active:bg-gray-800 text-white text-sm font-medium rounded-lg'>ADD TO CART</button>

          <hr className='mt-8 border-gray-200 w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description and review section  */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 rounded-t-lg px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 rounded-t-lg px-5 py-3 text-sm'>Review (122)</p>
        </div>

        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
          <p>This e-commerce website is an online platform that provides a wide range of products to customers across the globe. It allows customers to browse and purchase products from the comfort of their own homes, with the added convenience of fast and reliable shipping. The website also provides a user-friendly interface, making it easy for customers to navigate and find the products they are looking for.</p>
          <p>Additionally, the website provides a secure payment system, ensuring that customers' personal and payment information is protected.</p>
        </div>
      </div>

      {/* related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product

// 246