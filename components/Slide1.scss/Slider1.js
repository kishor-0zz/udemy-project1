"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderStyle from './slider.module.css'
import slideImg1 from '../../assets/hero-bg-1-1.jpg';
import slideImg2 from '../../assets/hero-bg-1-2.jpg';
import slideImg3 from '../../assets/hero-bg-1-3.jpg';

let images = [
   { image: slideImg1, alt: "slide-img" },
   { image: slideImg2, alt: "slide-img" },
   { image: slideImg3, alt: "slide-img" }
];

const Slider1 = () => {
   const [currentIndexImg, setCurrentImgIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImgIndex(prevIndex =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
         );
      }, 5000);
      
      return () => clearInterval(interval);
   }, []);

   return (
      <div className={sliderStyle.sliderStyle} >
         {images.map((image, index) => (
            <Image
               key={index}
               src={image.image}
               className={index === currentIndexImg ? sliderStyle.active : ''}
               alt={image.alt}
            />
         ))}
      </div>
   );
};

export default Slider1;












// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// import slideImg1 from '../../assets/hero-bg-1-1.jpg'
// import slideImg2 from '../../assets/hero-bg-1-2.jpg'
// import slideImg3 from '../../assets/hero-bg-1-3.jpg'


// let images = [
//    {image:slideImg1 , alt:"slide-img"},
//    {image:slideImg2 , alt:"slide-img"},
//    {image:slideImg3 , alt:"slide-img"}
// ]


// const Slider1 = () => {
//    const [currentIndexImg, setCurrentImgIndex]= useState(0)
//    useEffect(()=>{
//       const interval = setInterval(()=>{
//          setCurrentImgIndex((prevIndex)=>
//             prevIndex.length< images.length === -1 ? prevIndex+1:0
//          )

//       },5000)
//       return ()=> clearInterval(interval)

//    },[])

//    return (
//       <div>
//          {
//             images.map((image, index)=>{
//                <Image
//                image={image}
//                key={index}
//                src={image.image}
//                className={index===currentIndexImg?'classes'.active:""}
//                alt={image.alt}
//                />
//             })
//          }         
//       </div>
//    );
// };

// export default Slider1;