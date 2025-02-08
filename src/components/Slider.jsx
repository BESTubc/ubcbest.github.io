import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import Dots from "./Dots";
import sliderImage from "./sliderImage";

// import { InstagramEmbed } from 'react-social-media-embed';
// <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
//               <InstagramEmbed url="https://www.instagram.com/p/C_zSIoJxFVL/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
//               <InstagramEmbed url="https://www.instagram.com/p/C_thkoeyhDq/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
//               <InstagramEmbed url="https://www.instagram.com/p/C_e-UMcR5Bh/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
//             </div>

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
