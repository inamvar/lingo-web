import {getFreePackagesList} from "../../services/appServices";

const freePackage = (props) =>
{
    console.log(props.packages)
    return(
        <>

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