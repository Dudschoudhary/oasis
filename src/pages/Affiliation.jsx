import React from 'react'
import CommonCardHeadingSection from '../components/common/CommonCardHeadingSection'
import CommonButton from '../components/common/CommonButton'

const Affiliation = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="Affiliation" />
            </div>
            <div className='container m-auto p-4 my-[70px]'>
                <CommonButton title="RBSE (Board of Secondary Education, Rajasthan)" className="text-xl md:text-3xl capitalize Roboto-Bold" />
                <div className='px-4 '>
                    <ul>
                        <li className='list-disc mt-5 text-lg'>Hindi Medium : Class LKG to 10 <sup>th</sup></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Affiliation