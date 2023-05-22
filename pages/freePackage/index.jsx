import {getFreePackagesList} from "../../services/appServices";
import PackageMultiItemCarousel from "../../components/packageMultiItemCarousel";
import CourseMultiItemCarousel from "../../components/FreeCourseMultiItemCarousel";
import packageCarousel from "../../components/packageCarousel";

const freePackage = (props) =>
{
    const PackageCourses = props.packages;
    console.log(PackageCourses);

    return(
        <>
            <div className='flex flex-col px-2 sm:px-8 gap-32 mt-16 justify-center items-center'>
                {PackageCourses.map((p)=>
                    <div className='flex flex-col gap-9 w-11/12 lg:w-10/12'>
                        <h2 className='darkBlue-color font-bold text-2xl'>{p.name}</h2>
                        <CourseMultiItemCarousel courses={p.courses} />
                    </div>
                )}
            </div>
        </>
    )
}

export async function getServerSideProps(context)
{
    const packages = await getFreePackagesList(context);

    return{
        props: { packages }
    }
}

export default freePackage;