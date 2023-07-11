import {getPackageCourseList} from "../../services/appServices";
import CourseItem from '../../components/courseItem';
import Meta from "../../components/meta";
import HeaderContext from "../../context/headerContext";
import {useContext} from "react";

const Package=(props)=>{

    const courses = props.result;
    console.log(courses)

    const headerCtx = useContext(HeaderContext);
    headerCtx.setHeaderItemState("/");

        return(
            <div className='flex justify-center items-center px-4 mt-16'>
                <Meta title="" />
                <div className='flex flex-col md:flex-row flex-wrap gap-4 w-full xl:w-4/5 justify-evenly items-center'>
                    {courses.map((course)=>
                        <div className='flex justify-center course-item'>
                            <CourseItem key={course.index} picture={course.thumbnailImageUrl} pricings={course.pricings} name={course.title} slug={course.slug}/>
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