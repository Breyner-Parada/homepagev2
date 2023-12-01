import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='header'>
        <NavLink className='w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md' to='/'>
            <p className='blue-gradient_text'>BP</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' } to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' } to='/projects'>Projects</NavLink>
        </nav>
    </header>
  )
}
