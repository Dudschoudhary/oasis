import React from 'react'
import logoImage from '../../../src/assets/images/oasis.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
const Footer = () => {
  return (
    <>
      <div className='bg-[#d7b56d] w-full'>
        <div className='container m-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ps-10 sm:ps-0 sm:justify-around sm:items-start pt-16 pb-6 Roboto-Bold text-[#00434c]'>
          <ul>
            <img src={logoImage} alt="Oasis Logo" className='w-60' />
          </ul>
          <ul className='pt-7 sm:pt-0'>
            <li className='font-bold'>OFFICE & ADMISSION</li>
            <li className='py-3.5 pe-10'><hr className='text-white' /></li>
            <li className='flex'><FaPhoneAlt /><span className='Roboto-Light ps-2 pr-1'> 9929298644 </span> (Rupkishor Nehra)</li>
            <li className='flex'><FaPhoneAlt /><span className='Roboto-Light ps-2 pr-1'>8905516577 </span>(Jay Nehra)</li>
          </ul>
          <ul className='pt-7 lg:pt-0'>
            <li>VISITING HOURS</li>
            <li className='py-3.5 pe-10'><hr className='text-white' /></li>
            <li>Monday to Saturday - <span className='Roboto-Light'>09:00 - 18:00</span></li>
            <li>Sunday and Holidays - <span className='Roboto-Light'>10:00 - 15:00</span></li>
          </ul>
          <ul className='pt-7 xl:pt-0'>
            <li>CONTACT US</li>
            <li className='py-3.5 pe-10'><hr className='text-white' /></li>
            <li>Oasis Star Academy</li>
            <li className='flex justify-start items-center'><FaLocationDot /><span className='Roboto-Light ps-2 pr-1'>Bisarniya (Dhanau), Barmer, Rajasthan </span></li>
            <li className='Roboto-Light'>PIN Code - 344704</li>
            <li className='flex justify-start items-center'><MdEmail /><span className='Roboto-Light ps-2 pr-1'>oasisstar@yahoo.edu </span></li>
          </ul>
        </div>
        <div className='bg-[#00434c] h-[60px] w-full grid grid-cols-1 sm:grid-cols-2 justify-around items-center text-white text-[14px]'>
          <div className='ms-10 sm:ms-5'>Copyright © 2025 Oasis Start Academy</div>
          <div className='ms-10 sm:ms-5'>Website By: DudsTech</div>
        </div>
      </div>
    </>
  )
}

export default Footer