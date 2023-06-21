import AppRoutes from "../../common/appRoutes";
import Link from "next/link";
import {courseDetail, getGoldenPackage, getPackageCourseList} from "../../services/appServices";
import Meta from "../../components/meta";

const goldenPackage = ({GoldenPackage}) =>
{
    const GPackage = GoldenPackage;
    console.log(GPackage[0].courses[0].chapters[0].videos[0].embedPlayer);
    const embedPlayer = GPackage[0].courses[0].chapters[0].videos[0].embedPlayer;

    if(GPackage.length>=1)
    {
        return(
            <>
                <Meta title="پکیج طلایی"/>
                <div className='flex flex-col justify-center items-center mt-16 gap-5'>
                    <div className='video-div rounded-none h-96 w-full md:w-4/5' />
                    <div className='video-div rounded-none' dangerouslySetInnerHTML={{ __html: embedPlayer }} />
                    <p className='darkBlue-color font-bold text-lg sm:text-xl w-11/12 md:w-4/5'>معرفی و آشنایی با پکیج طلائی</p>
                    <div className='w-11/12 md:w-4/5 leading-9' dangerouslySetInnerHTML={{ __html: GPackage[0].description }} />
                    <Link href={AppRoutes.PaymentDetail(GPackage[0].slug+"/GoldenPackage")} className='bg-red rounded text-white text-center px-8 py-4 hover:bg-red-600'>پکیح طلائی را میخرم</Link>
                </div>
            </>
        )
    }
    else
    {
        return(
            <>
                <div className='flex w-full h-screen justify-center items-center'>
                    <p className='darkBlue-color'>پکیج طلایی موجود نیست</p>
                </div>
            </>
        )
    }
}

export async function getServerSideProps(context)
{
    const GoldenPackage = await getGoldenPackage();

    return{
        props: {GoldenPackage}
    }
}

export default goldenPackage;