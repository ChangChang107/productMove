import React,  { useState } from 'react'
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'

let reqInstance = axios.create({
    headers: {
      cookie : `token=${localStorage.getItem('token')}`
      }
  })

export default function CreateServiceProduct() {

    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [modelname,setModelname]=useState('')
    const [useroutid,setUseroutid]=useState('')
    const [type,setType]=useState('')
    const [color,setColor]=useState('')
    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    const [expiry,setExpiry]=useState('')
    const [quantity,setQuantity]=useState('')

    const create =async ()=>{
        const res = await axios.post(
            'http://localhost:8000/service/products/create',
            {
                modelname,
                name,
                useroutid,
                type,
                color,
                weight,
                height,
                expiry,
                quantity
            },
            {
                withCredentials: true,
                headers: {
                    authorization: `${localStorage.getItem('token')}`
                }
            }
        )


          navigate('/service/products')

        
        
    }

  return (
    <div class="mx-auto w-full max-w-[550px]">
        <form method="POST">
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Model Name
                </label>
                <input
                type="text"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={modelname} onChange={(e)=>setModelname(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Name
                </label>
                <input
                type="text"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={name} onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="type"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Type
                </label>
                <input
                type="text"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={type} onChange={(e)=>setType(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="color"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Color
                </label>
                <input
                type="text"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={color} onChange={(e)=>setColor(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="weight"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Weight
                </label>
                <input
                type="number"
                placeholder="Enter Weight"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={weight} onChange={(e)=>setWeight(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="height"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Height
                </label>
                <input
                type="number"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={height} onChange={(e)=>setHeight(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="expiry"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Expiry
                </label>
                <input
                type="number"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={expiry} onChange={(e)=>setExpiry(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="expiry"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Quantity
                </label>
                <input
                type="number"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={quantity} onChange={(e)=>setQuantity(e.target.value)}
                />
            </div>
            <div class="mb-5">
                <label
                for="amount"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Useroutid
                </label>
                <input
                type="number"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                value={useroutid} onChange={(e)=>setUseroutid(e.target.value)}
                />
            </div>
            <div>
                <button
                class="mr-5 mt-5 mb-5 hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={(e)=>{
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
