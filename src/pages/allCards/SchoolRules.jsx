import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import schoolRules from '../../assets/images/school-rules_1.png'

const SchoolRules = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="School Rules" />
                </div>
                <div className='flex container m-auto justify-center items-center p-4  md:items-start flex-col md:flex-row mb-[70px] md:mt-[70px]'>
                    <div className='md:w-[30%] flex justify-center items-center'>
                        <img src={schoolRules} alt="Schhol Rules"  className='w-[200px] md:w-full'/>
                    </div>
                    <div className='md:w-[65%] px-2 lg:px-10 '>
                        <ol className='list-decimal px-2 md:px-10'>
                            <li className='ps-2'>We have strict discipline within the school premises.</li>
                            <li className='ps-2'>We don’t allow any student to insult the teachers. Strict action will be taken.</li>
                            <li className='ps-2'>Visitors will not be permitted to meet the students without permission from their parents/guardians.</li>
                            <li className='ps-2'>We don’t allow the students to bring:
                                <ol className='list-decimal px-10'>
                                    <li>Knife or any other sharp or harmful objects.</li>
                                    <li>Mobile phones and other electronic gadgets.</li>
                                    <li>Breachers of above mentioned rules will be strictly punished. We will immediately expel the student.</li>
                                </ol>
                            </li>
                            <li className='ps-2'>Students are bound to give the school details like – results, time table, home work etc. to their parents.</li>
                            <li className='ps-2'>Students have to attend the school regularly.</li>
                            <li className='ps-2'>No discrimination on the basis of caste, race, religion or any other basis will be tolerated. Strict action will be taken.</li>
                            <li className='ps-2'>Students have to maintain the school property. Breaking things around will be punished.</li>
                            <li className='ps-2'>Students have to take care of school cleanliness and hygiene.</li>
                            <li className='ps-2'>Students without proper uniform will not be allowed to enter into the school premises.</li>
                        </ol>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SchoolRules