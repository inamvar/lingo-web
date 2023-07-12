import {withAuth} from "../../../../components/Authorized";
import Link from "next/link";
import {getSendMessages} from "../../../../services/appServices";
import DateMaker from "../../../../components/DateMaker";
import appRoutes from "../../../../common/appRoutes";
import {SeenReplyMessage} from "../../../../services/clientAppService";
import {router} from "next/router";

const sendMessages = (props) =>
{
console.log(props);
    const messages = props.messages;
    // href={appRoutes.DetailMessage(m.id)}
    console.log(messages);

    async function handleClick(MessageId)
    {
        console.log(MessageId)
        router.push(appRoutes.DetailMessage(MessageId));
        var result = await SeenReplyMessage(MessageId);
        if(result)
        {
            console.log(result);
        }
    }

    if(props.authContext.authState.authenticated)
    {
        return(
            <div className='flex justify-center'>
                <div className='flex flex-col mt-16 gap-7 w-full sm:w-[75rem]'>

                    <div className='flex justify-evenly gap-7 mx-[0.5rem]'>

                        <div className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded active-div-message'>
                            <svg width="83" height="63" viewBox="0 0 83 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.4275 20.6755C82.0598 20.17 83 20.6429 83 21.4419V54.7868C83 59.1078 79.5146 62.6135 75.2188 62.6135H7.78125C3.48535 62.6135 0 59.1078 0 54.7868V21.4582C0 20.6429 0.924023 20.1863 1.57246 20.6918C5.20371 23.529 10.0184 27.1325 26.5535 39.215C29.974 41.726 35.7451 47.009 41.5 46.9764C47.2873 47.0253 53.1719 41.6282 56.4627 39.215C72.9978 27.1325 77.7963 23.5127 81.4275 20.6755ZM41.5 41.7423C45.2609 41.8076 50.6754 36.9811 53.3988 34.9918C74.9107 19.2895 76.548 17.9199 81.5086 14.0065C82.4488 13.2728 83 12.1314 83 10.9248V7.82669C83 3.5057 79.5146 0 75.2188 0H7.78125C3.48535 0 0 3.5057 0 7.82669V10.9248C0 12.1314 0.551172 13.2565 1.49141 14.0065C6.45195 17.9035 8.08926 19.2895 29.6012 34.9918C32.3246 36.9811 37.7391 41.8076 41.5 41.7423Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap'>پیام های ارسال شده</p>
                                {/*<p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>{messages.length}</p>*/}
                            </div>
                        </div>

                        <Link href={appRoutes.NewMessage} className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded hover:drop-shadow-xl'>
                            <svg width="85" height="75" viewBox="0 0 85 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5 0C19.0287 0 0 15.4936 0 34.6078C0 42.8538 3.55439 50.4142 9.46289 56.3608C7.38105 64.7316 0.448242 72.2105 0.365234 72.2937C0.186862 72.4825 0.0675796 72.7196 0.0221189 72.9756C-0.0233418 73.2316 0.00700985 73.4953 0.109426 73.7342C0.211841 73.9731 0.381836 74.1768 0.598415 74.3199C0.814995 74.4631 1.06867 74.5396 1.32812 74.5399C12.3283 74.5399 20.5859 69.2572 24.6699 65.9911C30.3712 68.1327 36.4114 69.2251 42.5 69.2156C65.9729 69.2156 85 53.722 85 34.6078C85 15.4936 65.9729 0 42.5 0ZM58.4375 38.601C58.4375 38.954 58.2976 39.2926 58.0485 39.5422C57.7994 39.7918 57.4616 39.9321 57.1094 39.9321H47.8125V49.2496C47.8125 49.6026 47.6726 49.9411 47.4235 50.1908C47.1744 50.4404 46.8366 50.5806 46.4844 50.5806H38.5156C38.1634 50.5806 37.8256 50.4404 37.5765 50.1908C37.3274 49.9411 37.1875 49.6026 37.1875 49.2496V39.9321H27.8906C27.5384 39.9321 27.2006 39.7918 26.9515 39.5422C26.7024 39.2926 26.5625 38.954 26.5625 38.601V30.6146C26.5625 30.2616 26.7024 29.923 26.9515 29.6734C27.2006 29.4238 27.5384 29.2835 27.8906 29.2835H37.1875V19.966C37.1875 19.613 37.3274 19.2745 37.5765 19.0248C37.8256 18.7752 38.1634 18.635 38.5156 18.635H46.4844C46.8366 18.635 47.1744 18.7752 47.4235 19.0248C47.6726 19.2745 47.8125 19.613 47.8125 19.966V29.2835H57.1094C57.4616 29.2835 57.7994 29.4238 58.0485 29.6734C58.2976 29.923 58.4375 30.2616 58.4375 30.6146V38.601Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap'>ایجاد پیام جدید</p>
                            </div>
                        </Link>

                    </div>

                    <div className='flex flex-col gap-5 mx-[1rem]'>
                        <p className='darkBlue-color text-xs sm:text-base'>پیام های ارسال شده :</p>
                    </div>

                    <div className='flex flex-col gap-5 mx-[1rem] overflow-y-auto max-h-[30rem]'>
                        <div className='bg-white flex p-4 rounded'>
                            <div className='w-1/3 darkBlue-color font-bold md:text-lg whitespace-nowrap text-center text-xs sm:text-sm'>تاریخ</div>
                            <div className='w-1/3 darkBlue-color font-bold md:text-lg whitespace-nowrap text-center text-xs sm:text-sm'>عنوان</div>
                            <div className='w-1/3 darkBlue-color font-bold md:text-lg whitespace-nowrap text-center text-xs sm:text-sm'>جزئیات</div>
                        </div>

                        {messages.map((m)=>{

                            return(<div key={m.id} className='bg-white flex p-4 rounded'>
                                <div className='w-1/3 darkBlue-color font-bold text-xs sm:text-sm whitespace-nowrap text-center flex justify-center items-center'>
                                    <DateMaker date={m.updatedAt}/>
                                </div>
                                <div className='w-1/3 darkBlue-color font-bold text-xs sm:text-sm whitespace-nowrap text-center flex justify-center items-center'>{m.subject}</div>

                                <button type='button' onClick={()=>{handleClick(m.id)}} className='w-1/3 darkBlue-color font-bold text-sm md:text-base whitespace-nowrap text-center flex justify-center'>
                                    <div className='relative'>
                                        <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.125 18.5627H28.875C29.6347 18.5627 30.25 17.9473 30.25 17.1877V15.8127C30.25 15.053 29.6347 14.4377 28.875 14.4377H15.125C14.3653 14.4377 13.75 15.053 13.75 15.8127V17.1877C13.75 17.9473 14.3653 18.5627 15.125 18.5627ZM13.75 25.4376C13.75 26.1973 14.3653 26.8126 15.125 26.8126H28.875C29.6347 26.8126 30.25 26.1973 30.25 25.4376V24.0626C30.25 23.3029 29.6347 22.6876 28.875 22.6876H15.125C14.3653 22.6876 13.75 23.3029 13.75 24.0626V25.4376ZM22 35.8472C20.5889 35.8472 19.1778 35.4123 17.973 34.5418L0 21.5584V39.875C0 42.1532 1.8468 44 4.125 44H39.875C42.1532 44 44 42.1532 44 39.875V21.5584L26.027 34.5418C24.8222 35.4115 23.4111 35.8472 22 35.8472ZM42.4196 14.0037C41.6591 13.4073 40.938 12.8461 39.875 12.0435V8.25022C39.875 5.97203 38.0282 4.12524 35.75 4.12524H29.0856C28.8243 3.93618 28.5811 3.75915 28.3087 3.56149C26.8641 2.50705 23.9938 -0.0298128 22 0.000265147C20.0063 -0.0298128 17.1368 2.50705 15.6913 3.56149C15.4189 3.75915 15.1757 3.93618 14.9145 4.12524H8.25C5.9718 4.12524 4.125 5.97203 4.125 8.25022V12.0435C3.06195 12.8453 2.34094 13.4073 1.58039 14.0037C1.0881 14.3895 0.690005 14.8822 0.416207 15.4445C0.142409 16.0069 8.47177e-05 16.6241 0 17.2495L0 18.1648L8.25 24.1245V8.25022H35.75V24.1245L44 18.1648V17.2495C44 15.9828 43.4173 14.7857 42.4196 14.0037Z" fill="#F84C4D"/>
                                        </svg>
                                        {m.seen==false && m.replies.length>=1 ?<div className='w-[1.5rem] h-[1.5rem] bg-darkBlue absolute rounded-full badge-message text-white'>
                                            {m.replies.length}
                                        </div>:<p></p>}
                                    </div>
                                </button>

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