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
        itemsPerSlide: 3,
        withLoop: true,
        items: packageItems.map((i) => ({
            id: i.id,
            renderItem: (
                <Package name={i.name} picture={i.thumbnailUrl}/>
            )
        })),
    });

    return (
        <div className='flex flex-row div-cersoul justify-center'>
            <button className='next-button-cersoul' onClick={slideToPrevItem}>
                <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62349 34L0 27.1228L9.74954 17.0001L0 6.87721L6.62349 0L16.3766 10.1265L17.1471 10.919L22.9965 16.9924L23 16.9959L22.2298 17.8032L16.3804 23.8766L16.3766 23.8728L6.62349 34ZM3.08165 27.1228L6.62349 30.8003L16.3696 20.6811L16.3733 20.6849L19.9222 17.0001L16.3726 13.3145L15.6025 12.5226L6.62349 3.1997L3.08165 6.87721L12.8312 17.0001L3.08165 27.1228Z" fill="#666262" fill-opacity="0.8"/>
                </svg>
            </button>
            <div className='flex flex-row'>
                {carouselFragment}
            </div>
            <button className='Previous-button-cersoul' onClick={slideToNextItem}>
                <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3733 34L6.62283 23.8741L5.85304 23.0824L0 17.004L0.0036924 17.0001L0.773546 16.193L6.61975 10.1217L6.62344 10.1255L16.374 0L23 6.88156L13.2567 16.9999L23 27.1184L16.3733 34ZM6.63336 20.6794L7.40369 21.4718L16.3733 30.7868L19.9055 27.1187L10.1623 16.9999L19.9055 6.88156L16.3733 3.21337L6.63705 13.3246L6.63336 13.3208L3.09056 16.9999L6.63336 20.6794Z" fill="#666262" fill-opacity="0.8"/>
                </svg>
            </button>
        </div>
    );
}

export default PackageCarousel