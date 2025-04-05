import React from 'react'
import admissions from '../../assets/images/Admissions.jpg'
import feeStructure from '../../assets/images/Fee-Structure.jpg'
import results from '../../assets/images/results.jpg'
import schoolRules from '../../assets/images/school-rules.jpg'
import events from '../../assets/images/Events.jpg'
import newsAndMedia from '../../assets/images/New-Media.jpg'
import achievements from '../../assets/images/Achievements.jpg'
import alumni from '../../assets/images/Alumni.jpg'
import { Link } from 'react-router'

const AllSortCardssection = () => {
    return (
        <>
            <div className='bg-[#f7f7f7] p-8 mb-9'>
                <div className='container m-auto p-4 flex justify-center items-center lg:justify-start sm:items-start  flex-wrap mb-9 gap-4'>
                    <Link to={"admissions"}>
                        <img src={admissions} alt="" />
                    </Link>

                    <Link to={"fee-structure"}>
                        <img src={feeStructure} alt="" />
                    </Link>
                    <Link to={"result"}>
                        <img src={results} alt="" />
                    </Link>
                    <Link to={"school-rules"}>
                        <img src={schoolRules} alt="" />
                    </Link>
                    <Link to={"events"}>
                        <img src={events} alt="" />
                    </Link>
                    <Link to={"news-media"}>
                        <img src={newsAndMedia} alt="" />
                    </Link>
                    <Link to='achievements'>
                        <img src={achievements} alt="" />
                    </Link>
                    <Link>
                        <img src={alumni} alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AllSortCardssection