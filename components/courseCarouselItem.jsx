import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function CourseCarouselItem(props)
{
    // const itemStyles={width:'200px',height:'250px'};
    return(
        <Link className='item-size' href={APP_ROUTES.Package(props.slug)}>
            <div  className='flex flex-col rounded bg-white p-3 w-full h-full justify-between'>
                <div style={{height:"80%"}} className='relative w-full'>
                    <span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>
                    <Image className='w-full h-full'  alt='picture' height={100} width={100} src={props.picture}/>
                </div>
                <div style={{height:"10%"}} className='flex justify-center'>
                    <p className='grey-color'>{props.name}</p>
                    <p className='grey-color'>{props.title}</p>
                </div>
            </div>
        </Link>
    )
}