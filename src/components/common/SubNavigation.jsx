import React from 'react'
import { FaFacebookF, FaPhone, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdWatchLater } from 'react-icons/md'

const SubNavigation = () => {
  return (
    <div className='bg-[#212529] p-4'>
      <div className=' flex justify-around items-center text-[#fff]'>
        
        {/* Left side contact information */}
        <div className='flex justify-center flex-wrap gap-x-10 '>
          {/* Phone number - visible on lg and above screens */}
          <div className='flex justify-center items-center gap-x-2'>
            <FaPhone />
            <p>9929298644</p>
          </div>
          
          {/* Email */}
          <div className='hidden lg:flex justify-center items-center gap-x-1'>
            <MdEmail />
            <p>oasisstar@gmail.edu</p>
          </div>
          
          {/* Working hours */}
          <div className='flex md:hidden lg:flex justify-center items-center gap-x-2'>
            <MdWatchLater />
            <p>Mon-Sat : 09:00 - 18:00</p>
          </div>
        </div>

        {/* Social media icons */}
        <div className='hidden md:flex justify-center items-center gap-x-2 '>
          <FaFacebookF className='bg-[#ffff] text-[#212925] p-1 text-[22px] rounded'/>
          <FaYoutube className='bg-[#ffff] text-[#212925] p-1 text-[22px] rounded'/>
        </div>
      </div>
    </div>
  )
}

export default SubNavigation
