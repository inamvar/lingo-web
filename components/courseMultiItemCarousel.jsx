import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCarouselItem from "./courseCarouselItem";

const CourseMultiItemCarousel = ({ courses }) => {

    console.log(courses)
    const [dragging, setDragging] = useState(false);

    const responsive = {
        screen:{
            breakpoint: { max: 3000, min: 1600 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1600, min: 1200 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1200, min: 760 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 760, min: 1 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    const handleDragStart = () => {
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    return (

        <Carousel className='flex flex-row'
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={false}
                  keyBoardControl={true}
                  customTransition="transform 600ms ease-in-out"
                  transitionDuration={600}
                  containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
                  itemClass="multi-pack-item"
                  rtl={true}
        >
            {
                courses.map((i) => (
                <CourseCarouselItem id={i.id} costType={i.costType} name={i.name} title={i.title} picture={i.thumbnailImageUrl} pricings={i.pricings} slug={i.slug}/>
            ))}
        </Carousel>
    );
};
export default CourseMultiItemCarousel;