import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const login =async ()=>{
    const res = await axios.post('http://localhost:8000/login',{
      email,password
    }, {
      withCredentials: true
    }) 
      console.log(res)
      let token = res.data.payload.token
      console.log(token)
      let role = res.data.payload.role
      localStorage.setItem("token", token)
      localStorage.setItem("role", role)
      console.log(role)
      if(role=="admin") {
        navigate('/admin')
      }
      if(role=="service") {
        navigate('/service')
      }
      if(role=="store") {
        navigate('/store')
      }
      if(role=="factory") {
        navigate('/factory')
      }
    
  }

  
  return (
    <div class="min-h-screen bg-green-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-green-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div class="absolute w-48 h-48 rounded-xl bg-green-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
	    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <div class="space-y-4">
                <input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
			<div class="text-center mt-6">
				    <button class="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-green-500 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:bg-green-600 focus:ring-offset-1" onClick={login}>Login</button>
				<p class="mt-4 text-sm"><span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Forgot password</span>
				</p>
			</div>
		</div>
		<div class="w-40 h-40 absolute bg-green-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
  )
}
