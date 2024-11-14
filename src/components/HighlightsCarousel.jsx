import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HorizontalProject from './HorizontalProject';
import SmallProject from './SmallProject';

function HighlightsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
            <HorizontalProject
            projectTitle="Simon Cox Competition"
            learnMore="Learn more"
            hook="Our recent win at the annual Simon Cox competition"
          />
            </div>
            <div>
            <HorizontalProject
              projectTitle="Audio Biofeedback Device"
              learnMore="Learn more"
              hook="A device that detects muscle activation and notifies user."
            />
            </div>
            <div>
            <HorizontalProject
              projectTitle="Co-assist Device"
              learnMore="Learn more"
              hook="A device that is easily adjustable giving users independence."
            />
            </div>
            <div>
            <HorizontalProject
              projectTitle="Co-assist Device"
              learnMore="Learn more"
              hook="A device that is easily adjustable giving users independence."
            />
            </div>
          </Carousel>
  )
};

export default HighlightsCarousel;