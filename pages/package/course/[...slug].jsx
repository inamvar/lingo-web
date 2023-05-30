import Accordion from "../../../components/accordion";
import {courseDetail, getPackageCourseList} from "../../../services/appServices";
import Tags from '../../../components/tags';
import Link from "next/link";
import AppRoutes from "../../../common/appRoutes";
import CourseMultiItemCarousel from "../../../components/courseMultiItemCarousel";
import Image from "next/image";
import Price from "../../../components/IRRPrice";


const course = (props) =>
{
    const courseDetail = props.result;
    const relatesCourses = props.relatesCourses;

    console.log(courseDetail)

    let num = 0;
    courseDetail.chapters.forEach((e,i)=>{
        num += e.videos.length;
    });

    return(
        <>
            <div className='flex flex-col items-center gap-8 mt-16'>
                <div className='flex flex-col md:flex-row gap-8 md:w-11/12 lg:w-10/12 w-full items-center md:items-start'>
                    <div className='flex flex-col w-11/12 md:w-1/2 gap-7'>
                        <div className='flex flex-col bg-white items-center p-6 gap-5 rounded-xl darkBlue-color justify-center'>
                            <p className='whitespace-nowrap font-bold text-lg sm:text-xl whitespace-pre-wrap'>{courseDetail.title}</p>
                            <div className='rounded'>
                                <Image src={courseDetail.thumbnailImageUrl} className='w-56 rounded m-w-pic-c' width={450} height={450} quality={100} alt='picture'/>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-evenly gap-6'>
                            <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-1/3 text-center darkBlue-color sm:text-md text-sm'>{num} جلسه </div>
                            <div className='bg-white whitespace-nowrap p-3 sm:p-6 font-bold rounded w-3/4 text-center darkBlue-color sm:text-md text-sm'>00:00:00</div>
                        </div>
                    </div>
                    <div className='flex flex-col w-11/12 md:w-1/2 gap-6'>

                        <div  className='flex flex-col gap-6'>
                            <p className='darkBlue-color font-bold text-lg sm:text-xl'>ویدئوهای دوره</p>
                            <div className='flex flex-col'>
                                {courseDetail.chapters.length>=1?<Accordion chapters={courseDetail.chapters} />:<div>در حال حاضر ویدیویی برای نمایش وجود ندارد</div>}
                            </div>
                        </div>

                        {courseDetail.costType!="Free"&&<div className='paleGreen-color flex gap-2 pt-2 mt-2 pb-1 w-full justify-start text-lg font-extrabold'><Price pricings={courseDetail.pricings} />تومان</div>}

                        <div className='flex flex-col gap-6'>
                            <div className='flex relative mt-5'>

                                {courseDetail.chapters.length>=1?<Link href={AppRoutes.PaymentDetail(courseDetail.slug)} className='bg-red btn-page text-white text-center w-full py-4'>دوره را می خرم</Link>:<p></p>}

                                {courseDetail.chapters.length>=1 && courseDetail.discount!=null &&<div className='absolute discount-icon'>
                                    <div className='relative text-white flex justify-center items-center'>
                                        <svg className='absolute' width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2211 14.9582C18.7732 12.5623 21.2661 11.1606 23.6001 11.9336L26.6014 12.9277C27.7808 13.3185 29.0731 13.1633 30.1267 12.5043L32.8072 10.8278C34.8915 9.52406 37.6458 10.2956 38.7495 12.4926L40.1686 15.3178C40.7264 16.4282 41.7499 17.2322 42.9608 17.5112L46.0417 18.2211C48.4377 18.7731 49.8394 21.266 49.0663 23.6001L48.0722 26.6014C47.6814 27.7808 47.8366 29.0732 48.4956 30.1267L50.1722 32.8072C51.4759 34.8915 50.7042 37.6458 48.5074 38.7494L45.6822 40.1686C44.5717 40.7264 43.7676 41.75 43.4888 42.9608L42.7788 46.0417C42.2268 48.4377 39.7339 49.8394 37.3998 49.0663L34.3986 48.0722C33.219 47.6814 31.9267 47.8366 30.8732 48.4955L28.1928 50.1722C26.1083 51.4759 23.3541 50.7042 22.2506 48.5073L20.8313 45.6822C20.2735 44.5717 19.2499 43.7676 18.0391 43.4887L14.9582 42.7788C12.5623 42.2267 11.1606 39.7338 11.9336 37.3998L12.9278 34.3986C13.3185 33.219 13.1633 31.9267 12.5044 30.8733L10.8278 28.1927C9.52403 26.1083 10.2957 23.3542 12.4926 22.2505L15.3178 20.8313C16.4281 20.2735 17.2322 19.2499 17.5112 18.0391L18.2211 14.9582Z" fill="#47CB78" stroke="#47CB78" stroke-width="18.7795"/>
                                        </svg>
                                        <p className='absolute discount-text'>%{courseDetail.discount.discountValue}</p>
                                    </div>
                                </div>
                                }

                                {/*{courseDetail.chapters.length>=1 && courseDetail.discount!=null && courseDetail.discount.discountValue !=0 ?<svg className='absolute discount-icon' width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2211 14.9582C18.7732 12.5623 21.2661 11.1606 23.6001 11.9336L26.6014 12.9277C27.7808 13.3185 29.0731 13.1633 30.1267 12.5043L32.8072 10.8278C34.8915 9.52406 37.6458 10.2956 38.7495 12.4926L40.1686 15.3178C40.7264 16.4282 41.7499 17.2322 42.9608 17.5112L46.0417 18.2211C48.4377 18.7731 49.8394 21.266 49.0663 23.6001L48.0722 26.6014C47.6814 27.7808 47.8366 29.0732 48.4956 30.1267L50.1722 32.8072C51.4759 34.8915 50.7042 37.6458 48.5074 38.7494L45.6822 40.1686C44.5717 40.7264 43.7676 41.75 43.4888 42.9608L42.7788 46.0417C42.2268 48.4377 39.7339 49.8394 37.3998 49.0663L34.3986 48.0722C33.219 47.6814 31.9267 47.8366 30.8732 48.4955L28.1928 50.1722C26.1083 51.4759 23.3541 50.7042 22.2506 48.5073L20.8313 45.6822C20.2735 44.5717 19.2499 43.7676 18.0391 43.4887L14.9582 42.7788C12.5623 42.2267 11.1606 39.7338 11.9336 37.3998L12.9278 34.3986C13.3185 33.219 13.1633 31.9267 12.5044 30.8733L10.8278 28.1927C9.52403 26.1083 10.2957 23.3542 12.4926 22.2505L15.3178 20.8313C16.4281 20.2735 17.2322 19.2499 17.5112 18.0391L18.2211 14.9582Z" fill="#47CB78" stroke="#47CB78" stroke-width="18.7795"/></svg>:<p></p>}*/}
                                {/*{courseDetail.chapters.length>=1 && courseDetail.discount!=null && courseDetail.discount.discountValue !=0 ?<p className='absolute text-white discount-text'>%{courseDetail.discount.discountValue}</p>:<p></p>}*/}
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Tags tags={courseDetail.tags} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-8 w-11/12 lg:w-10/12 mt-9 items-center md:items-start'>
                    <p className='darkBlue-color font-bold text-lg sm:text-xl '>توضیحات دوره</p>
                    <div className='leading-9' dangerouslySetInnerHTML={{ __html: courseDetail.description }} />
                </div>
                <div className='flex flex-col justify-center items-center w-11/12 lg:w-10/12 gap-9 mt-9'>
                    <div>
                        <p className='text-lg sm:text-xl font-extrabold darkBlue-color'>دوره های مرتبط</p>
                    </div>
                </div>
                <div className='w-11/12 lg:w-10/12'>
                    <CourseMultiItemCarousel courses={relatesCourses} />
                </div>
            </div>
        </>
)};

export async function getServerSideProps(context)
{
    const res = context.query.slug;
    const slug = `${res[0]}/${res[1]}`;
    const result = await courseDetail(slug,context);
    const relatesCourses = await getPackageCourseList(result.package.id,context);

    return{
        props: {result,
            relatesCourses}
    }
}

export default course;