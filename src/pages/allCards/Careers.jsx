import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import CommonButton from '../../components/common/CommonButton'

const Careers = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="Careers" />
            </div>
            <div className='container m-auto p-4 py-[70px]'>
                <CommonButton title="Teachers Required for Now not Available" className="text-xl md:text-3xl capitalize Roboto-Bold" />
                <div>
                    <ul>
                        <li className='my-2'><span className='font-bold'>Contact: </span>9929298644</li>
                        <li>Send your Resume along to cv656@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Careers