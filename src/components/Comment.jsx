import React from 'react'
import samson from "../asset/samson.png"
import quote from "../asset/quote.svg"

const Comment = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 bg-[#DA374326]'>
        <div className='lg:ml-20 mt-24'>
            <p className='text-[#363A40] font-bold text-4xl lg:w-[286px]'>What our customers say about us</p>
            <p className='text-[#67758D] text-sm lg:w-[286px] mt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        </div>
        <div className='  lg:mr-72 col-span-2 shadow-md bg-white rounded-md mt-16 mb-40 flex justify-center p-6 items-center'>
        
            <div className='  w-full	 px-8 my-8 ml-8'>
                <img className='' src={samson}/>
                <p className='mt-2 font-bold text-[#363A40] text-center'>John <br></br> Samson</p>
                <p className='text-[#67758D] text-[10px] text-center'>ENUGU NIGERIA</p>
                </div>
            <div className='text-[#67758D] text-sm px-8 '>
            
                <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
            </div>
            <img className=' w-[16px] mb-40 mr-4' src={quote}/>
        </div>
      
    </div>
  )
}

export default Comment
