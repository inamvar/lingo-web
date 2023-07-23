import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";
import Price from "./IRRPrice";

export default function PackagesCarouselItem(props)
{
    return(

        <Link className='item-size flex justify-center' href={APP_ROUTES.Course(props.slug)}>
            <div style={{width:'90%'}} className='flex flex-col rounded-xl bg-white p-3 w-full h-full gap-3 justify-between'>
                <div style={{height:"80%"}} className='relative w-full flex justify-center items-center overflow-hidden'>
                    <div className='flex justify-center items-center h-full max-h-full'>
                        <Image quality={100} className='h-auto w-auto max-h-full max-w-full rounded' alt='picture' height={450} width={450} src={props.picture}/>
                    </div>
                </div>
                <div style={{height:"20%"}} className='flex justify-center flex-col items-center'>
                    <p className='grey-color sm:text-base text-xs'>{props.title}</p>
                    <div className='paleGreen-color sm:text-base text-xs flex gap-2 pt-2 mt-2 pb-1 w-full justify-center text-lg border-gray-200 border-t-2'>تومان<Price pricings={props.pricings} /></div>
                </div>
            </div>
        </Link>
    )
}