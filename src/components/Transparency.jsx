import React from 'react'
import CommonHeading from './common/CommonHeading'
import graph from '../assets/image/webp/graph-image.png'

const Transparency = () => {
    return (
        <div className=' pt-[65px] pb-[79px]'>
            <div className="container">
                <div className=' flex items-center justify-between lg:flex-row flex-col '>
                    <div className=' flex flex-col max-w-[558px]'>
                        <h2 className=' font-Messiri font-normal text-[12px] justify-center bg-[#EEFAFF] text-[#1B3353] py-2 px-[15px] max-sm:auto  w-fit  items-center   border-sky-blue border rounded-lg max-sm:mx-auto'>Why ClearPath?</h2>
                        <CommonHeading heading='Transparency & Accountability' className=' max-sm:mx-auto max-w-[558px] pt-[10px] justify-start' />
                        <p className=' font-Lato font-normal text-base justify-start max-w-[800px]  pt-[16px] text-black opacity-70 max-sm:text-center'>Gain real-time access to all operational data through our dashboard, which allows for immediate insights and strategic decision making. We ensure full transparency in our processes and provide concrete evidence of our effectiveness and integrity.</p>
                    </div>
                    <div className=' lg:mt-[0px] mt-[20px]'>
                        <img src={graph} alt="" className=' lg:max-w-[524px]  lg:min-h-[351px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transparency