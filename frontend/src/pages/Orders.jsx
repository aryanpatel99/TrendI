// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const Orders = () => {
//   const [orders, setOrders] = useState(null)

//   useEffect(()=>{
//     const token = localStorage.getItem("token")

//     const fetchOrders = async() => {
//       try {
        
//         const res = await fetch('http://localhost:3000/api/user/orders',{
//           headers:{
//             "Authorization": `Bearer ${token}`
//           }
//         })
    
//         const data = await res.json()
//         console.log(data);
    
//         if(data.success){
//           setOrders(data.orders)
//         }else{
//           alert(data.message || "Login required")
//         }
//       } catch (error) {
//         console.log("Error fetching orders:", error);
//       }
//     }

//     fetchOrders()

//   },[])

//   useEffect(() => {
//   if (!localStorage.getItem("token")) {
//     navigate("/login");
//   }
// }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Orders</h1>

//       {orders ? (
//         <div className="mt-4">
//           {orders.map((item) => (
//             <p key={item.id}>
//               {item.product} — ₹{item.amount}
//             </p>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default Orders


import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {

  const {products,currency} = useContext(ShopContext)

  return (
    <div className='border-t pt-16 border-gray-300'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div className=''>
        {products.slice(1,4).map((item,i)=>(
           <div key={i} className='py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>

                <p className='mt-2'>Date: <span className='text-gray-400'>25 July, 2024</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>

                <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-black hover:text-white active:scale-98'>Track Order</button>
            </div>
            
           </div>
        ))}
      </div>
    </div>
  )
}

export default Orders

// 434