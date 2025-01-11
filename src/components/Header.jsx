import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between px-20 py-5 items-center bg-black/20'>
            <div className="logo text-white">Logo</div>

            <nav className='flex gap-5 items-center justify-center text-white'>
                <li className='cursor-pointer list-none '>Home</li>
                <li className='cursor-pointer list-none ' >Leaderboards</li>
            </nav>

            <div className='text-white'>
                Theme
            </div>
        </div>
    )
}

export default Header