import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [currentState, setCurrentState] = useState("SignUp")
  const [name , setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const resetForm = () => {
    setName("")
    setEmail("")
    setPassword("")
  }
  

  const onSubmitHandler = async(e)=>{
    // if we submit the form then page will reload so to prevent that we use preventDefault
     e.preventDefault()

     try {
      let url =""
      
      if(currentState === "Login"){
        url = "http://localhost:3000/api/user/login"
      }else {
        url = "http://localhost:3000/api/user/register";
      }

      const res = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,email,password})
      })

      const data = await res.json()
      console.log(data);

      if(data.success){
        toast.success("User logged in / registered successfully!");
        localStorage.setItem("token", data.token);
        console.log("User logged in / registered successfully!");
        resetForm()
        navigate("/collection")
      } else {
        toast.error(data.message);
        console.log("Error:", data.message);
      }
      
     } catch (error) {
      console.log("Error:", error);
     }
  }

  

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-medium text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === "Login" ?"":<input onChange={(e) => setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='Name' value={name} required/>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='aphrK@example.com' required/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800 rounded-full' placeholder='Password' required />

      <div className='w-full flex  justify-between text-sm mt-2'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {currentState === "Login" ? <p onClick={()=> setCurrentState("SignUp")} className='cursor-pointer'>Create Account</p>:<p onClick={()=> setCurrentState("Login")} className='cursor-pointer'>Login Here</p>}
      </div>

      <button className='bg-black text-white px-7 py-1 
      mt-2 rounded-full hover:bg-gray-800'>{currentState === "Login" ? "Sign In":"Sign Up"}</button>

    </form>
  )
}

export default Login


