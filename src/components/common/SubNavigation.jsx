import React from 'react'
import { FaFacebookF, FaPhone, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdWatchLater } from 'react-icons/md'

const SubNavigation = () => {
  return (
    <div className='bg-[#d7b56d] p-1'>
      <div className=' flex justify-around items-center text-[#00434c]'>
        
        {/* Left side contact information */}
        <div className='flex justify-center flex-wrap gap-x-10 '>
          {/* Phone number - visible on lg and above screens */}
          <div className='flex justify-center items-center gap-x-2'>
            <FaPhone />
            <p>9587449072</p>
          </div>
          
          {/* Email */}
          <div className='hidden lg:flex justify-center items-center gap-x-1'>
            <MdEmail />
            <p>dudaram656@gmail.com</p>
          </div>
          
          {/* Working hours */}
          <div className='flex md:hidden lg:flex justify-center items-center gap-x-2'>
            <MdWatchLater />
            <p>Mon-Sat : 09:00 - 18:00</p>
          </div>
        </div>

        {/* Social media icons */}
        <div className='hidden md:flex justify-center items-center gap-x-1 '>
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default SubNavigation
