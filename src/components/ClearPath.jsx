import React from 'react'
import CommonHeading from './common/CommonHeading'
import massage2 from '../assets/image/svg/massage2.svg'
import box from '../assets/image/svg/box.svg'
import person from '../assets/image/svg/people.svg'



const Webserv = () => {
    return (
        <div className='pt-[65px]'>
            <div className='container'>
                <CommonHeading heading='ClearPath Treatment Solutions' className=' max-w-[541px] pt-[10px] mx-auto' />
                <p className=' font-Lato font-normal text-base text-center max-w-[800px] mx-auto pt-[16px] text-black opacity-70'>Elevated performance call center focussing on quality of service and transparency.</p>
                <div className="flex flex-row flex-wrap -mx-3 mt-[40px] mb-[65px] ">
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[60px] justify-center items-center mx-auto">
                        <div className=' p-[32px_32px_79px_32px] shadow-3xl bg-white rounded-xl border border-[#D1D5DC] duration-100 group hover:bg-deep-blue '>
                            <div className=' w-[99px] h-[96px] bg-white mx-auto -mt-[43px] grid place-items-center rounded-[6px] group-hover:bg-white shadow-3xl'>
                                <img
                                    src={massage2}
                                    alt=""
                                    className='group-hover:fill-white  duration-300 ' // This line adds the hover effect
                                />
                            </div>
                            <h2 className='font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] text-center group-hover:text-white'>
                                Purpose and Mission
                            </h2>
                            <p className='font-Lato font-normal text-base max-w-[300px] pt-[16px] text-black opacity-70 text-center group-hover:text-white'>
                                Our services are designed to streamline operations and increase admits without compromising on quality or patient care
                            </p>
                        </div>

                    </div>
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[60px] justify-center items-center mx-auto">
                        <div className=' p-[32px_32px_26px_32px] shadow-3xl bg-white rounded-xl border border-[#D1D5DC] duration-100 group hover:bg-deep-blue '>
                            <div className=' w-[99px] h-[96px] bg-white mx-auto -mt-[43px] grid place-items-center rounded-[6px] group-hover:bg-white shadow-3xl'>
                                <img
                                    src={box}
                                    alt=""
                                    className='group-hover:fill-white  duration-300 ' // This line adds the hover effect
                                />
                            </div>
                            <h2 className='font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] text-center group-hover:text-white'>
                                Client-Owned CRM and Dashboard
                            </h2>
                            <p className='font-Lato font-normal text-base max-w-[300px] pt-[16px] text-black opacity-70 text-center group-hover:text-white'>
                                We provide each center with a fully client-owned CRM and dashboard, offering full transparency and control over the entire process.
                            </p>
                        </div>

                    </div>
                    <div className="lg:w-1/3 md:w-1/2 sm:w-full px-3 sm-mt-0 mt-[60px] justify-center items-center mx-auto">
                        <div className=' p-[32px_32px_55px_32px] shadow-3xl bg-white rounded-xl border border-[#D1D5DC] duration-100 group hover:bg-deep-blue '>
                            <div className=' w-[99px] h-[96px] bg-white mx-auto -mt-[43px] grid place-items-center rounded-[6px] group-hover:bg-white shadow-3xl'>
                                <img
                                    src={person}
                                    alt=""
                                    className='group-hover:fill-white  duration-300 '
                                />
                            </div>
                            <h2 className='font-Messiri font-semibold text-2xl text-deep-blue pt-[30px] text-center group-hover:text-white'>
                                Specialized Team
                            </h2>
                            <p className='font-Lato font-normal text-base max-w-[300px] pt-[16px] text-black opacity-70 text-center group-hover:text-white'>
                                Our team specializes in out of network leads, ensuring expert handling of every patient inquiry from initial contact to admit.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webserv