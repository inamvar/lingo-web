import Image from 'next/image';
import logo from '../public/picture/Logo.png';
import {getBanner, getBestSellingPackages, getPackagesList,getBestPackages, getSelectedPackagesList} from "../services/appServices";
import authContext from "../context/authContext";
import {useContext} from "react";
import PackageMultiItemCarousel from "../components/packageMultiItemCarousel";
import headerContext from "../context/headerContext";
import goldenBanner from "/public/picture/goldenBanner.png";
import Link from "next/link";
import appRoutes from "../common/appRoutes";
import CourseMultiItemCarousel from "../components/courseMultiItemCarousel";


const Home = (props)=>{

    const authCtx = useContext(authContext);
    const headerCtx= useContext(headerContext);
    const Packages = props.packages;
    const banner = props.banner;
    const bestSellingPackages = props.bestSellingPackages;
    const bestPackages = props.bestPackages;
    console.log(bestPackages);
    headerCtx.setHeaderItemState('/home');

    return (
        <div>
            <Link href={appRoutes.GoldenPackage}>
                <Image className='w-full' src={goldenBanner} />
            </Link>
            <div className='w-full flex items-center justify-center relative overflow-hidden max-h-[30rem]'>
                {banner!=null && banner.length>=1 && banner!=undefined ?<video className='vid-div-banner' src={banner[0].fileUrl} autoPlay loop muted><source src={banner[0].fileUrl}/></video>
                    : <Image quality={100} className='w-full vid-div-banner' alt='picture' src={bannerImage}/>}
                {/*<span className='w-full div-banner object-center bg-darkBlue opacity-60 absolute'></span>*/}
                <div className='div-v-banner w-11/12 sm:w-1/2 bg-white flex-col opacity-80 pb-5 md:pt-10 md:pb-20 gap-5 rounded'>
                    <Image quality={100}  className='w-32 md:w-56' src={logo} alt='logo'/>
                    {authCtx.authState.authenticated ? (
                        <p className='darkBlue-color'> {authCtx.authState.user.first_name} عزیز، خوش آمدید.</p>
                    ):(
                        <p className='darkBlue-color'> خوش آمدید.</p>
                    )}
                </div>
            </div>

            {Packages.length>0&&<div className='flex flex-col justify-center gap-9 items-center px-5 mb-8 mt-10'>
                <div>
                    <p className='text-2xl font-bold darkBlue-color'>پکیج ها</p>
                </div>
            </div>
            }
            <PackageMultiItemCarousel packages={Packages}/>

            {bestPackages.length>0&&
                <div className='flex justify-center items-center mt-7 w-full'>
                    <hr className="h-px my-5 sm:my-8 bg-paleBlue w-4/5 border-0"/>
                </div>
            }

            {bestPackages.length>0&&<div className='flex flex-col justify-center gap-9 items-center px-5 mb-8'>
                <div>
                    <p className='text-2xl font-bold darkBlue-color'>دوره های برتر</p>
                </div>
            </div>
            }
            <CourseMultiItemCarousel courses={bestPackages} />

            {bestSellingPackages.length>0&&
                <div className='flex justify-center items-center mt-7 w-full'>
                    <hr className="h-px my-5 sm:my-8 bg-paleBlue w-4/5 border-0"/>
                </div>
            }

            {bestSellingPackages.length>0&&(<div className='flex flex-col justify-center gap-9 items-center px-5 mb-8'>
                <div>
                    <p className='text-2xl font-bold darkBlue-color'>دوره های پرفروش</p>
                </div>
            </div>
                )}
            <CourseMultiItemCarousel courses={bestSellingPackages} />
        </div>
    );
};

export async function getServerSideProps(context)
{
    const packages = await getSelectedPackagesList(context);
    const bestSellingPackages = await getBestSellingPackages(context);
    const bestPackages = await getBestPackages(context);
    const banner = await getBanner(context);
    return{
        props: { packages,banner,bestSellingPackages,bestPackages }
    }
}

export default Home;
