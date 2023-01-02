import classNames from 'classnames'
import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout, BiMenu } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { forwardRef } from 'react'
import './responsive.css';
const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-green-300 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function Sidebar(props,ref) {
    
    const role = localStorage.getItem('role')
    return (
        <>
        {/* <span class="absolute text-white text-4xl top-5 left-4 cursor-pointer" onclick={Openbar()}>
            <i class="px-2 bg-gray-900 rounded-md">e</i>
        </span> */}
        <div ref={ref} className=" sidebar bg-green-500 w-60 p-3 flex flex-col text-white ">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className="text-neutral-100 text-lga">Product Move</span>
                {/* <button className='ml-14' onclick={Openbar()}>x</button> */}
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5 border-t border-green-300">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => {
                    if (role === item.role) {
                        return (<SidebarLink key={item.key} item={item} />)
                    } 
                })}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-green-300">
                {' '}
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <Link to={"/login"} className={classNames(linkClasses, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </Link>
            </div>
        </div >
        </>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()
    const role = localStorage.getItem('role')
    return (
        <Link
            to={item.path}
            className={classNames(pathname === item.path ? 'text-white' : 'text-neutral-700', linkClasses)}
        >
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
export default forwardRef(Sidebar)
// function Openbar() {
//     document.querySelector('.sidebar').classList.toggle('left-[-300px]')
//   }
