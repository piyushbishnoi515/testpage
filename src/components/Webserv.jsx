import React from 'react'
import CommonHeading from './common/CommonHeading'
import graph from '../assets/image/svg/graph.svg'
import copy from '../assets/image/svg/copy.svg'
import error from '../assets/image/svg/error.svg'

const Webserv = () => {
    return (
        <div className='pt-[65px]'>
            <div className='container'>
                <h2 className=' font-Messiri font-normal text-[12px] justify-center bg-[#EEFAFF] text-[#1B3353] py-2 px-[15px]  w-fit  items-center mx-auto  border-sky-blue border rounded-lg'>Performance Marketing Agency</h2>
                <CommonHeading heading='Why Webserv?' className=' max-w-[261px] pt-[10px] mx-auto' />
                <p className=' font-Lato font-normal text-base text-center max-w-[800px] mx-auto pt-[16px] text-black opacity-70'>We use a data driven approach to deliver qualified leads at a fraction of the price of the competition. Our approach relies on first and third party data to target the right people at the right time.</p>
                <div className="flex flex-row flex-wrap -mx-3 mt-[40px] mb-[65px] ">
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[10px] justify-center items-center mx-auto">
                        <div className=' p-[20px_20px_49px_20px] shadow-3xl hover:bg-deep-blue bg-white  rounded-xl border border-[#D1D5DC] duration-100 group'>
                            <img src={graph} alt="" />
                            <h2 className=' font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] group-hover:text-white'>Advanced Analytics</h2>
                            <p className=' font-Lato font-normal text-base max-w-[322px] pt-[16px] text-black  opacity-70 group-hover:text-white hover:opacity-70'>We utilize a comprehensive suite of cutting-edge analytics tools to optimize your campaigns and drive continuous improvement.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[10px] justify-center items-center mx-auto">
                        <div className=' p-[20px_20px_20px_20px] shadow-3xl hover:bg-deep-blue bg-white  rounded-xl border border-[#D1D5DC] duration-100 group'>
                            <img src={copy} alt="" />
                            <h2 className=' font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] group-hover:text-white max-w-[311px]'>Tailored Ad Copy and Landing Pages</h2>
                            <p className=' font-Lato font-normal text-base max-w-[324px] pt-[16px] text-black  opacity-70 group-hover:text-white hover:opacity-70 '>Our services include the development of high-quality Ad Creatives, Ad Copy, and Landing Pages, designed to maximize your campaign's performance.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[10px] justify-center items-center mx-auto">
                        <div className=' p-[20px_20px_49px_20px] shadow-3xl hover:bg-deep-blue bg-white  rounded-xl border border-[#D1D5DC] duration-100 group'>
                            <img src={error} alt="" />
                            <h2 className=' font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] group-hover:text-white'>In-Depth KPI Reporting</h2>
                            <p className=' font-Lato font-normal text-base max-w-[324px] pt-[16px] text-black  opacity-70 group-hover:text-white hover:opacity-70'>At Webserv, transparency is fundamental to our approach, and we are committed to keeping you well-informed about your campaign's performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webserv