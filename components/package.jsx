import Image from 'next/image';
import pic from '../public/picture/package-pic.png';

export default function Item()
{
    return(
        <>
            <div className='flex flex-col rounded bg-white p-3 gap-3 w-52 mt-5'>
                <div>
                    <Image src={pic}/>
                </div>
                <div className='flex justify-start'>
                    <p>دوره آموزشی Listening</p>
                </div>
                <div className='flex justify-start'>
                    <p className='text-sm grey-color'> امیر محمدی</p>
                </div>
                <div className='flex green-color justify-between'>
                    <p>742,000</p>
                    <p>تومان</p>
                </div>
            </div>
        </>
    )

}