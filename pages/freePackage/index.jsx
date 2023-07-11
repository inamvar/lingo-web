import {getFreePackagesList} from "../../services/appServices";
import FreeCourseMultiItemCarousel from "../../components/FreeCourseMultiItemCarousel";
import Meta from "../../components/meta";
import {useContext} from "react";
import HeaderContext from "../../context/headerContext";

const freePackage = (props) =>
{
    const headerCtx = useContext(HeaderContext);
    headerCtx.setHeaderItemState("/freePackages");
    const PackageCourses = props.packages;

    if(PackageCourses.length < 1)
    {
        return(
            <>
                <Meta title="پکیج های رایگان" />
                <div className='flex w-full h-screen justify-center items-center'>
                    <p className='darkBlue-color'>پکیج رایگان موجود نیست</p>
                </div>
            </>
        )
    }
    else
    {
        return(
            <>
                <Meta title="پکیج های رایگان" />
                <div className='flex flex-col px-2 sm:px-8 gap-16 mt-16 justify-center items-center'>
                    {PackageCourses.map((p)=>
                        <div className='flex flex-col gap-9 w-11/12 lg:w-10/12'>
                            <h2 className='darkBlue-color font-bold text-2xl'>{p.name}</h2>
                            <FreeCourseMultiItemCarousel courses={p.courses} />
                        </div>
                    )}
                </div>
            </>
        )
    }


}

export async function getServerSideProps(context)
{
    const packages = await getFreePackagesList(context);

    return{
        props: { packages }
    }
}

export default freePackage;