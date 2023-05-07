import pic from '../../../../public/picture/banner.png';
import Image from "next/image";
import AppRoutes from "../../../../common/appRoutes";
import Link from "next/link";
import Accordion from "../../../../components/accordion";

export default function video()
{
    return(
        <>
            <div className='flex flex-col md:flex-row gap-5 p-3 justify-center items-center md:items-start'>
                <div className='w-11/12 md:w-1/3 order-last md:order-first'>
                    <Accordion />
                </div>
                <div className='w-11/12 md:w-2/3 flex order-first md:order-last flex-col gap-5'>
                    <div>
                        <Image src={pic} alt='picture'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-lg'>معرفی و آشنایی با دوره</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <a className='bg-red btn-page text-white text-center w-fit hidden md:block'>بازکشت به صفحه ی خرید دوره</a>
                    </div>
                </div>
            </div>
        </>
    )
}