import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'> 
        <Sidebar />
        <div className='flex flex-col flex-1 '>
            <Header/>
            <div className='relative overflow-auto '>
              <div className="flex-1 p-4 min-h-0 ">{<Outlet/>}
              </div>
            </div>
        </div>
    </div>
  )
}

function Footer() {
  return (
    <div className=' bottom-0 bg-white text-center py-3'> 
      <p className='mb-0'>by @</p>
    </div>
  )
}