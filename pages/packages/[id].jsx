import {useRouter} from "next/router";
import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';

const Package=()=>{
    const router=useRouter();
    const {id}=router.query;
    return(<>
        <div className='flex flex-col items-center'>
            <div className='flex gap-8 w-11/12'>
                <div className='flex flex-col w-1/2 gap-6'>
                    <div className='flex bg-white items-center p-4 gap-28 rounded justify-center'>
                        <Image src={Professor} alt='picture'/>
                        <p>استاد امیر محمدی</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='darkBlue-color'>توضیحات دوره</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='bg-white p-6'>10 جلسه</div>
                        <div className='bg-white p-6'>15 ساعت و 40 دقیقه</div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 gap-6'>
                    <p className='darkBlue-color'>ویدئوهای دوره</p>
                    <div className='flex flex-col'>
                        <Accordion/>
                    </div>
                    <button className='bg-red btn-page text-white'>دوره را می خرم</button>
                    <div className='flex flex-col gap-3'>
                        <p>برچسب ها</p>
                        <div className='flex gap-5'>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                            <div className='bg-gray-200 rounded p-1'>برچسب ۱</div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
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