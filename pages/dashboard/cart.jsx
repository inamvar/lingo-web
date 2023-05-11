import Image from "next/image";
import pic from '../../public/picture/package-pic.png';

export default function cart()
{
    return(
        <>
            <div className='flex flex-col justify-center items-center gap-5'>

                <p className='darkBlue-color text-lg font-bold'>جزئیات پرداخت</p>

                <div className='flex bg-white w-4/5 md:w-1/2 gap-1 justify-between p-5'>
                    <div className='w-20 border border-black rounded'>
                        <Image className='rounded' src={pic} alt='picture' />
                    </div>
                    <div className='flex flex-col w-2/3 md:w-1/2 md:text-base text-xs justify-between'>
                        <p className='grey-color'>دوره آموزشی Speaking</p>
                        <p className='grey-color'>استاد امیر محمدی</p>
                        <p className='grey-color'>قیمت دوره: 450,000 تومان</p>
                    </div>
                </div>

                <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-1/2 divide-y-2 divide-gray-300"'>
                    <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                    <p className='grey-color pt-3'>قیمت دوره: 450,000 تومان</p>
                    <p className='grey-color pt-3'>درصد تخفیف: 0%</p>
                    <p className='grey-color pt-3'>قیمت نهایی: 450,000 تومان</p>
                </div>

                <a className='bg-red btn-page text-white text-center text-sm md:text-base w-4/5 md:w-1/2'>پرداخت میکنم</a>

            </div>
        </>
    )
}