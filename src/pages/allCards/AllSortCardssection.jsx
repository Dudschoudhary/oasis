import React, { useEffect } from 'react'
import admissions from '../../assets/images/Admissions.jpg'
import feeStructure from '../../assets/images/Fee-Structure.jpg'
import results from '../../assets/images/results.jpg'
import schoolRules from '../../assets/images/school-rules.jpg'
import events from '../../assets/images/Events.jpg'
import newsAndMedia from '../../assets/images/New-Media.jpg'
import achievements from '../../assets/images/Achievements.jpg'
import alumni from '../../assets/images/Alumni.jpg'
import { Link } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllSortCardssection = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className='bg-[#f7f7f7] p-8 mb-9'>
                <div className='container m-auto p-4 flex justify-center items-center lg:justify-start sm:items-start  flex-wrap mb-9 gap-4'>
                    <Link to={"admissions"} data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={admissions} alt="" />
                    </Link>

                    <Link to={"fee-structure"} data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
                        <img src={feeStructure} alt="Fee Structure Image" />
                    </Link>
                    <Link to={"results"} data-aos="zoom-out-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={results} alt="Result Image" />
                    </Link>
                    <Link to={"school-rules"} data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={schoolRules} alt="School Rules Image" />
                    </Link>
                    <Link to={"events"}  data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={events} alt="Enents Image" />
                    </Link>
                    <Link to={"news-media"} data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={newsAndMedia} alt="News & Media Image"/>
                    </Link>
                    <Link to='achievements'data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={achievements} alt="Achievements Image" />
                    </Link>
                    <Link to='alumni' data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={alumni} alt="Alumni Image" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AllSortCardssection