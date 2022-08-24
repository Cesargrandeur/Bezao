import React from 'react'
import vegi from "../asset/vegi.png"
import vegiOn from "../asset/vegi_onion.png"
import vegiTo from "../asset/vegie_tomate.png"

const Blog = () => {
  return (
    <div className='mb-20'>
      <div >
        <p className='text-center text-[37px] p-2 font-bold mt-24'>Blog Our Latest News</p>
        <p className='text-center mx-auto text-[#0A244E] p-4 w-[480px]'>Have you ever browsed food blogs like mine and wondered how to start a food blog of your very own? </p>
      </div>
      <div className='grid  lg:grid-cols-3  lg:ml-20 lg:mr-12 mt-8'>
      <div className=' flex flex-col lg:w-[362px] lg:h-[450px] shadow-md rounded-md'>
          <img src={vegi} alt="product" />
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-sm mb-2  text-[#999999] '><span className='mr-2 text-onion'>Design </span> 01 October 2019</p>
          <p className='text-l lg:mb-4 font-bold text-[#4D4D4D]'>Better Than Takeout Kung Pao Chicken</p>
          <p className='text-[#999999] text-sm'>This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe </p>
          <button className='text-onion lg:my-4 text-sm font-bold'> Read More</button>
          </div>
        </div>

        <div className=' flex flex-col lg:w-[362px] lg:h-[450px] shadow-md rounded-md'>
          <img src={vegiOn} alt="product"/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-sm mb-2  text-[#999999] '><span className='mr-2 text-onion'>Design </span> 01 October 2019</p>
          <p className='text-l lg:mb-4 font-bold text-[#4D4D4D]'>The Best Sesame Soy Broccoli Salad</p>
          <p className='text-[#999999] text-sm'>Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties.  </p>
          <button className='text-onion lg:my-4 text-sm font-bold'> Read More</button>
          </div>
        </div>

        <div className=' flex flex-col lg:w-[362px] lg:h-[450px] shadow-md rounded-md'>
          <img src={vegiTo} alt="product"/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-sm mb-2  text-[#999999] '><span className='mr-2 text-onion'>Design </span> 01 October 2019</p>
          <p className='text-l lg:mb-4 font-bold text-[#4D4D4D]'>Better Than Takeout Kung Pao Chicken</p>
          <p className='text-[#999999] text-sm'>This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It’s definitely</p>
          <button className='text-onion lg:my-4 text-sm font-bold'> Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
