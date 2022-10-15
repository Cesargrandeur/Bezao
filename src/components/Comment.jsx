import React from 'react'
import samson from "../asset/samson.png"
import quote from "../asset/quote.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const commentSlide = () =>{
 return(
    <SwiperSlide className='grid lg:grid-cols-3 gap-4 bg-[#DA374326]'>
        <div className='lg:ml-20 lg:mt-24 mt-8'>
            <p className='ml-6 text-[#363A40] font-bold text-2xl lg:text-4xl lg:w-[286px]'>What our customers say about us</p>
            <p className='ml-6 text-[#67758D] text-xs lg:text-sm lg:w-[286px] mt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        </div>

        <div className='mx-6  lg:mr-72 lg:col-span-2 shadow-md bg-white rounded-md mt-16 mb-40 flex justify-center p-6 items-center'>
        
            <div className=' w-full lg:px-8 lg:my-8 lg:ml-8'>
                <img alt="samson" src={samson}/>
                <p className='mt-2 font-bold text-[#363A40] text-center'>John <br></br> Samson</p>
                <p className='text-[#67758D] text-[10px] text-center'>ENUGU NIGERIA</p>
                </div>
            <div className='text-[#67758D] text-sm px-8 '>
            
                <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
            </div>
            <img className='w-[14px] lg:w-[16px] mb-40 mr-4' alt='quote' src={quote}/>
        </div>
    </SwiperSlide>
 )
}

const Comment = () => {
  return (
    <Swiper
      spaceBetween={50}
      modules={[ Pagination, Autoplay ]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay = {{delay: 2000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   {commentSlide()}
   {commentSlide()}
   {commentSlide()}
   {commentSlide()}
   {commentSlide()}
    </Swiper>
    
  )
}

export default Comment
