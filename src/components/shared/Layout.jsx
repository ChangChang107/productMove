import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import "./responsive.css"
import { HiOutlineLogout, BiMenu } from 'react-icons/bi'


export default function Layout() {
  const sidebarRef = useRef()
  const [stateRef , setStateRef] = useState(sidebarRef.current)
  const [isMenu,setIsMenu] = useState(false)
  useEffect(()=>{
    setStateRef(sidebarRef.current)
  })
  // Click hidden sidebar
  const handleClick = ()=>{
    setIsMenu(!isMenu)
    if(!isMenu){
      stateRef.style.width = '240px';
      stateRef.style.opacity = '1';
    }
    else{
      stateRef.style.width = '0px';
      stateRef.style.opacity = '0';
    }
  }
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'> 
        <Sidebar ref = {sidebarRef}/>
        <div className='flex flex-col flex-1 '>
            <Header/>
            <button onClick={handleClick} className="menu-btn"><BiMenu fontSize={40} /></button>
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