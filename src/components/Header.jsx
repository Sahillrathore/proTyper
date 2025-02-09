import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between px-20 py-5 items-center bg-black/20'>
            <div className="logo text-white w-16 h-10">
                <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?cs=srgb&dl=pexels-magda-ehlers-pexels-1337380.jpg&fm=jpg" alt="" className='w-full h-full' />
            </div>

            <nav className='flex gap-5 items-center justify-center text-white'>
                <li className='cursor-pointer list-none hover:text-purple-500 transition-colors '>Home</li>
                <li className='cursor-pointer list-none hover:text-purple-500 transition-colors ' >Leaderboards</li>
            </nav>

            <div className='text-white'>
                Options
            </div>
        </div>
    )
}

export default Header