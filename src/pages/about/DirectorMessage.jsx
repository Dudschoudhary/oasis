import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import CommonButton from '../../components/common/CommonButton'
import DirectorImage from '../../assets/images/cultural.jpeg'

const DirectorMessage = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="Director’s Message" />
                </div>
                <div className='container m-auto p-4'>
                    <CommonButton title="From the manager’s pen" className="text-xl md:text-2xl mb-10 Roboto-Bold" justify="start" />
                </div >
                <div className='flex container m-auto p-4 gap-x-10 mb-9 flex-col md:flex-row'>
                    <div className='md:w-[40%]'>
                        <p>Yuga Shakti Maa Gayatri’s compassion during the study of her own excellent academic level from primary level to college education awakened a resolve to use it in the advancement of the world of education. Under the subtle patronage of Yug Rishi Gurudev Pt. Shriram Sharma Acharya, I got an opportunity to give concrete shape to the long-standing vision on the mental plane. On May 24, 1993, “Mayur Nobles Academy” was established as an educational institution dedicated to the development of the life of the students with the aim of all-round development of their life and the advanced form of education.

                            At the time of the inauguration of Mayur Nobles Academy, an executive committee was formed under the chairmanship of Shri Tan Singh Chouhan, a well-known social worker and industrialist of Barmer district. It will be requested to all the parents of Barmer city and district that they should lead their youngsters towards building a better future by getting them admitted in this authentic and always moving educational institution “Mayur Nobles Academy” towards their noble goal.<br /> <br />

                            On the basis of hard work and true spiritual practice of the management of the school and all the dedicated teachers, I would like to say to all the parents and friends that on the trust of you people, this school will come up to 100%.<br/><br/>

                            <p>
                                Come, as true seekers, do sadhna together.<br/>
                                Be free and pray together from the troubles of the era.<br/>
                                Let’s step up the steps, with the rhythm of the end.<br/>
                                Suffer every injury that comes, by the shield of sadhana.
                            </p>
                        </p>
                    </div>
                    <div className='md:w-[55%] mt-10 md:mt-0'>
                        <img src={DirectorImage} alt="Director image" className='w-[500px]' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default DirectorMessage