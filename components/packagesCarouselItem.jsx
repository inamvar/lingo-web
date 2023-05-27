import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function PackagesCarouselItem(props)
{
    return(

        <Link className='item-size flex justify-center' href={APP_ROUTES.Course(props.slug)}>
            <div style={{width:'90%'}} className='flex flex-col rounded-xl bg-white p-3 w-full h-full gap-3 justify-between'>
                <div style={{height:"90%"}} className='relative w-full rounded'>
                    {/*<span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>*/}
                    <Image quality={100}  className='w-full h-full rounded' alt='picture' height={450} width={450} src={props.picture}/>
                </div>
                <div style={{height:"10%"}} className='flex justify-center'>
                    <p className='grey-color'>{props.name}</p>
                    <p className='grey-color'>{props.title}</p>
                </div>
            </div>
        </Link>
    )
}