import Image from 'next/image';
import pic from '../public/picture/package-pic.png';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function CourseItem(props)
{
    return(
        <Link href={APP_ROUTES.Course(props.slug)}>
            <div className='flex flex-col justify-between rounded-xl bg-white p-3 h-full w-full gap-3'>
                <div style={{height:"80%"}} className='relative'>
                    {/*<span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>*/}
                    <Image className='w-full h-full rounded' width={450} height={450} quality={100} alt='picture' src={props.picture}/>
                </div>
                <div style={{height:"10%"}} className='flex justify-center'>
                    <p className='grey-color'>{props.name}</p>
                </div>
            </div>
        </Link>
    )
}