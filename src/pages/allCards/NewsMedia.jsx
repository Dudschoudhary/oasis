import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import newsAndMedia1 from '../../assets/images/cultural.jpeg'
const NewsMedia = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="News & Media" />
                </div>
                <div className='w-full'>
                    <div className='gap-5 w-full py-10 flex flex-wrap justify-center'>
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                        <img src={newsAndMedia1} alt="events Image" className='rounded' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsMedia