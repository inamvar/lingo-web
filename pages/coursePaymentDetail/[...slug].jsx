import Image from "next/image";
import pic from '../../public/picture/package-pic.png';
import {courseDetail, getGoldenPackage, getPackageCourseList} from "../../services/appServices";
import IRRPrice from "../../components/IRRPrice";
import USDPrice from "../../components/USDTPrace";
import {useEffect, useState} from "react";

const paymentDetail = ({result}) =>
{
    const [port,setPort]=useState('IRR');

    function handleChange(event)
    {
        setPort(event.target.value)
    }

    useEffect(()=>{
        console.log(port)
    },[setPort])

    return(
        <>
            <div className='flex flex-col justify-center items-center gap-6 mt-16'>

                <p className='darkBlue-color text-lg font-bold text-center div-mypackage'>جزئیات پرداخت</p>

                <div className='flex bg-white w-4/5 md:w-1/3 rounded gap-1 justify-between p-5 div-mypackage'>
                    <div className='flex w-1/2 rounded justify-center'>
                        <Image className='rounded w-40' src={result.thumbnailImageUrl} width={450} height={450} quality={100} alt='picture' />
                    </div>
                    <div className='flex flex-col w-2/3 md:w-1/2 md:text-base text-xs items-center justify-evenly'>

                        <p className='grey-color'>{result.title}</p>
                        {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={result.pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={result.pricings} /> تتر</p>}

                    </div>
                </div>

                <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded divide-y-2 div-mypackage divide-gray-300'>
                    <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                    {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={result.pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={result.pricings} /> تتر</p>}
                    <p className='grey-color pt-3'>درصد تخفیف: 0%</p>
                    <p className='grey-color pt-3'>قیمت نهایی: 450,000 تومان</p>
                </div>

                <div className='flex bg-white text-xs md:text-base p-5 gap-5 w-4/5 md:w-1/3 rounded div-mypackage'>

                    <p className='darkBlue-color text-lg font-bold text-center'>روش پرداخت:</p>

                    <div className='flex justify-center items-center gap-2'>
                        <input defaultChecked onChange={handleChange} type='radio' value='IRR' name='typePort' id='internalPort'/>
                        <p className='grey-color'>درگاه داخلی</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <input onChange={handleChange} type='radio' value='USDT' name='typePort' id='crypto'/>
                        <p className='grey-color'>کریپتو</p>
                    </div>

                </div>

                <a className='bg-red btn-page text-white text-center text-sm md:text-base w-4/5 md:w-1/3'>پرداخت میکنم</a>

            </div>
        </>
    )
}

export async function getServerSideProps(context)
{
    const res = context.query.slug;

    if(res.length >= 2 && res[2] == "GoldenPackage")
    {
        const slug = `${res[0]}/${res[1]}`;
        const result = await getGoldenPackage();
        return{
            props: {result}
        }
    }
    else
    {
        const slug = `${res[0]}/${res[1]}`;
        const result = await courseDetail(slug,context);
        return{
            props: {result}
        }
    }
}

export default paymentDetail;