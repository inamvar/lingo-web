import Image from 'next/image';
import pic from '../public/picture/package-pic.png';

export default function Item()
{
    return(
        <>
            <div className='flex flex-col rounded bg-white p-3 gap-3 w-56 mt-5'>
                <div>
                    <Image src={pic}/>
                </div>
                <div className='flex justify-center'>
                    <p className='grey-color'>پکیج پیشرفته مکالمه</p>
                </div>
            </div>
        </>
    )

}