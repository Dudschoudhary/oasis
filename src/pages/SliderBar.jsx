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
          src={image_1}
          alt="image 1"
          className="object-cover h-[630px] w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image_1}
          alt="image 1"
          className="object-cover h-[630px] w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image_1}
          alt="image 1"
          className="object-cover h-[625px] w-full"
        />
      </div>
     
    </Carousel>
  </>
);

export default SliderBar;
