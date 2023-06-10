import AuthContext from "../../../../context/authContext";
import {useContext} from "react";
import {withAuth} from "../../../../components/Authorized";
import Link from "next/link";
import AppRoutes from "../../../../common/appRoutes";
import {getSendMessages} from "../../../../services/appServices";
import DateMaker from "../../../../components/DateMaker";
import appRoutes from "../../../../common/appRoutes";

const sendMessages = (props) =>
{
    const context = useContext(AuthContext);

    console.log(props.messages);
    const messages = props.messages;

    if(context.authState.authenticated)
    {
        return(
            <div className='flex justify-center'>
                <div className='flex flex-col mt-16 gap-7 w-[85rem]'>
                    <div className='flex justify-evenly gap-7'>

                        <div className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded active-div-message'>
                            <svg width="83" height="63" viewBox="0 0 83 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.4275 20.6755C82.0598 20.17 83 20.6429 83 21.4419V54.7868C83 59.1078 79.5146 62.6135 75.2188 62.6135H7.78125C3.48535 62.6135 0 59.1078 0 54.7868V21.4582C0 20.6429 0.924023 20.1863 1.57246 20.6918C5.20371 23.529 10.0184 27.1325 26.5535 39.215C29.974 41.726 35.7451 47.009 41.5 46.9764C47.2873 47.0253 53.1719 41.6282 56.4627 39.215C72.9978 27.1325 77.7963 23.5127 81.4275 20.6755ZM41.5 41.7423C45.2609 41.8076 50.6754 36.9811 53.3988 34.9918C74.9107 19.2895 76.548 17.9199 81.5086 14.0065C82.4488 13.2728 83 12.1314 83 10.9248V7.82669C83 3.5057 79.5146 0 75.2188 0H7.78125C3.48535 0 0 3.5057 0 7.82669V10.9248C0 12.1314 0.551172 13.2565 1.49141 14.0065C6.45195 17.9035 8.08926 19.2895 29.6012 34.9918C32.3246 36.9811 37.7391 41.8076 41.5 41.7423Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>پیام های ارسال شده:</p>
                                <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>{messages.length}</p>
                            </div>
                        </div>

                        <Link href={appRoutes.NewMessage} className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded'>
                            <svg width="85" height="75" viewBox="0 0 85 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5 0C19.0287 0 0 15.4936 0 34.6078C0 42.8538 3.55439 50.4142 9.46289 56.3608C7.38105 64.7316 0.448242 72.2105 0.365234 72.2937C0.186862 72.4825 0.0675796 72.7196 0.0221189 72.9756C-0.0233418 73.2316 0.00700985 73.4953 0.109426 73.7342C0.211841 73.9731 0.381836 74.1768 0.598415 74.3199C0.814995 74.4631 1.06867 74.5396 1.32812 74.5399C12.3283 74.5399 20.5859 69.2572 24.6699 65.9911C30.3712 68.1327 36.4114 69.2251 42.5 69.2156C65.9729 69.2156 85 53.722 85 34.6078C85 15.4936 65.9729 0 42.5 0ZM58.4375 38.601C58.4375 38.954 58.2976 39.2926 58.0485 39.5422C57.7994 39.7918 57.4616 39.9321 57.1094 39.9321H47.8125V49.2496C47.8125 49.6026 47.6726 49.9411 47.4235 50.1908C47.1744 50.4404 46.8366 50.5806 46.4844 50.5806H38.5156C38.1634 50.5806 37.8256 50.4404 37.5765 50.1908C37.3274 49.9411 37.1875 49.6026 37.1875 49.2496V39.9321H27.8906C27.5384 39.9321 27.2006 39.7918 26.9515 39.5422C26.7024 39.2926 26.5625 38.954 26.5625 38.601V30.6146C26.5625 30.2616 26.7024 29.923 26.9515 29.6734C27.2006 29.4238 27.5384 29.2835 27.8906 29.2835H37.1875V19.966C37.1875 19.613 37.3274 19.2745 37.5765 19.0248C37.8256 18.7752 38.1634 18.635 38.5156 18.635H46.4844C46.8366 18.635 47.1744 18.7752 47.4235 19.0248C47.6726 19.2745 47.8125 19.613 47.8125 19.966V29.2835H57.1094C57.4616 29.2835 57.7994 29.4238 58.0485 29.6734C58.2976 29.923 58.4375 30.2616 58.4375 30.6146V38.601Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>ایجاد پیام جدید</p>
                            </div>
                        </Link>

                    </div>

                    <div className='flex flex-col gap-5 mx-[2rem]'>


                        <p className='darkBlue-color'>پیام های ارسال شده :</p>
                        <div className='bg-white flex p-4 rounded'>
                            <div className='w-1/3 darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap text-center'>تاریخ</div>
                            <div className='w-1/3 darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap text-center'>عنوان</div>
                            <div className='w-1/3 darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap text-center'>جزئیات</div>
                        </div>

                        {messages.map((m)=>{

                            return(<div className='bg-white flex p-4 rounded'>
                                <div className='w-1/3 darkBlue-color font-bold text-sm md:text-base whitespace-nowrap text-center flex justify-center items-center'>
                                    <DateMaker date={m.updatedAt}/>
                                </div>
                                <div className='w-1/3 darkBlue-color font-bold text-sm md:text-base whitespace-nowrap text-center flex justify-center items-center'>{m.subject}</div>
                                <Link href={appRoutes.DetailMessage(m.id)} className='w-1/3 darkBlue-color font-bold text-sm md:text-base whitespace-nowrap text-center flex justify-center'>
                                    <svg width="40" height="35" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.3119 8.4195C30.5688 4.6249 22.9356 3.76117 16.5946 4.9056C9.50031 -1.93707 1.55054 1.21029 0 2.11508C0 2.11508 5.45562 6.75101 4.5695 10.8114C-1.88946 17.3958 1.18101 24.7267 4.5695 28.1883C5.45562 32.2487 0 36.8846 0 36.8846C1.53561 37.7924 9.46373 40.93 16.5946 34.1224C22.9214 35.2594 30.5546 34.4031 36.3119 30.6018C45.2149 24.9178 45.2441 14.1334 36.3119 8.4195ZM21.9614 30.5652C19.7411 30.5716 17.5296 30.2862 15.3837 29.7164L13.9078 31.1416C13.088 31.9366 12.1701 32.6237 11.1763 33.1863C9.97051 33.7934 8.66064 34.1665 7.31597 34.2859C7.39062 34.1531 7.45632 34.0202 7.52276 33.8948C8.99939 31.1575 9.39754 28.7017 8.7172 26.5273C6.28875 24.6154 4.83526 22.172 4.83526 19.5002C4.83526 13.3787 12.5051 8.4195 21.9614 8.4195C31.4176 8.4195 39.0874 13.3787 39.0874 19.5002C39.0874 25.6217 31.4176 30.5652 21.9614 30.5652ZM13.7451 22.1355C13.0671 22.145 12.4129 21.8855 11.926 21.4136C11.439 20.9418 11.1589 20.2961 11.1472 19.6182C11.0949 16.2297 16.2108 16.1558 16.2624 19.5368V19.5749C16.2655 19.9084 16.2029 20.2394 16.078 20.5487C15.9532 20.8581 15.7686 21.1398 15.5348 21.3777C15.301 21.6157 15.0226 21.8052 14.7155 21.9355C14.4084 22.0658 14.0786 22.1342 13.7451 22.1369V22.1355ZM19.2522 19.6182C19.1932 16.2297 24.3092 16.1483 24.3682 19.5293V19.5749C24.3973 22.9402 19.3112 22.9768 19.2522 19.6182ZM29.9559 22.1355C29.2778 22.145 28.6236 21.8855 28.1365 21.4137C27.6495 20.9418 27.3692 20.2962 27.3573 19.6182C27.3057 16.2297 32.4217 16.1558 32.4732 19.5368V19.5749C32.4774 19.9087 32.4156 20.2401 32.2911 20.55C32.1667 20.8598 31.9821 21.1419 31.7481 21.3801C31.5141 21.6183 31.2353 21.8078 30.9277 21.9377C30.6201 22.0676 30.2898 22.1353 29.9559 22.1369V22.1355Z" fill="#F84C4D"/>
                                    </svg>
                                </Link>
                            </div>)

                        })}
                    </div>
                </div>
            </div>
        )
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
    const result = await getSendMessages(context);

    if(result!=undefined)
    {
        const messages = result;
        return{
            props: { messages }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }

}

export default withAuth(sendMessages);