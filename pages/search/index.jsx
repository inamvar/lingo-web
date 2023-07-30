import {getSearchResult} from "../../services/clientAppService";
import Meta from "../../components/meta";
import CourseItem from "../../components/courseItem";

function search({resultSearch})
{
    console.log(resultSearch);
    const courses = resultSearch;
    return(
        <>
            <div className='flex justify-center items-center px-4 mt-16'>
                <Meta title="" />
                <div className='flex flex-col md:flex-row flex-wrap gap-9 w-full xl:w-4/5 justify-center items-center'>
                    {courses.map((i)=>
                        <div className='flex justify-center course-item'>
                            <CourseItem key={i.index} picture={i.thumbnailUrl} pricings={i.pricings} name={i.title} slug={i.slug}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context)
{
    const id = context.query.id;
    const resultSearch = await getSearchResult(id);
    return{
        props: { resultSearch }
    }
}

export default search;