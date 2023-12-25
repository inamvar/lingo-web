import Image from "next/image";
import IRRPrice from "../../components/IRRPrice";
import USDPrice from "../../components/USDTPrace";
import Modal from "../../components/PhoneNumberModal";
import DeleteIcon from './../../public/picture/delete.png';
import {clearCart, getCart, removeFromCart} from "../../common/cartHelper";
import {useEffect, useState} from "react";
import {withAuth} from "../../components/Authorized";
import {pushAlert} from "../../common/notifier";
import {useCart} from "../../context/cartContext";
import {postOrderIRR, postOrderUSDT} from "../../services/clientAppService";
import router from "next/router";

const cart = ({authContext}) =>
{

    if(authContext.authState.authenticated)
    {
        const [myCart, setMyCart] = useState(getCart());

        const [totalPrice, setTotalPrice] = useState(0);

        const { cartExists, cartCount, addToCartCtx, removeFromCartCtx,cartTotalPrice} = useCart(null);

        let carT=null;
       // let sumPrice=0;
        useEffect(()=>{
            let cart= getCart();
            if(cart!=null){
                console.log(cart);
                carT=cart;
                //carT.forEach((x)=>sumPrice+=x.price[0].amount);
            }

           // sumPrice=cart.sum((x)=>x.price);
        },[]);

        useEffect(() => {
            setMyCart(carT);
        }, [carT]);

  // useEffect(() => {
  //           setTotalPrice(sumPrice);
  //       }, [sumPrice]);

        const handleDelete=(id)=>{
       let removeResult= removeFromCart(id);
      removeFromCartCtx(id);
       if (removeResult){
           pushAlert({type:'success',message:'با موفقیت از سبد خرید حذف گردید'});
       }
       else{
           pushAlert({type:'error',message:'یافت نشد'});
       }
        setMyCart(getCart());
        };

        const [payType,setPayType] = useState('IRR');
        const [IRRType,setIRRType] = useState('0');

        const handleClick = async() =>
        {
            if(payType == "IRR")
            {
                const courseId = [];
                myCart.forEach((e)=>{
                    courseId.push({courseId: e.id});
                })

                const res= await postOrderIRR(courseId,payType,IRRType);
                if (res!=undefined && res !=null)
                {
                    clearCart();
                    router.push(res);
                }
            }
            else
            {
                const res = await postOrderUSDT(result.id);
            }
        }

        if (myCart!=null){

            return(
                <>
                    <>
                        <form className='flex flex-col justify-center items-center gap-6 mt-16'>

                            <p className='darkBlue-color text-lg font-bold text-center div-mypackage'>سبد خرید</p>

                            <div className='flex flex-col bg-white w-4/5 md:w-[40%] rounded gap-7 items-center justify-center p-2 sm:p-5 div-mypackage '>
                                {myCart.map(x=>{
                                    return(<div className='flex w-11/12 md:w-11/12 md:text-base text-xs items-start justify-between'>
                                        <p className='grey-color w-[40%]'>{x.title}</p>
                                        <p className='grey-color flex w-2/3 gap-2'>قیمت دوره: {<IRRPrice pricings={x.price}/>}تومان</p>
                                        {/*{port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={result.pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={result.pricings} /> تتر</p>}*/}
                                       <span className='cursor-pointer' onClick={()=>handleDelete(x.id)}><Image className='w-[1.3rem]' src={DeleteIcon} alt='DeleteIcon'/></span>
                                    </div>);
                                })
                                }
                            </div>



                            {/*{ConfirmNumber == false &&*/}
                            {/*    <div className='flex bg-white text-xs md:text-base justify-center items-center flex-col p-5 gap-3 w-4/5 md:w-1/3 rounded div-mypackage'>*/}
                            {/*        <p className='text-gray-500'>شماره همراه خود را وارد کنید.</p>*/}
                            {/*        <form className='flex w-11/12 md:w-4/5 gap-3'>*/}

                            {/*            <div className='flex-auto'>*/}
                            {/*                <input name='phoneNumber' ref={inputNumber} type='text' required className="rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none" />*/}
                            {/*                {errors.phoneNumber?.message && <div className="text-red-500 text-xs mt-1">{errors.phoneNumber?.message}</div>}*/}
                            {/*            </div>*/}

                            {/*            <Modal onClick={handleChildClick} expireTime={expireTime} reqTime={reqTime} onProgressFinished={handleProgressFinished} request={handleClickModal} confirmNumber={handleConfirm}*/}
                            {/*                   text={*/}
                            {/*                       <a onClick={handleClickModal} className='bg-darkBlue btn-page text-white text-center text-xs md:text-sm hover:bg-blue-950 whitespace-nowrap flex justify-center items-center h-full'>ارسال کد فعال سازی</a>*/}
                            {/*                   }*/}
                            {/*                   setOpen={openModal}*/}
                            {/*            />*/}

                            {/*        </form>*/}
                            {/*    </div>*/}
                            {/*}*/}

                            <div className='flex bg-white text-xs md:text-base flex-col p-5 gap-3 w-4/5 md:w-[40%] rounded divide-y-2 div-mypackage divide-gray-300'>
                                <p className='darkBlue-color font-bold'>جزئیات سفارش</p>
                                <p className='grey-color pt-3 flex gap-2'>تعداد دوره: {cartCount}</p>
                                {/*{port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <IRRPrice pricings={result.pricings} />تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت دوره: <USDPrice pricings={result.pricings} /> تتر</p>}*/}
                                {/*<p className='grey-color pt-3'>درصد تخفیف: 0%</p>*/}
                                {/*{port=="IRR"?<p className='grey-color pt-3 flex gap-2'>قیمت نهایی:<IRRPrice pricings={result.discount.finalAmounts} /> تومان</p>:<p className='grey-color pt-3 flex gap-2'>قیمت نهایی: <USDPrice pricings={result.discount.finalAmounts} /> تتر</p>}*/}
                                <p className='grey-color pt-3 flex gap-2'>قیمت نهایی:  {((cartTotalPrice)/10).toLocaleString()}تومان</p>
                            </div>

                            <div className='flex bg-white text-xs md:text-base p-5 gap-5 w-4/5 md:w-[40%] rounded div-mypackage'>

                                <p className='darkBlue-color text-lg font-bold text-center'>روش پرداخت:</p>

                                <div className='flex justify-center items-center gap-2'>
                                    <input onChange={()=>{setPayType('IRR')}} defaultChecked type='radio' value='IRR' name='typePort' id='internalPort'/>
                                    <label for='internalPort' className='grey-color'>درگاه داخلی</label>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <input onChange={()=>{setPayType('CRP')}} type='radio' value='USDT' name='typePort' id='crypto'/>
                                    <label for='crypto' className='grey-color'>کریپتو</label>
                                </div>

                            </div>

                            <div className={`bg-white text-xs md:text-base p-5 gap-5 w-4/5 md:w-[40%] rounded div-mypackage ${payType == 'IRR' ? "flex": 'hidden'}`}>

                                <div className='flex justify-center items-center gap-2'>
                                    <input id='paymentGateWayZarin' onChange={()=>{setIRRType("0")}} defaultChecked type='radio' name='payIRR' value='0'/>
                                    <label htmlFor='paymentGateWayZarin' className='grey-color'>زرین پال</label>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <input id='paymentGateWayPishkhan' onChange={()=>{setIRRType("1")}} type='radio' name='payIRR' value='1'/>
                                    <label htmlFor='paymentGateWayPishkhan' className='grey-color'>پیشخوان الکترونیک ایرانیان</label>
                                </div>

                            </div>

                            <a onClick={handleClick} className='bg-red btn-page text-white text-center text-sm hover:bg-red-600 md:text-base w-4/5 md:w-[40%]'>پرداخت میکنم</a>

                        </form>
                    </>
                </>
            )
        }
        else{
            return(
                <>
                    <div className='flex h-screen justify-center items-center'>
                        <label className='text-darkBlue'>سبد خرید یافت نشد</label>
                    </div>
                </>
            )
        }

    }
    else{
        return (
            <></>
        )
    }
}

export default withAuth(cart);