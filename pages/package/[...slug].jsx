import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';
import {getPackageCourseList} from "../../services/appServices";
import Course from '../../components/course';

const Package=(props)=>{

    const courses = props.result;

    return(
        <div className='flex justify-center items-center'>
            <div className='flex flex-col md:flex-row flex-wrap w-full lg:w-4/5 justify-evenly items-center'>
                {courses.map((course)=>
                    <Course key={course.index} name={course.title} slug={course.slug}/>
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