import React from "react";
import admitionOpenImage from "../assets/images/AdmissionOpen.png"

const AdmitionOpneSection = () => {
    return(
        <>
           <div className="mb-9 w-full flex justify-center items-center">
              <a href="">
                <img src={admitionOpenImage} alt="Admission Open" data-aos="zoom-in" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"/>
              </a>
           </div>
        </>
    )
}

export default AdmitionOpneSection;