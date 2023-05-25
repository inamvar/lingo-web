import Image from 'next/image';
import Link from 'next/link';
import APP_ROUTES from "../common/appRoutes";

export default function CourseCarouselItem(props)
{
    props.pricings.map((p)=>
    {
        if(p.currencyType = "IRR")
        {
            // console.log(p.amount);
        }
    })

    return(
        <Link className='item-size flex justify-center' href={APP_ROUTES.Course(props.slug)}>
            <div style={{width:'90%'}}  className='flex flex-col rounded-xl bg-white p-3 w-full h-full justify-between gap-3'>
                <div style={{height:"85%"}} className='relative w-full'>
                    {/*<span className='w-full div-banner object-center bg-darkBlue opacity-30 absolute'></span>*/}
                    <Image quality={100} className='w-full h-full rounded' alt='picture' height={900} width={900} src={props.picture}/>
                </div>
                <div style={{height:"15%"}} className='flex flex-col items-center justify-center'>
                    <p className='grey-color'>{props.name}</p>
                    <p className='grey-color'>{props.title}</p>
                    {/*<hr className='h-52 border border-black'/>*/}
                    {/*<div className='border-t-2'>*/}
                    {/*    {props.pricings.map((p)=> {*/}
                    {/*        // console.log(p)*/}
                    {/*        if(p.currencyType == "IRR")*/}
                    {/*        {*/}
                    {/*            console.log(p.amount)*/}
                    {/*            const price = p.amount.toLocaleString();*/}
                    {/*            // console.log(price);*/}
                    {/*            return (<p className='green-color'>{price}</p>)*/}
                    {/*        }*/}
                    {/*    })*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
            </div>
        </Link>
    )
}