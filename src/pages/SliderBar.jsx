import React from 'react';
import { Carousel } from 'antd';
import image_1 from "../assets/images/home1.webp";
import image_2 from "../assets/images/home2.jpg";
import image_3 from "../assets/images/home3.jpg";
import image_4 from "../assets/images/home4.webp";
import image_5 from "../assets/images/home5.jpeg";

const SliderBar = () => (
  <>
    <Carousel arrows infinite={false} className="w-full">
      <div className="flex justify-center items-center">
        <img
          src={image_1}
          alt="image 1"
          className="object-cover h-[630px] w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image_2}
          alt="image 1"
          className="object-cover h-[630px] w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image_3}
          alt="image 1"
          className="object-cover h-[630px] w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image_4}
          alt="image 1"
          className="object-cover h-[625px] w-full"
        />
      </div>
     
    </Carousel>
    <div class="wpb_wrapper mb-9">
			<div className="flex justify-center items-center bg-[#00434c] py-2.5 m-0"><marquee><span className="text-[#faeb48]"> The admission 2025-2026 process of all classes will be open 1st May 2025.  <a href="https://www.mayurschoolbarmer.org/careers/"> </a></span></marquee></div>
		</div>
  </>
);

export default SliderBar;
