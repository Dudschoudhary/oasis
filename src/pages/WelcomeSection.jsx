import React from 'react'

import schoolStudents from '../assets/images/home3.jpg'
import CommonButton from '../components/common/CommonButton'

const WelcomeSection = () => {
  return (
    <>
      <div data-aos="fade-up" className='container m-auto Roboto-Bold mb-9 flex justify-center items-center md:items-start flex-col md:flex-row'>
         <div className='w-full md:w-[50%] p-4'>
            <img src={schoolStudents} alt="school students Image " className='rounded' data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"/>
         </div>
         <div className='w-full md:w-[50%] p-4'data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" >
            <CommonButton title="Welcome to Oasis Star Academy" className=" font-bold text-xl md:text-3xl" justify="center"/>
            <CommonButton title="DISCIPLINE-CHARACTER-PROGRESS" className=" font-medium md:text-xl" justify="center" />
             <p className='text-md Roboto-Light'>
             We at Oasis, endeavor to send our students back to their homes everyday, better than they were yesterday. Improvement is our promise to ourselves. We are here not to market our infrastructure, facilities menu and fake promises, but to build your children strong by inculcating in them discipline, character,  education, morals, purpose, goal and thus pushing them towards progress EVERYDAY.
             At Oasis,  the student sitting at the last bench is equal to the one at the first bench. Our students learn to serve the society, build up their own worth and ultimately to serve the nation.  A Oasis is distinct because he knows he needs to grow everyday so that he can support the weak, improve the strong and increase his quality rather than quantity.
             </p>
         </div>
      </div>
    </>
  )
}

export default WelcomeSection