// import React from 'react'

// const SliderBar = () => {
//   return (
//     <div>SliderBar</div>
//   )
// }

// export default SliderBar

import React from 'react';
import { Carousel } from 'antd';
import image_1 from "../assets/images/home1.webp"
import image_2 from "../assets/images/home2.jpg"
import image_3 from "../assets/images/home3.jpg"
import image_4 from "../assets/images/home4.webp"
import image_5 from "../assets/images/home5.jpeg"
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const SliderBar = () => (
    <>
        <Carousel arrows infinite={false} className='h-[80vh]'>
            <div>
                <img src={image_5} alt="image 1" className='w-full h-[700px] object-cover' />
            </div>
            <div>
                <img src={image_5} alt="image 2" className='w-full h-[700px] object-cover' />
            </div>
            <div>
                <img src={image_5} alt="image 3" className='w-full h-[700px] object-cover' />
            </div>
            <div>
                <img src={image_5} alt="image 4" className='w-full h-[700px] object-cover' />
            </div>
        </Carousel>

    </>
);
export default SliderBar;