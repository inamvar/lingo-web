import Image from "next/image";
import Professor from "../../../public/picture/Professor.png";
import Accordion from "../../../components/accordion";
import {courseDetail, getPackageCourseList} from "../../../services/appServices";
import Tags from '../../../components/tags';

const course = (props) =>
{
    const courseDetail = props.result;

    return(
        <>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col md:flex-row gap-8 md:w-11/12 w-full'>
                    <div className='flex flex-col w-11/12 md:w-1/2 gap-7'>
                        <div className='flex bg-white items-center p-4 gap-5 sm:gap-28 rounded justify-center'>
                            <Image src={Professor} alt='picture'/>
                            <p className='whitespace-nowrap'>استاد امیر محمدی</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='darkBlue-color font-bold text-md'>توضیحات دوره</p>
                            <p>{courseDetail.description}</p>
                        </div>
                        <div className='flex justify-center md:justify-evenly gap-6'>
                            <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-1/3 text-center sm:text-md text-sm'>10 جلسه</div>
                            <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-3/4 text-center sm:text-md text-sm'>15 ساعت و 40 دقیقه</div>
                        </div>
                    </div>
                    <div className='flex flex-col w-11/12 md:w-1/2 gap-6'>
                        <p className='darkBlue-color font-bold text-md'>ویدئوهای دوره</p>
                        <div className='flex flex-col'>
                            <Accordion chapters={courseDetail.chapters} />
                        </div>
                        <button className='bg-red btn-page text-white'>دوره را می خرم</button>
                        <div className='flex flex-col gap-3'>
                            <Tags tags={courseDetail.tags} />
                        </div>
                    </div>
                </div>
            <div>

                </div>
            </div>
        </>

)};

export async function getServerSideProps(context)
{
    const res = context.query.slug;
    const slug = `${res[0]}/${res[1]}`;

    const result = await courseDetail(slug,context);
    console.log(result);

    return{
        props: {result}
    }
}

export default course;