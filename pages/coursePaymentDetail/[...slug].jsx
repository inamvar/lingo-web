import Image from "next/image";
import pic from '../../public/picture/package-pic.png';
import {courseDetail, getGoldenPackage, getPackageCourseList} from "../../services/appServices";
import Price from "../../components/IRRPrice";

const paymentDetail = ({result}) =>
{
    console.log(result);

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
                        <div className='grey-color flex gap-2'>قیمت دوره: <Price pricings={result.pricings} />تومان</div>

                    </div>
                </div>

                <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded divide-y-2 div-mypackage divide-gray-300"'>
                    <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                    <p className='grey-color pt-3'>قیمت دوره: 450,000 تومان</p>
                    <p className='grey-color pt-3'>درصد تخفیف: 0%</p>
                    <p className='grey-color pt-3'>قیمت نهایی: 450,000 تومان</p>
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