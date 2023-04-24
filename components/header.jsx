import Image from 'next/image';
import Logo from '/public/picture/Logo.png';
import Link from 'next/link';
import appRoutes from "../common/appRoutes";
export default function Header()
{
    return(
        <div className='flex justify-between mb-10 mt-4 px-5'>
            <div>
                <Link href={appRoutes.Main}><Image className='w-32' alt='logo' src={Logo}/></Link>
            </div>
            <div className='flex flex-row w-1/3 justify-between items-center'>
                <a className='darkBlue-color'>خانه</a>
                <a className='darkBlue-color'>پکیج های رایگان</a>
                <a className='darkBlue-color'>پکیج های پیشرفته</a>
                <a className='darkBlue-color'>تخفیف</a>
            </div>
            <div className='flex w-1/9 justify-between gap-2 items-center divide-x-2 divide-gray-300'>
                <Link  href={appRoutes.Login} className='darkBlue-color px-2'>ورود کاربران</Link>
                <Link href={appRoutes.Signup} className='bg-red text-white btn-page sm:w-28'>ثبت نام</Link>
            </div>
        </div>
    )
}