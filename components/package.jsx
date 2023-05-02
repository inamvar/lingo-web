import Image from 'next/image';
import pic from '../public/picture/package-pic.png';
import Link from 'next/link';
import API_ROUTES from "../common/apiRoutes";

export default function Item(props)
{
    return(
        <Link href={API_ROUTES.DETAIL}>
            <div className='flex flex-col rounded bg-white p-3 gap-3 w-56 mt-5'>
                <div>
                    <Image alt='picture' src={pic}/>
                </div>
                <div className='flex justify-center'>
                    <p className='grey-color'>{props.name}</p>
                </div>
            </div>
        </Link>
    )

}