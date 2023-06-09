import Image from "next/image";
import {courseDetail, getGoldenPackage} from "../../services/appServices";
import IRRPrice from "../../components/IRRPrice";
import USDPrice from "../../components/USDTPrace";
import {useContext, useState} from "react";
import AuthContext from "../../context/authContext";
import {withAuth} from "../../components/Authorized";
import {loginUser, postOrder} from "../../services/clientAppService";


const paymentDetail = ({result,golden}) =>
{
    const context = useContext(AuthContext);
    const goldenPackage = result[0];
    const [port,setPort]=useState('IRR');

    function handleChange(event)
    {
        setPort(event.target.value)
    }

    const handleClick = async() =>
    {
        const res = await postOrder(result.id,port);
        console.log(res);
    }

    if(context.authState.authenticated)
    {
        if(golden == false)
        {
            console.log(result)
            return(
                <>
                    <form className='flex flex-col justify-center items-center gap-6 mt-16'>

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
                            <p className='grey-color pt-3'>درصد تخفیف: {result.discount.discountValue}%</p>
                            {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت نهایی:<IRRPrice pricings={result.discount.finalAmounts} /> تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت نهایی: <USDPrice pricings={result.discount.finalAmounts} /> تتر</p>}
                        </div>

                        <div className='flex bg-white text-xs md:text-base p-5 gap-5 w-4/5 md:w-1/3 rounded div-mypackage'>

                            <p className='darkBlue-color text-lg font-bold text-center'>روش پرداخت:</p>

                            <div className='flex justify-center items-center gap-2'>
                                <input defaultChecked onChange={handleChange} type='radio' value='IRR' name='typePort' id='internalPort'/>
                                <p className='grey-color'>درگاه داخلی</p>
                            </div>
                            {/*<div className='flex justify-center items-center gap-2'>*/}
                            {/*    <input onChange={handleChange} type='radio' value='USDT' name='typePort' id='crypto'/>*/}
                            {/*    <p className='grey-color'>کریپتو</p>*/}
                            {/*</div>*/}

                        </div>

                        <a onClick={handleClick} className='bg-red btn-page text-white text-center text-sm md:text-base w-4/5 md:w-1/3'>پرداخت میکنم</a>

                    </form>
                </>
            )
        }

        else
        {
            console.log(goldenPackage);
            return(
                <>
                    <div className='flex flex-col justify-center items-center gap-6 mt-16'>

                        <p className='darkBlue-color text-lg font-bold text-center div-mypackage'>جزئیات پرداخت</p>

                        <div className='flex bg-white w-4/5 md:w-1/3 rounded gap-1 justify-between p-5 div-mypackage'>
                            <div className='flex w-1/2 rounded justify-center'>
                                <Image className='rounded w-40' src={goldenPackage.thumbnailUrl} width={450} height={450} quality={100} alt='picture' />
                            </div>
                            <div className='flex flex-col w-2/3 md:w-1/2 md:text-base text-xs items-center justify-evenly'>

                                <p className='grey-color'>{goldenPackage.name}</p>
                                {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={goldenPackage.courses[0].pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={goldenPackage.courses[0].pricings} /> تتر</p>}

                            </div>
                        </div>

                        <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded divide-y-2 div-mypackage divide-gray-300'>
                            <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                            {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={goldenPackage.courses[0].pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={goldenPackage.courses[0].pricings} /> تتر</p>}
                            {/*<p className='grey-color pt-3'>درصد تخفیف: {goldenPackage.courses[0].discount.discountValue}%</p>*/}
                            {/*{port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت نهایی:<IRRPrice pricings={goldenPackage.courses[0].discount.finalAmounts} /> تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت نهایی: <USDPrice pricings={goldenPackage.courses[0].discount.finalAmounts} /> تتر</p>}*/}
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
    }
    else
    {
        return (
            <></>
        )
    }

}

export async function getServerSideProps(context)
{
    const res = context.query.slug;

    if(res.length >= 2 && res[2] == "GoldenPackage")
    {
        const slug = `${res[0]}/${res[1]}`;
        const result = await getGoldenPackage();
        const golden = true;

        return{
            props: {result,golden}
        }
    }
    else
    {
        const slug = `${res[0]}/${res[1]}`;
        const result = await courseDetail(slug,context);
        const golden = false;

        return{
            props: {result,golden}
        }
    }
}

export default withAuth(paymentDetail);