import React from 'react'
import bgImg from '../asset/riceHome.svg'
import bgImgb from '../asset/comment.svg'


const MainTop = () => {
    const buttonStyle = " text-white border-0 rounded-full bg-onion  px-[135px] py-3"
    return (
        
            <div className=' max-w-[1240px] m-auto lg:mt-16 text-white bg-onion lg:bg-white lg:text-[#000000]'>
                <div className=' grid lg:grid-cols-2  w-full px-2 py-12 lg:py-0 lg:ml-14'>
                    <div className='mt-[90px] '>
                        <p className=' text-3xl leading-[127%] font-bold lg:text-[58px]'>Delicious meals at
                        your convenience</p>
                        <p className='text-xs font-normal w-[309px] p-2 leading-[145%] lg:text-lg lg:w-[400px] lg:mt-6'>Order your meals from us and we will have it delivered at your doorstep.
                        </p>
                        <p className='lg:hidden text-sm font-normal w-[309px] leading-6 p-2 mt-4'>Instant Order </p>
                        <div className='hidden lg:block mt-4'>
                        <button className={buttonStyle}> Get Started</button>
                        
                        </div>
                        </div>

                    {/* search bar */}

                    <form action="" class="w-full max-w-[342px] lg:hidden z-[0]">
                        <div className="relative flex items-center text-gray-400  ">
                            <svg className="h-5 w-5 fill-black absolute ml-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                height="30" viewBox="0 0 30 30">
                                <path
                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                </path>
                            </svg>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search for meals"
                                autocomplete="off"
                                className="w-full  pr-3 pl-10 py-2  placeholder-gray-500 text-[#B5B5BD] rounded-md  outline-none "
                            />
                        </div>
                    </form>
                    {/* Image */}
                    <div className='flex  justify-end'>
                        <img className='lg:w-[600px]' src={bgImg } alt="rice" />
                        <div className=' hidden lg:block mt-96 '><img className = "lg:w-[150px]" alt='comment' src={bgImgb}/></div>
                    </div>
                    
                </div>


            </div>



       
    )
}

export default MainTop