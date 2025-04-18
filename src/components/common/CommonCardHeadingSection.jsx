import React from 'react'
import { Link } from 'react-router'

const CommonCardHeadingSection = ({ title }) => {
    return (
        <>
            <div className='flex justify-center items-center pt-6 pb-5 px-12 bg-[#f7f7f7] gap-y-5 w-full'>
                <div className='py-10 gap-y-10'>
                    <div className='uppercase text-3xl font-bold text-[#9f004f] Roboto-bold'>{title}</div>
                    <div className='flex gap-x-1 text-center w-full  justify-center items-center mt-4 text-gray-400'>
                        <Link to={"/"}>Home</Link>
                        <p> / {title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonCardHeadingSection