import React from 'react'
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
import CommonButton from '../../components/common/CommonButton'
import aboutSchoolImage from '../../assets/images/cultural.jpeg'

const AboutSchool = () => {
  return (
    <>
    <div>
      <div>
        <CommonCardHeadingSection title="Our School" />
      </div>
      <div className='container m-auto p-4'>
        <CommonButton title="OASIS STAR ACADEMY SEC. SCHOOL, BISARNIYA (DHANOU)" className="text-xl md:text-3xl mb-10 Roboto-Bold" justify="start" />
      </div >
      <div className='flex container m-auto p-4 gap-x-10 mb-9 flex-col md:flex-row'>
        <div className='md:w-[40%]'>
          <p className='text-lg tracking-normal'> <span className='font-bold'>स्थापना –</span> युग शक्ति, माँ गायत्री की अनुकम्पा एवं गायत्री परिवार के संस्थापक, युगऋषि, वेद मूर्ति, तपोनिष्ठ पं. श्रीराम शर्मा आचार्य के सूक्ष्म संरक्षण में 24 मई, 1993 को इस विद्यालय का उद्घाटन गायत्री यज्ञ एवं तदुपरान्त श्री फतेहकृष्ण कल्ला, ADM, बाड़मेर के मुख्य आतिथ्य, श्री चूनाराम विश्नोई, तहसीलदार, बाड़मेर की अध्यक्षता एवं श्री तन सिंह चौहान, के विशिष्ट आतिथ्य में सम्पन्न हुआ। <br/> <br/>

            <span className='font-bold'>यात्रा वृतांत – </span>मयूर नोबल्स एकेडमी दैविक शक्तियों की अनुकम्पा, प्रधानाचार्य श्री मिश्रीदान चारण की समर्पित टीम एवं प्रतिभाशाली विद्यार्थियों की ज्ञान पिपासा प्रवृति के कारण दिन-दूनी रात-चौगुनी प्रगति करता हुआ निरन्तर अपने ध्येय की ओर अग्रसर है।</p>
        </div>
        <div className='md:w-[55%] mt-10 md:mt-0'>
            <img src={aboutSchoolImage} alt="About School Image" className='w-[500px]' />
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutSchool