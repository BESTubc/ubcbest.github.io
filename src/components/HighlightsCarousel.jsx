import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HorizontalProject from './HorizontalProject';
import { InstagramEmbed } from 'react-social-media-embed';

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
            showDots={false}
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
            link="https://picsum.photos/400/400"
          />
            </div>
            <div>
            <HorizontalProject
              projectTitle="Audio Biofeedback Device"
              learnMore="Learn more"
              hook="Detects muscle activation and notifies user."
              link="https://picsum.photos/400/401"
            />
            </div>
            <div>
            <HorizontalProject
              projectTitle="Co-assist Device"
              learnMore="Learn more"
              hook="An easily adjustable device giving users mobility."
              link="https://picsum.photos/401/400"
            />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
              <InstagramEmbed url="https://www.instagram.com/p/C_zSIoJxFVL/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'  }}>
              <InstagramEmbed url="https://www.instagram.com/p/C_thkoeyhDq/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'  }}>
              <InstagramEmbed url="https://www.instagram.com/p/C_e-UMcR5Bh/?utm_source=ig_embed&amp;utm_campaign=loading" width={400} height={500} />
            </div>
            <div>
              
            </div>
          </Carousel>
  )
};

export default HighlightsCarousel;