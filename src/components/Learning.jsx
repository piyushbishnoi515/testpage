import React from 'react'
import CommonHeading from './common/CommonHeading'
import young from '../assets/image/svg/young.svg'

const Learning = () => {
    return (
        <div>
            <div className="container">
                <div className=' max-w-[961px] min-h-[294px] shadow-3xl rounded-[22px]'>
                    <CommonHeading heading='Interested In learning More?' className=' pt-[45px]' />
                    <p className=' font-normal font-Lato text-base text-center text-black opacity-70 max-w-[621px] mx-auto'>Contact us today to explore how our dual service solution can help your treatment center achieve its growth objectives.</p>
                    <div className=' '>
                        <div className=' flex mx-auto gap-3 justify-center items-center mt-[40px]'>
                            <div className=' flex items-center gap-3  max-w-[223px] border-[0.5px] border-[#A3ADBA]  rounded-xl p-[10px]'>
                                <img src={young} alt="" />
                                <div >
                                    <p className='text-black  font-Lato font-normal text-base'>Preston Powell</p>
                                    <p className='text-black  font-Lato font-normal text-base opacity-70'>preston@webserv.io</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-3  max-w-[223px] border-[0.5px] border-[#A3ADBA]  rounded-xl p-[10px]'>
                                <img src={young} alt="" />
                                <div >
                                    <p className='text-black  font-Lato font-normal text-base'>Preston Powell</p>
                                    <p className='text-black  font-Lato font-normal text-base opacity-70'>preston@webserv.io</p>
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