import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import admition from '../../assets/images/admission.jpg'
import CommonButton from '../../components/common/CommonButton'

const Admission = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="Admission Procedure" />
            </div>

            <div className='py-[70px]'>
                <div className='flex justify-center items-center'>
                    <img src={admition} alt="Admission" />
                </div>
            </div>
            <div className='container m-auto p-4 '>
                <CommonButton title="minimus age" className="text-xl md:text-3xl capitalize Roboto-Bold" />
                <div className='px-4'>
                    <ul>
                        <li className='list-disc'>Minimum age (L.K.G.) – 3 to  4  years</li>
                    </ul>
                </div>
            </div>

            <div className='container m-auto px-4'>
                <CommonButton title="Admission Time" className="text-xl md:text-3xl capitalize Roboto-Bold" />
                <div className='px-4'>
                    <ul className='gap-y-2'>
                        <li className='list-disc'>L.K.G. to 10<sup className='mr-1'>th </sup> 1<sup className='mr-1'>st</sup> May of every year </li>
                    </ul>
                </div>
            </div>

            <div className='container m-auto p-4'>
                <CommonButton title="Documents required at the time of admission" className="text-xl md:text-3xl Roboto-Bold" justify="start" />
                <div className='px-4'>
                    <ul className='gap-y-2'>
                        <li className='list-disc'>L.K.G. – Passport size photo, Birth Certificate</li>
                        <li className='list-disc'>Other classes – Passport size photo, T.C., Mark sheet (Xerox)</li>
                    </ul>
                </div>
                <p className='mb-9 mt-2'>
                   <span className='font-bold'>Note:</span> After admission in the school the students/parents/guardians are liable to follow the school rules & regulations and any modifications thereof from time to time.
                </p>
            </div>

        </>
    )
}

export default Admission