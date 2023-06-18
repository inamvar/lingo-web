import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";
import Price from "./IRRPrice";

export default function CourseCarouselItem(props)
{
    return(
        <Link className='item-size flex justify-center' href={APP_ROUTES.Course(props.slug)}>
            <div style={{width:'90%'}}  className='flex flex-col rounded-xl bg-white p-3 w-full h-full justify-between gap-3'>
                <div style={{height:"80%"}} className='relative w-full'>
                    {/*<span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>*/}
                    <Image quality={100} className='w-full h-full rounded' alt='picture' height={900} width={900} src={props.picture}/>
                </div>
                <div style={{height:"20%"}} className='flex flex-col items-center justify-center'>
                    <p className='grey-color'>{props.name}</p>
                    <p className='grey-color'>{props.title}</p>
                    <div className='green-color flex gap-2 border-gray-200 pt-2 mt-2 pb-1 border-t-2 w-full justify-center'>تومان<Price pricings={props.pricings} /></div>
                </div>
            </div>
        </Link>
    )
}