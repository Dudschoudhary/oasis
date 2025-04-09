import React from 'react'
import CommonCardHeadingSection from '../components/common/CommonCardHeadingSection'
import CommonButton from '../components/common/CommonButton'

const Facilities = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="facilities" />
            </div>
            <div className='container m-auto p-4 my-[70px]'>
                <div className='px-4'>
                    <ul className='text-lg '>
                        <li className='list-disc'>Best Science Labs in Jodhpur Division.</li>
                        <li className='list-disc'>We have Smart Classes.</li>
                        <li className='list-disc'>We have purified water facility for the children.</li>
                        <li className='list-disc'>Counseling Room.</li>
                        <li className='list-disc'>Computer Lab.</li>
                        <li className='list-disc'>Security and Safety – CCTV Surveillance, Security guards.</li>
                        <li className='list-disc'>Best faculty in Jodhpur Division.</li>
                        <li className='list-disc'>Many hostels nearby.</li>
                        <li className='list-disc'>We notify the parents about the results and other information about the student via automatic SMS system.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Facilities