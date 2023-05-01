import {useRouter} from "next/router";
import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';

const Package=()=>{
    const router=useRouter();
    const {id}=router.query;
    return(<>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:flex-row gap-8 md:w-11/12 w-full items-center'>
                <div className='flex flex-col w-11/12 md:w-1/2 gap-7'>
                    <div className='flex bg-white items-center p-4 gap-5 sm:gap-28 rounded justify-center'>
                        <Image src={Professor} alt='picture'/>
                        <p className='whitespace-nowrap'>استاد امیر محمدی</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='darkBlue-color font-bold text-md'>توضیحات دوره</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                    <div className='flex justify-center md:justify-evenly gap-6'>
                        <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-1/3 text-center sm:text-md text-sm'>10 جلسه</div>
                        <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-3/4 text-center sm:text-md text-sm'>15 ساعت و 40 دقیقه</div>
                    </div>
                </div>
                <div className='flex flex-col w-11/12 md:w-1/2 gap-6'>
                    <p className='darkBlue-color font-bold text-md'>ویدئوهای دوره</p>
                    <div className='flex flex-col'>
                        <Accordion/>
                    </div>
                    <button className='bg-red btn-page text-white'>دوره را می خرم</button>
                    <div className='flex flex-col gap-3'>
                        <p className='darkBlue-color font-bold'>برچسب ها</p>
                        <div className='flex gap-5 flex-wrap'>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>برچسب ۱</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>);
}

export const getServerSideProps=(ctx)=>{

    return{
        props:{

        }
    };
}

export default Package;