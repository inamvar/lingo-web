import Image from "next/image";
import Professor from '../../public/picture/Professor.png';
import Accordion from '../../components/accordion';
import {getPackageCourseList} from "../../services/appServices";

const Package=(props)=>{

    return(
        <>
            <p>corses List</p>
        </>
    );
}

export async function getServerSideProps()
{
    const result = await getPackageCourseList();

    console.log(result);

    return{
         props:result
    }
}

export default Package;