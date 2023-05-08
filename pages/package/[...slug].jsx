import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';
import {getPackageCourseList} from "../../services/appServices";
import Course from '../../components/course';

const Package=(props)=>{

    const courses = props.result;

    return(
        <div className='flex justify-center items-center'>
            <div className='flex flex-col md:flex-row flex-wrap gap-4 w-full xl:w-4/5 justify-evenly items-center'>
                {courses.map((course)=>
                    <div className='flex justify-center'>
                        <Course key={course.index} picture={course.thumbnailUrl} name={course.title} slug={course.slug}/>
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

    const result = await getPackageCourseList(slug);

    return{
         props: {result}
    }
}

export default Package;