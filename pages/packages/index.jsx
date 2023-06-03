import {getPackagesList} from "../../services/appServices";
import FreeCourseMultiItemCarousel from "../../components/FreeCourseMultiItemCarousel";
import PackagesMultiItemCarousel from "../../components/PackagesMultiItemCarousel";
import Meta from "../../components/meta";

const packages = ({packages}) =>
{
    console.log(packages[0].courses);

    if(packages.length < 1)
    {
        return(
            <>
                <Meta title="پکیج های آموزشی" />
                <div className='flex w-full h-screen justify-center items-center'>
                    <p className='darkBlue-color'>پکیج آموزشی موجود نیست</p>
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <Meta title="پکیج های آموزشی" />
                <div className='flex flex-col px-2 sm:px-8 gap-16 mt-16 justify-center items-center'>
                    {packages.map((p)=>
                        <div className='flex flex-col gap-9 w-11/12 lg:w-10/12'>
                            <h2 className='darkBlue-color font-bold text-2xl'>{p.name}</h2>
                            <PackagesMultiItemCarousel packages={p.courses}/>
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export async function getServerSideProps(context)
{
    const packages = await getPackagesList(context);
    return{
        props: { packages }
    }
}

export default packages;