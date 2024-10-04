import React from 'react'
import mobile from '../src/assets/image/webp/mobile-img.png'

const MobileEfforts = () => {
    return (
        <div>
            <div className="container">
                <div className=' bg-pattern bg-center bg-no-repeat bg-cover bg-light-blue max-w-[1210px] rounded-[22px]'>
                    <div className='py-[39px] px-[35px]'>
                        <div className=' flex items-center gap-[45px]'>
                            <img src={mobile} alt="" />
                            <div>
                                <p className=' max-w-[633px] font-Messiri font-bold text-[40px] leading-[48px] text-white'>Webserv’s efforts have increased mobile conversion rates and reduced ad spending by 61% and 20%, respectively.</p>
                                <p className=' font-Lato font-normal text-base text-white  opacity-70 pt-[40px]'>Sergei Vidov</p>
                                <p className=' font-Lato font-normal text-base text-white  opacity-70 pt-[10px]'>CEO - Summit Estate Recovery Center</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileEfforts