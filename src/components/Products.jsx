import React from 'react'
import riceP from "../asset/ricep.svg"
import swallowd from "../asset/swallow_withDraw.png"
import fries from "../asset/fries_eggSauce.png"
import bgImgb from '../asset/comment.svg'
import swallowe from "../asset/swallow_withEgusi.png"
import beans from "../asset/Beans.png"
import friedrice from "../asset/Fried_rice.png"


const Products = () => {
  const buttonStyle = "text-white border-0 rounded-full bg-onion  px-4 py-3"
  return (
    <div name="w-full product" className='bg-[#FAFAFA]'>
      <div className=' hidden lg:block mt-96 '><img className = "lg:w-[150px]" alt='comment' src={bgImgb}/></div>
      <div className='px-2 py-4 text-onion font-bold text-sm lg:ml-20' >Menu</div>
      <div className='grid lg:grid-cols-2 items-center lg:mr-24 '>
        
        <p className='px-2 text-2xl font-bold lg:text-4xl lg:ml-20'>Current menu</p>
        <div className="lg:justify-self-end">
            <ul className='outline outline-1 outline-offset-2 flex justify-between px-1 w-[400px] rounded outline-[#B5B5BD]'>
                <li className='bg-onion px-2 rounded-md text-white'>All</li>
                <li>Rice</li>
                <li>Beans</li>
                <li>Fries</li>
                <li>Swallow</li>
                <li>Other</li>
            </ul>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3  lg:ml-20 lg:mr-12 mt-8'>

        <div className=' flex flex-col lg:w-[362px] lg:h-[450px] shadow-md mb-16 rounded-md'>
          <img src={riceP} alt="product"/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Jollof Rice and Chicken</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 1,500</p>
          </div>
          
        </div>
        <div className='  flex flex-col lg:w-[362px] shadow-md mb-16 rounded-md'>
          <img src={swallowd} alt="product" />
           <div className='lg:mr-[29px] lg:ml-[29px]'>
           <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Swallow with Draw Soup</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 1000</p>
           </div>
        </div>

        <div className='  flex flex-col lg:w-[362px]  shadow-md mb-16 rounded-md'>
        <img src={fries} alt="product"/>
        <div className='lg:mr-[29px] lg:ml-[29px]'>
        
          <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Fries with Egg sauce</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 1,500</p>
        </div>
         
          </div>

          <div className=' flex flex-col lg:w-[362px] lg:h-[450px] shadow-md rounded-md'>
          <img src={swallowe} alt="product"/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Jollof Rice and Chicken</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 1,500</p>
          </div>
        </div>

        <div className=' flex flex-col lg:w-[362px] lg:h-[450px]  shadow-md rounded-md'>
          <img src={beans} className=""/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Beans</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 700</p>
          </div>
        </div>

        <div className=' flex flex-col lg:w-[362px] lg:h-[450px]  shadow-md rounded-md'>
          <img src={friedrice} className=""/>
          <div className='lg:mr-[29px] lg:ml-[29px]'>
          <p className='text-xl font-bold lg:my-4  text-[#4D4D4D]'>Fried Rice</p>
          <p className='text-[#999999] text-sm'>Fried potato/yam chips with egg sauce or any topping of your choice</p>
          <p className='text-[#666666] lg:my-4 text-2xl'> ₦ 600</p>
          </div>
        </div>
      </div>

      

      

    
      
      <div className='lg:mt-[70px]  flex justify-center'><button className={`text-xs lg:mb-[166px] ${buttonStyle}`}> Full Menu</button></div>
    </div>
  )
}

export default Products
