import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PackageCarouselItem from "../components/packageCarouselItem";

const PackageMultiItemCarousel = ({ packages }) => {

    const [dragging, setDragging] = useState(false);

    const responsive = {
        screen:{
            breakpoint: { max: 3000, min: 1700 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1700, min: 1300 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1300, min: 850 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 850, min: 1 },
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
                  infinite={true}
                  autoPlay={false}
                  keyBoardControl={true}
                  customTransition="transform 600ms ease-in-out"
                  transitionDuration={600}
                  containerClass="carousel-container"
                  itemClass="multi-pack-item"
                  rtl={true}
        >
            {packages.map((i) => (
                <PackageCarouselItem firstCourse={i.firstCourseSlug} id={i.id} name={i.name} title={i.title} picture={i.thumbnailUrl} slug={i.slug}/>
            ))}
        </Carousel>
    );
};
export default PackageMultiItemCarousel;