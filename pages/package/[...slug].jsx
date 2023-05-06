import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';
import {getPackageCourseList} from "../../services/appServices";

const Package=(props)=>{

    console.log(props.result)

    return(
        <>
            <p>corses List</p>
        </>
    );
}

export async function getServerSideProps(ctx)
{
    const res = ctx.query.slug;
    console.log(res);

    const slug = `${res[0]}/${res[1]}`;

    const result = await getPackageCourseList(slug);

    return{
         props: {result}
    }
}

export default Package;