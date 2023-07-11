import Image from 'next/image';
import bannerImage from '../public/picture/banner.png';
import logo from '../public/picture/Logo.png';
import {getBanner, getPackagesList} from "../services/appServices";
import authContext from "../context/authContext";
import {useContext} from "react";
import PackageMultiItemCarousel from "../components/packageMultiItemCarousel";
import moment from "moment";
import UseScript from "../components/useScript";
import headerContext from "../context/headerContext";


const Home=(props)=>{

    const authCtx = useContext(authContext);
  const  headerCtx= useContext(headerContext);
    const Packages = props.packages;
    const banner=props.banner;
        headerCtx.setHeaderItemState('/home');
    return (
        <>
            <div className='w-full flex items-center justify-center relative overflow-hidden m-h-50'>
                {banner!=null && banner.length>=1 && banner!=undefined ?<video className='vid-div-banner' src={banner[0].fileUrl} autoPlay loop muted><source  src={banner[0].fileUrl}/></video>
                    : <Image quality={100} className='w-full vid-div-banner' alt='picture' src={bannerImage}/>}
                {/*<Image className='w-full' alt='picture' src={bannerImage}/>*/}
                <span className='w-full div-banner object-center bg-darkBlue opacity-60 absolute'></span>
                <div className='div-v-banner w-11/12 sm:w-1/2 bg-white flex-col opacity-80 pb-5 md:pt-10 md:pb-20 sm:pb-20 gap-5 rounded'>
                    <Image quality={100}  className='w-32 md:w-56' src={logo} alt='logo'/>
                    {/*<p className='darkBlue-color text-xl font-bold'>لورم ایپسوم</p>*/}
                    {authCtx.authState.authenticated ? (
                        <p className='darkBlue-color'>کاربر {authCtx.authState.user.first_name + ' ' + authCtx.authState.user.last_name} عزیز، خوش آمدید.</p>
                    ):(
                        <p className='darkBlue-color'> خوش آمدید.</p>
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-center gap-9 items-center px-5 mt-9'>
                <div>
                    <p className='text-2xl font-bold darkBlue-color'>پکیج ها</p>
                </div>
            </div>
            <PackageMultiItemCarousel packages={Packages}/>
        </>
    );
};

export async function getServerSideProps(context)
{
    const packages = await getPackagesList(context);
    const banner = await getBanner(context);
    return{
        props: { packages,banner }
    }
}

export default Home;
