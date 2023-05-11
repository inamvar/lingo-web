import Image from "next/image";
import pic from '../../public/picture/package-pic.png';

export default function myPackages()
{
    return(
        <>
            <div className='flex flex-col justify-center items-center gap-7'>
                <div className='flex w-2/3 bg-white justify-evenly items-center rounded p-5'>
                    <svg width="80" height="80" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8094 0H74.8534L91.6587 29.701V91.8668H0V29.701L16.8094 0ZM70.2105 7.98838H21.4522L7.97448 31.8099V83.8784H83.6922V31.8098L70.2105 7.98838ZM30.6898 76.2894H22.7194V57.5166H30.6896L30.6898 76.2894ZM33.4514 69.9266L26.7045 63.1645L19.9577 69.9266L14.3227 64.2788L26.7046 51.8689L39.0866 64.279L33.4514 69.9266ZM49.8184 45.9334H41.8482V3.99423H49.8185L49.8184 45.9334ZM87.6775 34.7497H3.98912V26.7612H87.6775V34.7497Z" fill="#F84C4D"/>
                    </svg>
                    <p className='darkBlue-color font-bold'>تعداد پکیج های من:</p>
                    <p className='darkBlue-color font-bold'>2</p>
                </div>

                <div className='flex flex-col w-2/3 bg-white justify-evenly items-start gap-3 rounded p-5'>
                    <p className='darkBlue-color font-bold text-lg'>پکیج های خریداری شده:</p>
                    <div className='flex flex-col w-full divide-y-2 divide-gray-300'>

                        <div className='flex items-center justify-evenly w-full py-4'>
                            <Image className='rounded' src={pic} width={100} height={100} alt='picture'/>
                            <p>پکیج پیشرفته مکالمه</p>
                            <button type='submit' className='bg-cyan-500 text-sm btn-page bg-red text-white w-fit px-5 hover:bg-red-800'>مشاهده</button>
                        </div>

                        <div className='flex items-center justify-evenly w-full py-4'>
                            <Image className='rounded' src={pic} width={100} height={100} alt='picture'/>
                            <p>پکیج پیشرفته مکالمه</p>
                            <button type='submit' className='bg-cyan-500 text-sm btn-page bg-red text-white w-fit px-5 hover:bg-red-800'>مشاهده</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}