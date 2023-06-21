import AppRoutes from "../../../../common/appRoutes";
import Accordion from "../../../../components/accordion";
import {getVideoDetail} from "../../../../services/appServices";
import {AuthenticatedLink} from "../../../../components/authenticatedLink";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import useScript from "../../../../components/useScript";
import {useRouter} from "next/router";
import authContext from "../../../../context/authContext";


const Slug=(props)=>
{
    const result=props.result;
    const currentVideo=result.currentVideo;
    const [videoPayerExist,setVideoPlayerExist]=useState(false);
    const router=useRouter();
    const isNavigatedByLink = router.asPath !== router.pathname;

    const authCtx = useContext(authContext);

    if (isNavigatedByLink) {
        console.log('User arrived via link');
    }
    else {
        console.log('User did not arrive via link');
    }
    useEffect(()=>{
        const hasSession= sessionStorage.getItem('reloadVideo');
        if (hasSession){
            sessionStorage.removeItem('reloadVideo');
            window.location.reload();
        }
        setVideoPlayerExist(true);
    },[]);

    useEffect(() => {
        // Create the video div element
        const videoDiv = document.getElementById('videoPlayerTag');
        if (videoDiv==null){
            return;
        }
        else if(videoPayerExist===true){
            if(authCtx.authState!=null && authCtx.authState!=undefined)
            {
                console.log('setting scripts');
                console.log('contex:');
                console.log(authCtx);
                console.log('-----------------');
                const script = document.createElement('script');
                script.src = 'https://negavid.com/uploads/native/dynamic-watermark/latest/negavid-dynamic-watermark-production-min.js';
                script.async = true;
                videoDiv.innerHTML = currentVideo.embedPlayer;
                const existingScript = document.querySelector(`script[src="${script.src}"]`);
                if (existingScript) {
                    return;
                }
                // Load the script asynchronously

                document.body.appendChild(script);
                let key="test";
                // Define the window.message variable after the script has loaded
                if (authCtx.authState.authenticated==true){
                    console.log('is authenticated');
                    key=authCtx.authState.user.email;
                    console.log('key is :'+key);
                }
                console.log('add onload');
                script.onload = () => {
                    window.message = [null,key, key, key, "#fff", "2"];
                };

            }

        }
        // Cleanup function to remove the video div when the component unmounts

    }, [videoPayerExist,authCtx.authState]);


    return(
        <div className='flex justify-center items-center mt-16'>
            <div className='flex flex-col md:flex-row gap-5 px-0 md:p-3 justify-center items-center md:items-start w-full lg:w-10/12'>
                <div className='w-11/12 md:w-1/3 order-last md:order-first'>
                    <Accordion chapters={result.chapters} />
                </div>
                <div className='w-full md:w-2/3 flex justify-center order-first md:order-last flex-col gap-5 rounded-none'>
                    {/*<Accordion chapters={result.chapters} />*/}
                    <div id='videoPlayerTag' className='video-div rounded-none'></div>
                    {/*<div id='videoPlayerTag' className='video-div rounded-none' dangerouslySetInnerHTML={{ __html: currentVideo.embedPlayer }} />*/}
                    <div className='flex flex-col gap-4 px-6 md:px-0 w-full'>
                        <p className='font-bold text-lg'>{currentVideo.title}</p>
                        {/*<p>{currentVideo.description!=undefined?currentVideo.description:'توضیحات ویدیو'}</p>*/}
                        <div dangerouslySetInnerHTML={{ __html: currentVideo.description }} />
                        <div className='flex gap-2 mt-3'>
                            {currentVideo.examFileName!=null &&<><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7188 0H24.2812C25.3723 0 26.25 0.877734 26.25 1.96875V15.75H33.4441C34.9043 15.75 35.6344 17.5137 34.6008 18.5473L22.1238 31.0324C21.5086 31.6477 20.4996 31.6477 19.8844 31.0324L7.39102 18.5473C6.35742 17.5137 7.0875 15.75 8.54766 15.75H15.75V1.96875C15.75 0.877734 16.6277 0 17.7188 0ZM42 30.8438V40.0312C42 41.1223 41.1223 42 40.0312 42H1.96875C0.877734 42 0 41.1223 0 40.0312V30.8438C0 29.7527 0.877734 28.875 1.96875 28.875H14.0027L18.0223 32.8945C19.6711 34.5434 22.3289 34.5434 23.9777 32.8945L27.9973 28.875H40.0312C41.1223 28.875 42 29.7527 42 30.8438ZM31.8281 38.0625C31.8281 37.1602 31.0898 36.4219 30.1875 36.4219C29.2852 36.4219 28.5469 37.1602 28.5469 38.0625C28.5469 38.9648 29.2852 39.7031 30.1875 39.7031C31.0898 39.7031 31.8281 38.9648 31.8281 38.0625ZM37.0781 38.0625C37.0781 37.1602 36.3398 36.4219 35.4375 36.4219C34.5352 36.4219 33.7969 37.1602 33.7969 38.0625C33.7969 38.9648 34.5352 39.7031 35.4375 39.7031C36.3398 39.7031 37.0781 38.9648 37.0781 38.0625Z" fill="#F84C4D"/>
                            </svg>
                                <a href={currentVideo.examFileUrl}>فایل ضمیمه دانلود</a>
                           {/* <AuthenticatedLink filename={currentVideo.examFileName} url={`${currentVideo.examFileUrl}}`}>*/}
                           {/*فایل ضمیمه دانلود*/}
                           {/* </AuthenticatedLink>*/}
                            </> }
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <Link href={AppRoutes.Course(result.slug)} className='bg-red btn-page hover:bg-red-600 text-white text-center w-fit hidden md:block'>بازکشت به صفحه ی خرید دوره</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export async function getServerSideProps(ctx){

    const res = ctx.query.slug;
    const slug = `${res[0]}/${res[1]}`;
    const result = await getVideoDetail(slug,ctx);

    return{
        props:{result}
    };
}

export default Slug;