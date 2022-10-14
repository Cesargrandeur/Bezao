import React from 'react'
import logo from '../asset/logo.svg'
import facebook from "../asset/facebook.svg"
import instagram from "../asset/instagram.svg"
import twitter from "../asset/twitter.svg"

const About = () => {
  const psytle = "p-2 hover:text-[#1A1A1A] text-[#666666]"
  return (
    <div className=' bg-[#FAFAFA]'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='ml-8 mt-10'>
          <a href="/" className='flex items-center ' >
            <img className='lg:ml-40 lg:w-20' src={logo} alt="logo" />
            <div className='font-extrabold w-16  ml-3 align-middle lg:text-[30px]'>Meals</div>
          </a>


        </div>
        <div className='flex ml-8 justify-between  mr-44 mt-8'>
          <div>
            <a href=''><p className={`${psytle} text-[#1A1A1A]`}>Company</p></a>
            <a href=''> <p className={psytle}>Blog</p></a>
            <a href=''> <p className={psytle}>About us</p></a>
            <a href=''><p className={psytle}>Contact us</p></a>
          </div>
          <div className=''>
            <a href=''> <p className={`${psytle} text-[#1A1A1A]`}>Services</p></a>
            <a href=''><p className={psytle}>FAQs</p></a>
            <a href=''><p className={psytle}>Our Menu</p></a>
          </div>
        </div>


      </div>
      <div className=' lg:hidden grid gap-4  grid-cols-3  mb-4 ml-8 mt-2 mr-80'>
        <img src={facebook} alt='facebook' />
        <img src={instagram} alt='instagram' />
        <img src={twitter} alt='twitter' />
      </div>
      <div className="lg:ml-14 lg:mr-12 border-t border-gray-400 mt-4 border-[#B3B3B3]"></div>

      <div className='grid lg:grid-cols-2  mt-4 lg:ml-20 lg:mr-12'>

      <div className=' ml-16 mb-4 text-[#969595] text-xs '>© 2022 Meals. All rights reserved.</div>
        <div className='hidden text-[#969595] text-xs '>© 2022 Meals. All rights reserved.</div>
        <div className='hidden  lg:grid gap-4 grid-cols-3 ml-96 mb-4'>
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={twitter} alt='twitter' />
        </div>
      </div>
    </div>

  )
}

export default About
