import React,  { useState } from 'react'
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'

let reqInstance = axios.create({
    headers: {
      cookie : `token=${localStorage.getItem('token')}`
      }
  })

export default function CreateUser() {

    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')

    const create =async ()=>{
        const res = await axios.post(
            'http://localhost:8000/admin/create',
            {
                name,
                email,
                password,
                role
                
            },
            {
                withCredentials: true,
                headers: {
                    authorization: `${localStorage.getItem('token')}`
                }
            }
        )


          navigate('/admin/users')

        
        
    }

  return (
    <div class="mx-auto w-full max-w-[550px]">
        <form method="POST">
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Name
                </label>
                <input
                type="text"
                placeholder="Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={name} onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email
                </label>
                <input
                type="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={email} onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Password
                </label>
                <input
                type="password"
                placeholder="Enter password"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={password} onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="role"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Role
                </label>
                <input
                type="text"
                placeholder="Enter Role"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={role} onChange={(e)=>setRole(e.target.value)}
                />
            </div>
            <div>
                <button
                class="mr-5 mt-5 mb-5 hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={(e)=>{
                    e.preventDefault()

                    create()
                }}
                >
                Create
                </button>
            </div>
        </form>
    </div>
  )
}
