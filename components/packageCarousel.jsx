import { useSpringCarousel } from 'react-spring-carousel';
import Package from "../components/package";
import {getPackagesList} from '../services/appServices';

const PackageCarousel = (props) => {

    console.log(props.packages);

    const packageItems = props.packages;

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        itemsPerSlide: 1,
        withLoop: true,
        items: packageItems.map((i) => ({
            id: i.id,
            renderItem: (
                <Package name={i.name} picture={i.thumbnailUrl}/>
            )
        })),
    });

    return (
        <div className='flex flex-row'>
            <button onClick={slideToPrevItem}>بعدی</button>
            {carouselFragment}
            <button onClick={slideToNextItem}>قبلی</button>
        </div>
    );
}

export default PackageCarousel