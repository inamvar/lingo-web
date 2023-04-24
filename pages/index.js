import Head from 'next/head';
import Image from 'next/image';
import banner from '../public/picture/banner.png';
import coverBanner from '../public/picture/banner-cover.png';
import logo from '../public/picture/Logo.png';
import {getCredits} from "../services/appServices";
import useUser from '../hooks/useAuthenticate';

export default  function Home({result}) {

    const { user, authenticated } = useUser();

    console.log(user);
    console.log(authenticated);

    if (!user || !authenticated) {
        return <div className="p-16 bg-gray-800 h-screen">
            <h1>please login</h1>
        </div>;
    }

    // if (result.isSuccess) {
    //     return (
    //         <>
    //             <h1>main</h1>
    //             {/*{result.data.map((x) => {*/}
    //             {/*    return (*/}
    //             {/*        <h1 key={x.userId}>*/}
    //             {/*            {x.fullName}*/}
    //             {/*        </h1>*/}
    //             {/*    );*/}
    //             {/*})}*/}
    //         </>
    //     );
    // }

        return (
            <>
                <div className='w-full flex items-center justify-center relative'>
                    <Image className='w-full' src={banner}/>
                    <div className='w-full div-banner object-center opacity-90 absolute'>
                        <Image className='w-fit' src={coverBanner} />
                    </div>
                    <div className='div-v-banner w-1/4 bg-white flex-col opacity-90 pb-20 gap-5'>
                        <Image src={logo}/>
                        <p className='darkBlue-color text-xl font-bold'>لورم ایپسوم</p>
                        <p className='darkBlue-color'>کاربر مریم نظری عزیز، خوش آمدید.</p>
                    </div>
                </div>


                <h1>main</h1>
            </>
        );
        return (
            <div>
                <Head>
                    <title>لینگو</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
        )
}

// export async function getStaticProps() {
//     var result=await getCredits();
//     console.log(result);
//
//     return {
//         props: {
//         result
//         },
//     };
// }

export async function componentDidUpdate(){

}