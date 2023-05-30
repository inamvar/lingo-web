import {getOrderHistory} from "../../services/appServices";
import Link from "next/link";
import AppRoutes from "../../common/appRoutes";
import moment from "moment";
import TimeMaker from '../../components/timeMaker';
import DateMaker from '../../components/dateMaker';
import {withAuth} from "../../components/Authorized";
import AuthContext from "../../context/authContext";
import {useContext} from "react";

const MyTransactions = ({orders}) =>
{
    console.log(orders);
    const context = useContext(AuthContext);

    if(context.authState.authenticated)
    {
        return(
            <>
                <div className='flex flex-col justify-center items-center gap-7 mt-16'>

                    <div className='flex bg-white justify-evenly gap-3 items-center div-mypackage rounded p-5'>
                        <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M73.5 13.75H56C56 6.16602 49.7219 0 42 0C34.2781 0 28 6.16602 28 13.75H10.5C4.70312 13.75 0 18.3691 0 24.0625V99.6875C0 105.381 4.70312 110 10.5 110H73.5C79.2969 110 84 105.381 84 99.6875V24.0625C84 18.3691 79.2969 13.75 73.5 13.75ZM21 91.0938C18.0906 91.0938 15.75 88.7949 15.75 85.9375C15.75 83.0801 18.0906 80.7812 21 80.7812C23.9094 80.7812 26.25 83.0801 26.25 85.9375C26.25 88.7949 23.9094 91.0938 21 91.0938ZM21 70.4688C18.0906 70.4688 15.75 68.1699 15.75 65.3125C15.75 62.4551 18.0906 60.1562 21 60.1562C23.9094 60.1562 26.25 62.4551 26.25 65.3125C26.25 68.1699 23.9094 70.4688 21 70.4688ZM21 49.8438C18.0906 49.8438 15.75 47.5449 15.75 44.6875C15.75 41.8301 18.0906 39.5312 21 39.5312C23.9094 39.5312 26.25 41.8301 26.25 44.6875C26.25 47.5449 23.9094 49.8438 21 49.8438ZM42 8.59375C44.9094 8.59375 47.25 10.8926 47.25 13.75C47.25 16.6074 44.9094 18.9062 42 18.9062C39.0906 18.9062 36.75 16.6074 36.75 13.75C36.75 10.8926 39.0906 8.59375 42 8.59375ZM70 87.6562C70 88.6016 69.2125 89.375 68.25 89.375H36.75C35.7875 89.375 35 88.6016 35 87.6562V84.2188C35 83.2734 35.7875 82.5 36.75 82.5H68.25C69.2125 82.5 70 83.2734 70 84.2188V87.6562ZM70 67.0312C70 67.9766 69.2125 68.75 68.25 68.75H36.75C35.7875 68.75 35 67.9766 35 67.0312V63.5938C35 62.6484 35.7875 61.875 36.75 61.875H68.25C69.2125 61.875 70 62.6484 70 63.5938V67.0312ZM70 46.4062C70 47.3516 69.2125 48.125 68.25 48.125H36.75C35.7875 48.125 35 47.3516 35 46.4062V42.9688C35 42.0234 35.7875 41.25 36.75 41.25H68.25C69.2125 41.25 70 42.0234 70 42.9688V46.4062Z" fill="#F84C4D"/>
                        </svg>
                        <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>تعداد تراکنش های من :</p>
                        <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>{orders.length}</p>
                    </div>

                    <div className='flex flex-col bg-white justify-evenly items-start overflow-x-auto div-mypackage gap-3 rounded p-7'>
                        <table className="table-auto w-full leading-10 overflow-x-auto">
                            <thead className='whitespace-nowrap'>
                            <tr className='darkBlue-color font-bold w-full border-b-2 border-gray-200 pb-4'>
                                <th className='px-5'>نام محصول</th>
                                <th className='px-5'>تاریخ خرید</th>
                                <th className='px-5'>قیمت (تومان)</th>
                                <th className='px-5'>تخفیف</th>
                                <th className='px-5'>قیمت نهایی</th>
                                <th className='px-5'>عملیات</th>
                            </tr>
                            </thead>
                            <tbody className='whitespace-nowrap'>
                            {orders.length>=1&&orders.map((o)=>{
                                return(
                                    <tr className='text-center'>
                                        <td>{o.courseName}</td>
                                        <td>
                                            <div className='flex flex-col'>
                                                <p>
                                                    <TimeMaker date={o.orderDate} />
                                                </p>
                                                <p>
                                                    <DateMaker date={o.orderDate}/>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            {o.price.toLocaleString()}
                                        </td>
                                        <td>{o.discount!=0?o.discount:"-"}</td>
                                        <td>{o.finalPrice.toLocaleString()}</td>
                                        <td><Link href={AppRoutes.Course(o.courseSlug)} className='bg-cyan-500 text-xs sm:text-sm btn-page bg-red text-white p-btn-big hover:bg-red-800 whitespace-nowrap'>مشاهده</Link></td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return(
            <></>
        )
    }

}
export async function getServerSideProps(context)
{
    const result = await getOrderHistory(context);

    if(result!=undefined)
    {
        const orders = result;
        return{
            props: { orders }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }
}

export default withAuth(MyTransactions);