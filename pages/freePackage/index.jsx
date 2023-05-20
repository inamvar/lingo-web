import {getFreePackagesList} from '../../services/appServices';

const freePackage = (props) =>
{
    return(
        <>
            <h1>free package</h1>
        </>
    )
}

// export async function getServerSideProps(context)
// {
//     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
//     const result = await getFreePackagesList(context);
//     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",result);
//
//     return{
//         props:result
//     }
// }

export default freePackage;