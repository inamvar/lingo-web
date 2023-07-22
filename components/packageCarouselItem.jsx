import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function PackageCarouselItem(props)
{
    if(props.firstCourse!=undefined && props.firstCourse!=null){
        return(

            <Link className='item-size flex justify-center' href={APP_ROUTES.Course(props.firstCourse)}>
                <div style={{width:'90%'}}  className='flex flex-col rounded-xl bg-white p-3 w-full h-full justify-between'>
                    <div style={{height:"85%"}} className='relative w-full flex justify-center items-center'>
                        <div>
                            <Image quality={100} className='w-full h-full rounded' alt='picture' height={900} width={900} src={props.picture} />
                        </div>

                    </div>
                    <div style={{height:"10%"}} className='flex justify-center'>
                        <p className='grey-color'>{props.name}</p>
                        <p className='grey-color'>{props.title}</p>
                    </div>
                </div>
            </Link>
        )
    }
    else{
        return(
            <Link className='item-size flex justify-center' href={APP_ROUTES.Package(props.slug)}>
                <div style={{width:'90%'}}  className='flex flex-col rounded-xl bg-white p-3 w-full h-full justify-between'>
                    <div style={{height:"85%"}} className='relative w-full flex justify-center items-center'>
                        <div>
                            <Image quality={100}  className='w-full h-full rounded' alt='picture' height={450} width={450} src={props.picture}/>
                        </div>
                    </div>
                    <div style={{height:"10%"}} className='flex justify-center'>
                        <p className='grey-color'>{props.name}</p>
                        <p className='grey-color'>{props.title}</p>
                    </div>
                </div>
            </Link>
        )
    }

}