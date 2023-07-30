import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";
import Price from "./IRRPrice";

export default function CourseItem(props)
{
    return(
        <Link href={APP_ROUTES.Course(props.slug)}>
            <div className='flex flex-col justify-between rounded-xl bg-white p-3 h-full w-full gap-3'>
                <div style={{height:"80%"}} className='relative w-full flex justify-center items-center overflow-hidden'>
                    <div className='flex justify-center items-center h-full max-h-full'>
                        <Image className='h-auto w-auto max-h-full max-w-full rounded' width={450} height={450} quality={100} alt='picture' src={props.picture}/>
                    </div>
                </div>
                <div style={{height:"20%"}} className='flex justify-center items-center flex-col'>
                    <p className='grey-color text-xs sm:text-base'>{props.name}</p>
                    {props.isFree ? <div className='grey-color flex gap-2 text-xs sm:text-base pt-2 mt-2 pb-1 w-full justify-center text-lg border-gray-200 border-t-2'>رایگان</div> : <div className='paleGreen-color flex gap-2 text-xs sm:text-base pt-2 mt-2 pb-1 w-full justify-center text-lg border-gray-200 border-t-2'><Price pricings={props.pricings} />تومان</div>}
                </div>
            </div>
        </Link>
    )
}