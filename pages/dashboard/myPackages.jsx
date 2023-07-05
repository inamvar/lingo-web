import Image from "next/image";
import {getMyCoursesList} from "../../services/appServices";
import Link from "next/link";
import AppRoutes from "../../common/appRoutes";
import {withAuth} from "../../components/Authorized";
import AuthContext from "../../context/authContext";
import {useContext} from "react";
import Meta from "../../components/meta";

const myPackages = ({packages,authContext}) =>
{
      if(authContext.authState.authenticated)
    {
        return(
            <>
                <Meta title="دوره های من" />
                <div className='flex flex-col justify-center items-center gap-7 mt-16'>

                    <div className='flex bg-white justify-evenly gap-3 items-center div-mypackage rounded p-5'>
                        <svg width="100" height="86" viewBox="0 0 112 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 91C7 94.8719 10.1281 98 14 98H49V63H7V91ZM63 98H98C101.872 98 105 94.8719 105 91V63H63V98ZM105 28H95.7906C97.1469 25.3531 98 22.4219 98 19.25C98 8.64062 89.3594 0 78.75 0C69.65 0 63.7656 4.65938 56.2188 14.9406C48.6719 4.65938 42.7875 0 33.6875 0C23.0781 0 14.4375 8.64062 14.4375 19.25C14.4375 22.4219 15.2687 25.3531 16.6469 28H7C3.12812 28 0 31.1281 0 35V52.5C0 54.425 1.575 56 3.5 56H108.5C110.425 56 112 54.425 112 52.5V35C112 31.1281 108.872 28 105 28ZM33.6656 28C28.8312 28 24.9156 24.0844 24.9156 19.25C24.9156 14.4156 28.8312 10.5 33.6656 10.5C38.0187 10.5 41.2344 11.2219 52.5 28H33.6656ZM78.75 28H59.9156C71.1594 11.2656 74.2875 10.5 78.75 10.5C83.5844 10.5 87.5 14.4156 87.5 19.25C87.5 24.0844 83.5844 28 78.75 28Z" fill="#F84C4D"/>
                        </svg>
                        <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>تعداد دوره های من:</p>
                        <p className='darkBlue-color font-bold text-sm md:text-lg whitespace-nowrap'>{packages.length}</p>
                    </div>

                    <div className='flex flex-col bg-white justify-evenly items-start div-mypackage gap-3 rounded p-7'>
                        <p className='darkBlue-color font-bold text-base md:text-lg'>دوره های خریداری شده:</p>

                        {packages.length>=1&&<div className='flex flex-col w-full divide-y-2 divide-gray-300 overflow-auto'>

                            {packages.map((p)=>{
                                return (
                                    <div className='flex items-center justify-evenly w-full py-4 gap-2'>
                                        <div className='w-1/3 flex justify-center'><Image className='rounded dashboard-pic' src={p.thumbnailImageUrl} width={150} height={150} quality={100} alt='picture'/></div>
                                        <p className='text-sm sm:text-base w-1/3 text-center'>{p.title}</p>
                                        <div className='w-1/3 text-center'><Link href={AppRoutes.Course(p.slug)} className='bg-cyan-500 text-xs sm:text-sm btn-page bg-red text-white p-btn-big hover:bg-red-800'>مشاهده</Link></div>
                                    </div>
                                )
                            })}

                        </div>
                        }

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
    const result = await getMyCoursesList(context);

    if(result!=undefined)
    {
        const packages = result;
        return{
            props: { packages }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }
}

export default withAuth(myPackages);