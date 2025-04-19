import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import CommonButton from '../../components/common/CommonButton'
import eventsImage from '../../assets/images/cultural.jpeg'

const Events = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="Events" />
                </div>
                <div className='container m-auto px-4'>
                    <CommonButton title=" ANNUAL FUNCTION (2025)" className="text-xl md:text-2xl capitalize Roboto-Bold px-4" />
                    <div className='px-4'>
                        <ul className='gap-y-2'>
                            <li className='list-disc'> Chif Guest - Dr. Ruma Deve (indian traditional handicraft fashion designer and social worker from Barmer, Rajasthan) </li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div className='gap-5 w-full py-10 flex flex-wrap justify-center'>
                            <img
                                src={eventsImage}
                                alt="events Image"
                                className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                            />
                            <img
                                src={eventsImage}
                                alt="events Image"
                                className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                            />
                            <img
                                src={eventsImage}
                                alt="events Image"
                                className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                            />
                            <img
                                src={eventsImage}
                                alt="events Image"
                                className='rounded transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events
