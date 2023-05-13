import pic from '../../../../public/picture/banner.png';
import AppRoutes from "../../../../common/appRoutes";
import Accordion from "../../../../components/accordion";
import {courseDetail, getVideoDetail} from "../../../../services/appServices";
import {AuthenticatedLink} from "../../../../components/authenticatedLink";
import Link from "next/link";

const Slug=(props)=>
{
    console.log(props.result);

    const result=props.result;
    const currentVideo=result.currentVideo;

    console.log(currentVideo);

    return(
        <>
            <div className='flex flex-col md:flex-row gap-5 p-3 justify-center items-center md:items-start'>
                <div className='w-11/12 md:w-1/3 order-last md:order-first'>
                    <Accordion chapters={result.chapters} />
                </div>
                <div className='w-11/12 md:w-2/3 flex order-first md:order-last flex-col gap-5'>
                    <div dangerouslySetInnerHTML={{ __html: currentVideo.embedPlayer }} />
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-lg'>{currentVideo.title}</p>
                        <p>{currentVideo.description!=undefined?currentVideo.description:'توضیحات ویدیو'}</p>
                        <div className='flex gap-2 mt-3'>
                            {currentVideo.examFileName!='' &&<><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 15.6986H0V10.4406H1.56524V14.3311H16.4348V10.4406H18L18 15.6986ZM9.78257 11.097H8.21736V0H9.7826L9.78257 11.097ZM8.99998 12.7134L3.21886 7.66263L4.32546 6.69583L8.99998 10.7798L13.6745 6.69583L14.7811 7.66263L8.99998 12.7134Z" fill="#F84C4D"/>
                            </svg>
                            <AuthenticatedLink filename={currentVideo.examFileName} url={`${currentVideo.examFileUrl}}`}>
                            دانلود
                            </AuthenticatedLink>
                            </> }
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <Link href={AppRoutes.Course(result.slug)} className='bg-red btn-page text-white text-center w-fit hidden md:block'>بازکشت به صفحه ی خرید دوره</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx){

    const res = ctx.query.slug;
    const slug = `${res[0]}/${res[1]}`;
    const result = await getVideoDetail(slug,ctx);
    return{
        props:{result}
    };
}

export default Slug;