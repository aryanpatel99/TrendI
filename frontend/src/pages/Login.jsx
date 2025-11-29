import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Login = () => {

  const [currentState, setCurrentState] = useState("Login")
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const onSubmitHandler = async (e) => {
    // if we submit the form then page will reload so to prevent that we use preventDefault
    e.preventDefault()

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          toast.success("Registration Successful")
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message)
        }
      } else {

        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          toast.success("Login Successful")
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.log(error.response?.data || error);
      const msg = error.response?.data?.message || error.message || "Something went wrong";
      toast.error(msg);

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-medium text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === "Login" ? "" : <input onChange={(e) => setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='Name' value={name} required />}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='aphrK@example.com' required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='Password' required />

      <div className='w-full flex  justify-between text-sm mt-2'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {currentState === "Login" ? <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p> : <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</p>}
      </div>

      <button className='bg-black text-white px-7 py-1 
      mt-2 rounded-full hover:bg-gray-800'>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>

    </form>
  )
}

export default Login


