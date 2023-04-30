import { useSpringCarousel } from 'react-spring-carousel';
import Package from "../components/package";
import {getPackagesList} from '../services/appServices';

const PackageCarousel = ({result}) => {

    console.log('client data');
    console.log(result);
    console.log('client data');


    const packageItems = [
        {
            name:'page 1',
            id:1,
            phone:'123456'
        },
        {
            name:'page 2',
            id:2,
            phone:'1234567'
        }
    ]

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
                <Package/>
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

export async function getServerSideProps()
{
    const result = await getPackagesList();

    console.log('data got');
    console.log(result);
    console.log('data got');

    return{
        props: { result }
    }
}

export default PackageCarousel