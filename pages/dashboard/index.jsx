import Meta from "../../components/meta";
import {withAuth} from "../../components/Authorized";
import Link from "next/link";
import appRoutes from "../../common/appRoutes";
import AuthContext from "../../context/authContext";
import {useContext} from "react";

const Index = () => {

    const context = useContext(AuthContext);

    if(context.authState.authenticated)
    {
        return (
            <>
                <Meta title="داشبورد" />
                <div className='flex justify-center mt-20'>

                    <div className='flex lg:flex-row flex-col items-center justify-between gap-6 sm:gap-4 m-3 div-dashboard'>
                        <Link className='bg-white w-2/3 sm:w-72 flex flex-col items-center justify-center gap-6 py-16 rounded' href={appRoutes.Profile}>
                            <svg width="92" height="104" viewBox="0 0 92 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46 52C60.5188 52 72.2857 40.3609 72.2857 26C72.2857 11.6391 60.5188 0 46 0C31.4813 0 19.7143 11.6391 19.7143 26C19.7143 40.3609 31.4813 52 46 52ZM64.4 58.5H60.9705C56.4116 60.5719 51.3393 61.75 46 61.75C40.6607 61.75 35.6089 60.5719 31.0295 58.5H27.6C12.3625 58.5 0 70.7281 0 85.8V94.25C0 99.6328 4.41518 104 9.85714 104H82.1429C87.5848 104 92 99.6328 92 94.25V85.8C92 70.7281 79.6375 58.5 64.4 58.5Z" fill="#F84C4D"/>
                            </svg>
                            <p className='darkBlue-color'>پروفایل من</p>
                        </Link>

                        <Link className='bg-white flex w-2/3 sm:w-72 flex-col items-center justify-center gap-6 py-14 rounded' href={appRoutes.MyPackages}>
                            <svg width="138" height="121" viewBox="0 0 138 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.625 112.357C8.625 117.138 12.4793 121 17.25 121H60.375V77.7857H8.625V112.357ZM77.625 121H120.75C125.521 121 129.375 117.138 129.375 112.357V77.7857H77.625V121ZM129.375 34.5714H118.028C119.699 31.3033 120.75 27.6842 120.75 23.7679C120.75 10.6685 110.104 0 97.0312 0C85.8188 0 78.5684 5.7529 69.2695 18.4471C59.9707 5.7529 52.7203 0 41.5078 0C28.4355 0 17.7891 10.6685 17.7891 23.7679C17.7891 27.6842 18.8133 31.3033 20.5113 34.5714H8.625C3.8543 34.5714 0 38.4337 0 43.2143V64.8214C0 67.1982 1.94062 69.1429 4.3125 69.1429H133.688C136.059 69.1429 138 67.1982 138 64.8214V43.2143C138 38.4337 134.146 34.5714 129.375 34.5714ZM41.4809 34.5714C35.5242 34.5714 30.6996 29.7368 30.6996 23.7679C30.6996 17.7989 35.5242 12.9643 41.4809 12.9643C46.8445 12.9643 50.8066 13.8556 64.6875 34.5714H41.4809ZM97.0312 34.5714H73.8246C87.6785 13.9096 91.5328 12.9643 97.0312 12.9643C102.988 12.9643 107.812 17.7989 107.812 23.7679C107.812 29.7368 102.988 34.5714 97.0312 34.5714Z" fill="#F84C4D"/>
                            </svg>
                            <p className='darkBlue-color'>دوره های من</p>
                        </Link>

                        <Link className='bg-white flex w-2/3 sm:w-72 flex-col items-center justify-center gap-6 py-12 rounded' href={appRoutes.MyTransactions}>
                            <svg width="102" height="134" viewBox="0 0 102 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M89.25 16.75H68C68 7.51133 60.3766 0 51 0C41.6234 0 34 7.51133 34 16.75H12.75C5.71094 16.75 0 22.377 0 29.3125V121.438C0 128.373 5.71094 134 12.75 134H89.25C96.2891 134 102 128.373 102 121.438V29.3125C102 22.377 96.2891 16.75 89.25 16.75ZM25.5 110.969C21.9672 110.969 19.125 108.168 19.125 104.688C19.125 101.207 21.9672 98.4062 25.5 98.4062C29.0328 98.4062 31.875 101.207 31.875 104.688C31.875 108.168 29.0328 110.969 25.5 110.969ZM25.5 85.8438C21.9672 85.8438 19.125 83.0434 19.125 79.5625C19.125 76.0816 21.9672 73.2812 25.5 73.2812C29.0328 73.2812 31.875 76.0816 31.875 79.5625C31.875 83.0434 29.0328 85.8438 25.5 85.8438ZM25.5 60.7188C21.9672 60.7188 19.125 57.9184 19.125 54.4375C19.125 50.9566 21.9672 48.1562 25.5 48.1562C29.0328 48.1562 31.875 50.9566 31.875 54.4375C31.875 57.9184 29.0328 60.7188 25.5 60.7188ZM51 10.4688C54.5328 10.4688 57.375 13.2691 57.375 16.75C57.375 20.2309 54.5328 23.0312 51 23.0312C47.4672 23.0312 44.625 20.2309 44.625 16.75C44.625 13.2691 47.4672 10.4688 51 10.4688ZM85 106.781C85 107.933 84.0437 108.875 82.875 108.875H44.625C43.4562 108.875 42.5 107.933 42.5 106.781V102.594C42.5 101.442 43.4562 100.5 44.625 100.5H82.875C84.0437 100.5 85 101.442 85 102.594V106.781ZM85 81.6562C85 82.8078 84.0437 83.75 82.875 83.75H44.625C43.4562 83.75 42.5 82.8078 42.5 81.6562V77.4688C42.5 76.3172 43.4562 75.375 44.625 75.375H82.875C84.0437 75.375 85 76.3172 85 77.4688V81.6562ZM85 56.5312C85 57.6828 84.0437 58.625 82.875 58.625H44.625C43.4562 58.625 42.5 57.6828 42.5 56.5312V52.3438C42.5 51.1922 43.4562 50.25 44.625 50.25H82.875C84.0437 50.25 85 51.1922 85 52.3438V56.5312Z" fill="#F84C4D"/>
                            </svg>
                            <p className='darkBlue-color'>تراکنش من</p>
                        </Link>

                        <Link className='bg-white flex w-2/3 sm:w-72 flex-col items-center justify-center gap-7 py-16 rounded' href={appRoutes.SendMessages}>
                            <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_629_35)">
                                    <path d="M35.4062 43.4525H67.5938C69.3721 43.4525 70.8125 42.0121 70.8125 40.2337V37.015C70.8125 35.2366 69.3721 33.7962 67.5938 33.7962H35.4062C33.6279 33.7962 32.1875 35.2366 32.1875 37.015V40.2337C32.1875 42.0121 33.6279 43.4525 35.4062 43.4525ZM32.1875 59.5462C32.1875 61.3246 33.6279 62.765 35.4062 62.765H67.5938C69.3721 62.765 70.8125 61.3246 70.8125 59.5462V56.3275C70.8125 54.5491 69.3721 53.1087 67.5938 53.1087H35.4062C33.6279 53.1087 32.1875 54.5491 32.1875 56.3275V59.5462ZM51.5 83.9142C48.1968 83.9142 44.8935 82.8962 42.0731 80.8584L0 50.4653V93.3431C0 98.6762 4.32318 102.999 9.65625 102.999H93.3438C98.6768 102.999 103 98.6762 103 93.3431V50.4653L60.9269 80.8584C58.1065 82.8942 54.8032 83.9142 51.5 83.9142ZM99.3004 32.7803C97.5201 31.3842 95.8322 30.0705 93.3438 28.1916V19.3118C93.3438 13.9788 89.0206 9.65559 83.6875 9.65559H68.0866C67.4751 9.21301 66.9057 8.7986 66.268 8.3359C62.8863 5.86752 56.1672 -0.0710712 51.5 -0.000661048C46.8328 -0.0710712 40.1157 5.86752 36.732 8.3359C36.0943 8.7986 35.5249 9.21301 34.9134 9.65559H19.3125C13.9794 9.65559 9.65625 13.9788 9.65625 19.3118V28.1916C7.16775 30.0685 5.47992 31.3842 3.69955 32.7803C2.54715 33.6834 1.61524 34.8368 0.974303 36.1532C0.333367 37.4695 0.000198316 38.9144 0 40.3786L0 42.521L19.3125 56.4723V19.3118H83.6875V56.4723L103 42.521V40.3786C103 37.4133 101.636 34.611 99.3004 32.7803Z" fill="#F84C4D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_629_35">
                                        <rect width="103" height="103" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='darkBlue-color'>پیام های من</p>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    else
    {
        return (
            <></>
        )
    }

};

export default withAuth(Index);
