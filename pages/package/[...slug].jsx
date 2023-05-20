import {getPackageCourseList} from "../../services/appServices";
import PackageItem from '../../components/courseItem';
import router from "next/router";
import appRoutes from "../../common/appRoutes";
import {useEffect} from "react";


const Package=(props)=>{
    const courses = props.result;
    useEffect(() => {
        if (courses.length == 1) {
            const slug = courses[0].slug;
            window.location.href = appRoutes.Course(slug);
        }
    }, [courses]);
        return(
            <div className='flex justify-center items-center'>
                <div className='flex flex-col md:flex-row flex-wrap gap-4 w-full xl:w-4/5 justify-evenly items-center'>
                    {courses.map((course)=>
                        <div className='flex justify-center'>
                            <PackageItem key={course.index} picture={course.thumbnailImageUrl} name={course.title} slug={course.slug}/>
                        </div>
                    )}
                </div>
            </div>
        );
}

export async function getServerSideProps(ctx)
{
    const res = ctx.query.slug;

    const slug = `${res[0]}/${res[1]}`;
    const result = await getPackageCourseList(slug,ctx);
    return{
         props: {result}
    }
}

export default Package;