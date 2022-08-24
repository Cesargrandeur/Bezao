import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../asset/logo.svg'
import menu from "../asset/menu.svg"
import home from "../asset/home.svg"
import mealplan from "../asset/mealplan.svg"
import tray from "../asset/tray.svg"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }

    const Cart = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5.5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )

    }
    const buttonStyle = " text-white border-0 rounded-full bg-onion  px-4 py-3"
    const liStye = "p-1 mr-6 hover:text-onion hover:first-letter:underline underline-offset-8 active:text-onion active:first-letter:underline"
    return (
        <div className=' shadow-md w-full h-[100px] overflow-hidden top-0 z-10'>
            <div className='px-2 items-center  flex justify-between w-full h-full'>
                {/* Logo */}
                {!nav &&
                    <div className='flex items-center '>
                        <a href="/" > <img className='lg:ml-40 ' src={logo} alt="logo" /> </a>
                        <div className='font-extrabold w-16  ml-3 align-middle'>Meals</div>
                    </div>
                }


                {/* Mobile view */}

                {/* Hamburger and Cart */}
                <div className='sm:absolute sm:right-14 hamburger lg:invisible flex justify-end' >
                    <a className='mr-4'>
                        {!nav && <Cart />}
                    </a>
                    <a onClick={handleClick}>
                        {!nav && <MenuIcon className='w-5' />}
                    </a>
                </div>

                {/* DropDown */}
                {nav &&
                    <div className="hidden:shadow-md z-[20] absolute top-0 left-0 w-full  h-[814] bg-white">
                        <a onClick={handleClick} className="mb-24 absolute right-12 top-9"><XIcon className='w-5' /></a>


                        <div className="h-full pt-5  ">
                            <ul className="ml-9 mt-24">
                                <div>
                                    <button className=" text-white border-0 rounded-full mr-4 bg-onion  px-3 py-3.5">Create Account</button>
                                    <button className=' border border-onion rounded-full  bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                                </div>

                                <li className='mb-9 mt-9'> <a href="/" className=' hover:text-[#CCCCCC] flex items-start '> <img className='mr-7 ' src={home} alt="home" /> Home</a></li>

                                <li className='mb-9'> <a href="" className=' flex items-start hover:text-[#CCCCCC]'> <img className=' hover:text-[#CCCCCC] mr-7' src={menu} alt="menu" /> Menu</a></li>
                                <li className='mb-9'> <a className=' hover:text-[#CCCCCC] flex items-start' href=""> <img className=' hover:text-[#CCCCCC] mr-7' src={tray} alt="tray" />My Tray</a></li>
                                <li className='mb-9 '> <a className='  text-[#CCCCCC] flex items-start' href=""><img className='mr-7 ' src={mealplan} alt="mealplan" />Meal Plans</a></li>
                            </ul>
                        </div>
                    </div>
                }


                {/* Desktop */}

                <div className="hidden lg:flex items-center ">
                    <ul className='hidden lg:flex'>
                        <li className={`${liStye} text-onion first-letter:underline`}> <a href="/" >Home</a></li>
                        <li className={liStye}> <a href="">Menu</a></li>
                        <li className={liStye}> <a href="">Meal Plans</a></li>
                    </ul>

                </div>
                <diV className='flex items-center'>

                </diV>

                <div className='hidden lg:flex items-center mr-48'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <button className='ml-16 mr-24'>Sign In</button>
                    <button className={buttonStyle}>Create Account</button>
                </div>


            </div>
            <div>


            </div>

        </div>
    )
}

export default Navbar
