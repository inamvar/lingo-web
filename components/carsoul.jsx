import { useSpringCarousel } from 'react-spring-carousel';
import Package from "../components/package";

export default function Cersoul() {

    const mockedItems = [
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
        items: mockedItems.map((i) => ({
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