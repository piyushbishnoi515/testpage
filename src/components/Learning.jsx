import React from 'react'
import CommonHeading from './common/CommonHeading'
import young from '../assets/image/svg/young.svg'
import old from '../assets/image/svg/old.svg'


const Learning = () => {
    return (
        <div className='relative z-10 '>
            <div className="container">
                <div className=' max-w-[961px] min-h-[294px] shadow-3xl rounded-[22px] mx-auto bg-white '>
                    <CommonHeading heading='Interested In learning More?' className=' pt-[45px]' />
                    <p className=' font-normal font-Lato text-base text-center text-black opacity-70 max-w-[621px] mx-auto'>Contact us today to explore how our dual service solution can help your treatment center achieve its growth objectives.</p>
                    <div className=' '>
                        <div className=' flex mx-auto gap-3 justify-center items-center mt-[40px] md:flex-row flex-col md:pb-0 pb-4'>
                            <div className=' flex items-center gap-3  max-w-[223px] border-[0.5px] border-[#A3ADBA]  rounded-xl p-[10px]'>
                                <img src={young} alt="" />
                                <div >
                                    <p className='text-black  font-Lato font-normal text-base'>Preston Powell</p>
                                    <p className='text-black  font-Lato font-normal text-base opacity-70'>preston@webserv.io</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-3  max-w-[223px] border-[0.5px] border-[#A3ADBA]  rounded-xl p-[10px]'>
                                <img src={old} alt="" />
                                <div >
                                    <p className='text-black  font-Lato font-normal text-base'>Kyle Ingram</p>
                                    <p className='text-black  font-Lato font-normal text-base opacity-70'>kyle@clearpath.com</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Learning