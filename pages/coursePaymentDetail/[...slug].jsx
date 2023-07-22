import Image from "next/image";
import {courseDetail, getGoldenPackage, getStatusPhoneNumber} from "../../services/appServices";
import IRRPrice from "../../components/IRRPrice";
import USDPrice from "../../components/USDTPrace";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/authContext";
import {withAuth} from "../../components/Authorized";
import {ConfirmPhoneNumberRequest, postOrder} from "../../services/clientAppService";
import {validator} from "../../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Modal from "./../../components/PhoneNumberModal";
import {useRef} from 'react';
import moment from "moment";
import appRoutes from "../../common/appRoutes";
import router from "next/router";


const paymentDetail = ({result,golden,confirmPhoneNumber,authContext}) =>
{
    if(authContext.authState.authenticated)
    {
        const goldenPackage = result;
        const [port,setPort] = useState('IRR');

        let confirmNumber = confirmPhoneNumber.phoneNumberConfirmed;
        const [ConfirmNumber,setConfirmNumber] = useState(confirmNumber);

        useEffect(()=>{

            console.log(ConfirmNumber)

        },[ConfirmNumber])


        function handleConfirm()
        {
            setConfirmNumber(true);
        }

        function handleChange(event)
        {
            setPort(event.target.value)
        }

        const handleClick = async() =>
        {
            const res = await postOrder(result.id,port);
        }

        const schema = validator.object({
            phoneNumber:validator.string().required('نوشتن تلفن همراه اجباری است')
        })

        const { register, handleSubmit, watch,
            formState: { errors } } = useForm({
            resolver:yupResolver(schema)
        });

        const [openModal,setOpenModal] = useState(false);

        const [expireTime,setExpireTime] = useState();
        const [reqTime,setReqTime] = useState();

        const [progressFinished, setProgressFinished] = useState(false);

        const handleProgressFinished = () => {
            setProgressFinished(true);
            setProgressFinished(false);
        };

        useEffect(()=>{

            if(expireTime!=undefined)
            {
                const date1 = moment(expireTime);
                const date2 = moment();

                const duration = date1.diff(date2, 'milliseconds');

                localStorage.setItem("PhoneNumberConfirm-expireTime",expireTime);

                setTimeout(()=>{
                    localStorage.removeItem("PhoneNumberConfirm-expireTime");
                    setOpenModal(false);
                },duration)
            }

        },[expireTime])

        const inputNumber = useRef(null);

        async function handleClickModal()
        {
            const check = localStorage.getItem('PhoneNumberConfirm-expireTime');

            if(check == null)
            {
                const moment = require('moment');
                const number = inputNumber.current.value;

                console.log(number)
                const result = await ConfirmPhoneNumberRequest(number);
                console.log(result)

                if(result)
                {
                    setExpireTime(result.securityCodeExpiresAt);
                    setReqTime(moment().format());
                    setOpenModal(true);
                }
            }
            else
            {
                setOpenModal(true)
            }
        }

        function handleChildClick() {
            setOpenModal(false);
        }

        if(golden == false)
        {
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

                        {ConfirmNumber == false &&
                            <div className='flex bg-white text-xs md:text-base justify-center items-center flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded div-mypackage'>
                                <p className='text-gray-500'>شماره همراه خود را وارد کنید.</p>
                                <form className='flex w-11/12 md:w-4/5 gap-3'>

                                    <div className='flex-auto'>
                                        <input name='phoneNumber' ref={inputNumber} type='text' required className="rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none" />
                                        {errors.phoneNumber?.message && <div className="text-red-500 text-xs mt-1">{errors.phoneNumber?.message}</div>}
                                    </div>

                                    <Modal onClick={handleChildClick} expireTime={expireTime} reqTime={reqTime} onProgressFinished={handleProgressFinished} request={handleClickModal} confirmNumber={handleConfirm}
                                        text={
                                            <a onClick={handleClickModal} className='bg-darkBlue btn-page text-white text-center text-xs md:text-sm hover:bg-blue-950 whitespace-nowrap flex justify-center items-center h-full'>ارسال کد فعال سازی</a>
                                        }
                                        setOpen={openModal}
                                    />

                                </form>
                            </div>
                        }

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

                        <a onClick={handleClick} className='bg-red btn-page text-white text-center text-sm hover:bg-red-600 md:text-base w-4/5 md:w-1/3'>پرداخت میکنم</a>

                    </form>
                </>
            )
        }

        else
        {
            return(
                <>
                    <div className='flex flex-col justify-center items-center gap-6 mt-16'>

                        <p className='darkBlue-color text-lg font-bold text-center div-mypackage'>جزئیات پرداخت</p>

                        <div className='flex bg-white w-4/5 md:w-1/3 rounded gap-1 justify-between p-5 div-mypackage'>
                            <div className='flex w-1/2 rounded justify-center'>
                                <Image className='rounded w-40' src={goldenPackage[0].thumbnailUrl} width={450} height={450} quality={100} alt='picture' />
                            </div>
                            <div className='flex flex-col w-2/3 md:w-1/2 md:text-base text-xs items-center justify-evenly'>

                                <p className='grey-color'>{goldenPackage.name}</p>
                                {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={goldenPackage[0].courses[0].pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={goldenPackage[0].courses[0].pricings} /> تتر</p>}

                            </div>
                        </div>

                        {ConfirmNumber == false &&
                            <div className='flex bg-white text-xs md:text-base justify-center items-center flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded div-mypackage'>
                                <p className='text-gray-500'>شماره همراه خود را وارد کنید.</p>
                                <form className='flex w-11/12 md:w-4/5 gap-3'>

                                    <div className='flex-auto'>
                                        <input name='phoneNumber' ref={inputNumber} type='text' required className="rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none" />
                                        {errors.phoneNumber?.message && <div className="text-red-500 text-xs mt-1">{errors.phoneNumber?.message}</div>}
                                    </div>

                                    <Modal onClick={handleChildClick} expireTime={expireTime} reqTime={reqTime} onProgressFinished={handleProgressFinished} request={handleClickModal} confirmNumber={handleConfirm}
                                           text={
                                               <a onClick={handleClickModal} className='bg-darkBlue btn-page text-white text-center text-xs md:text-sm hover:bg-blue-950 whitespace-nowrap flex justify-center items-center h-full'>ارسال کد فعال سازی</a>
                                           }
                                           setOpen={openModal}
                                    />

                                </form>
                            </div>
                        }

                        <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded divide-y-2 div-mypackage divide-gray-300'>
                            <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                            {port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={goldenPackage[0].courses[0].pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={goldenPackage[0].courses[0].pricings} /> تتر</p>}
                            {/*<p className='grey-color pt-3'>درصد تخفیف: {goldenPackage.courses[0].discount.discountValue}%</p>*/}
                            {/*{port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت نهایی:<IRRPrice pricings={goldenPackage.courses[0].discount.finalAmounts} /> تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت نهایی: <USDPrice pricings={goldenPackage.courses[0].discount.finalAmounts} /> تتر</p>}*/}
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

                        <a className='bg-red btn-page text-white text-center text-sm md:text-base w-4/5 md:w-1/3 hover:bg-red-600'>پرداخت میکنم</a>

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

    if(res!=undefined)
    {
        if(res.length >= 2 && res[2] == "GoldenPackage")
        {
            const slug = `${res[0]}/${res[1]}`;
            const test = await getStatusPhoneNumber(context);

            if(test!=undefined)
            {
                const confirmPhoneNumber = test;
                const result = await getGoldenPackage(context);
                const golden = true;

                return{
                    props: {result,golden,confirmPhoneNumber}
                }
            }
            else
            {
                return{
                    props: {  }
                }
            }
        }
        else
        {
            const slug = `${res[0]}/${res[1]}`;
            const test = await getStatusPhoneNumber(context);

            if(test!=undefined)
            {
                const confirmPhoneNumber = test;
                const result = await courseDetail(slug,context);
                const golden = false;

                return{
                    props: {result,golden,confirmPhoneNumber}
                }
            }
            else
            {
                return{
                    props: {  }
                }
            }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }
}

export default withAuth(paymentDetail);