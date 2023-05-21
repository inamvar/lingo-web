import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PackageCarouselItem from "../components/packageCarouselItem";

const PackageMultiItemCarousel = ({ packages }) => {

    const [dragging, setDragging] = useState(false);

    const responsive = {
        big:{
            breakpoint: { max: 3000, min: 1980 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1980, min: 1470 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1470, min: 1000 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 1000, min: 1 },
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
            // onDragStart={handleDragStart}
            // onDragEnd={handleDragEnd}
        >
            {packages.map((i) => (
                <PackageCarouselItem firstCourse={i.firstCourseSlug} id={i.id} name={i.name} title={i.title} picture={i.thumbnailUrl} slug={i.slug}/>
            ))}
        </Carousel>
    );
};
export default PackageMultiItemCarousel;