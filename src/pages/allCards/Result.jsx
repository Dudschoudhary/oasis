import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import CommonButton from '../../components/common/CommonButton'

const Result = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="Result" />
                </div>
                <div className='flex container m-auto py-[40px]'>
                    <div className='container m-auto p-4 '>
                        <CommonButton title="Secondary (10th)" className="text-xl md:text-3xl capitalize Roboto-Bold px-4" />
                        <hr className='w-[100px] py-4 mt-5  font-bold  '/>
                        <CommonButton title="2023" className="text-xl md:text-3xl capitalize Roboto-Bold px-4" />
                        <div className='px-4'>
                            <ul>
                                <li className='list-disc'>Sawrup Sharma  ( 93.67% ) </li>
                                <li className='list-disc'>Ramchandra Jakhar  ( 91.00% ) </li>
                                <li className='list-disc'>Pawan Choudhary ( 88.83% ) </li>
                                <li className='list-disc'>Vimla Choudhary (c)  ( 85.33% ) </li>
                                <li className='list-disc'>ChandraPrakash Nehra  ( 83.30% ) </li>
                                <li className='list-disc'>Geeta Choudhary  ( 82.83% ) </li>
                                <li className='list-disc'>Harish Saran ( 82.83% ) </li> 
                                <li className='list-disc'>Kanwaraj virda ( 82.50% ) </li>
                                <li className='list-disc'>Ramesh Saran  ( 82.17% ) </li>
                                <li className='list-disc'>ChandraPrakash Nehra  ( 83.30% ) </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result