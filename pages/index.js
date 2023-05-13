import Image from 'next/image';
import banner from '../public/picture/banner.png';
import logo from '../public/picture/Logo.png';
import PackageCarousel from '../components/packageCarousel';
import {getPackagesList} from "../services/appServices";
import authContext from "../context/authContext";
import {useContext} from "react";

const Home=(props)=>{

    const authCtx = useContext(authContext);
    const Packages = props.packages;

        return (
            <>
                <div className='w-full flex items-center justify-center relative'>
                    <Image className='w-full' alt='picture' src={banner}/>
                    <span className='w-full div-banner object-center bg-darkBlue opacity-60 absolute'></span>
                    <div className='div-v-banner w-11/12 sm:w-1/4 bg-white flex-col opacity-90 pb-5 md:pb-10 sm:pb-20 gap-5'>
                        <Image className='w-32 md:w-56' src={logo} alt='logo'/>
                        <p className='darkBlue-color text-xl font-bold'>لورم ایپسوم</p>
                        {authCtx.authState.authenticated ? (
                            <p className='darkBlue-color'>کاربر {authCtx.authState.user.first_name + ' ' + authCtx.authState.user.last_name} عزیز، خوش آمدید.</p>
                        ):(
                            <p className='darkBlue-color'> خوش آمدید.</p>
                        )}

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-9'>
                    <div className='mb-6'>
                        <p className='text-2xl font-bold darkBlue-color'>پکیج ها</p>
                    </div>
                    <div className='flex overflow-hidden w-full justify-center'>
                         <PackageCarousel packages={Packages} />
                    </div>
                </div>
            </>
        );
};

export async function getServerSideProps(context)
{
    const packages = await getPackagesList(context);

    return{
        props: { packages }
    }
}

export default Home;
