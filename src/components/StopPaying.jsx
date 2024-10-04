import React from 'react'
import CommonHeading from './common/CommonHeading'
import hero from '../../src/assets/image/webp/hero-img.png'
import icon1 from '../assets/image/svg/icon1.svg'
import icon2 from '../assets/image/svg/icon2.svg'

const StopPaying = () => {
  return (
    <div className=' mb-[65px]'>
      <div className=' container'>
        <CommonHeading heading='Stop Paying Top Dollar For Poor Leads' className='mt-[97px]' />
        <p className=' font-Lato font-normal text-base text-center text-black opacity-70 max-w-[836px] pt-[16px] mx-auto'>Leverage seasoned industry marketers to position your center as the go-to for treatment seekers and seamlessly transition them to admissions experts for maximum facility growth.</p>
        <div className=' flex gap-[110px] items-center w-full max-w-[1016px] mx-auto pt-[40px] lg:flex-row flex-col'>
          <div className=' max-w-[348px]  w-full'>
            <img src={hero} alt="" className=' w-full' />
          </div>
          <div className=' flex-col '>
            <div className='shadow-3xl max-w-[558px] bg-white p-5 w-full'>
              <div className=' gap-[10px] flex items-center'>
                <img src={icon1} alt="" />
                <CommonHeading heading='Pay-Per-Click Advertising' className=' !font-semibold text-2xl' />
              </div>
              <p className=' max-w-[478px] font-Lato font-normal text-base pt-4 text-black opacity-70 pl-[45px]'>Their targeted ad campaigns, precise keyword selection, and conversion rate optimization ensures that your center captures high-intent leads.</p>
            </div>
            <div className='shadow-3xl max-w-[558px] bg-white p-5 mt-5 w-full'>
              <div className=' gap-[10px] flex items-center'>
                <img src={icon2} alt="" />
                <CommonHeading heading='Outsourced Admissions Team' className=' !font-semibold text-2xl' />
              </div>
              <p className=' max-w-[473px] font-Lato font-normal text-base pt-4 text-black opacity-70 pl-[45px]'>Their targeted ad campaigns, precise keyword selection, and conversion rate optimization ensures that your center captures high-intent leads.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default StopPaying