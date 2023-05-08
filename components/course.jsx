import Image from 'next/image';
import pic from '../public/picture/package-pic.png';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function Course(props)
{
    return(
        <Link href={APP_ROUTES.Course(props.slug)}>
            <div className='flex flex-col rounded bg-white p-3 gap-3 w-56 mt-5'>
                <div className='relative'>
                    <span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>
                    <Image alt='picture' src={props.picture}/>
                </div>
                <div className='flex justify-center'>
                    <p className='grey-color'>{props.name}</p>
                </div>
            </div>
        </Link>
    )
}