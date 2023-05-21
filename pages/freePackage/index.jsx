import {getFreePackagesList} from "../../services/appServices";
import PackageMultiItemCarousel from "../../components/packageMultiItemCarousel";

const freePackage = (props) =>
{
    console.log(props.packages);
    const packages = props.packages;

    return(
        <>
            <div className='flex flex-col px-2 sm:px-8 gap-32 mt-9'>
                {packages.map((p)=>
                    <div className='flex flex-col gap-9'>
                        <h2 className='darkBlue-color font-bold text-2xl'>{p.name}</h2>
                        <PackageMultiItemCarousel packages={p.courses} />
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