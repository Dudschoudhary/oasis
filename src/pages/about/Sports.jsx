import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import sportImage1 from '../../../src/assets/images/cultural.jpeg'
const Sports = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="Sports / Activities" />
            </div>
            <div className='container m-auto p-4 my-[70px]'>
                <div className='px-4 '>
                    <ul>
                        <li className='list-disc text-lg'>Baseball (Our team went to Nation Level Twice).</li>
                        <li className='list-disc text-lg'>Dance and Music.</li>
                        <li className='list-disc text-lg'>We arrange many creative functions through the year for the children.</li>
                    </ul>
                </div>
                <div className='gap-5 w-full py-10 flex flex-wrap justify-center'>
                    <img
                        src={sportImage1}
                        alt="events Image"
                        className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                        data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"
                    />
                    <img
                        src={sportImage1}
                        alt="events Image"
                        className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                        data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"
                    />
                    <img
                        src={sportImage1}
                        alt="events Image"
                        className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                        data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"
                    />
                    <img
                        src={sportImage1}
                        alt="events Image"
                        className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                        data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"
                    />
                </div>
            </div>
        </>
    )
}

export default Sports