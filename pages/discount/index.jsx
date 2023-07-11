import picDiscount from "../../public/picture/discount.png";
import Image from "next/image";
import Meta from "../../components/meta";
import HeaderContext from "../../context/headerContext";
import {useContext} from "react";

export default function discount()
{
    const headerCtx = useContext(HeaderContext);
    headerCtx.setHeaderItemState("/discount");

    return(
        <>
            <Meta title="تخفیفات" />
            <div className='flex flex-col justify-center items-center gap-7'>

                <Image src={picDiscount} alt="pic" width={400} height={400} quality={100}/>
                <p className='darkBlue-color font-bold text-lg'>تخفیف های لینگو</p>

                <div className='w-full min-h-[10rem] relative'>

                    <div className='flex justify-center items-center gap-4 w-full'>

                        <div className='w-1/3 flex justify-end'>
                            <div className='bg-paleRed rounded-xl w-80 p-5 '>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-1/8'>
                            <span className='bg-red rounded-full red-color w-5 h-5'></span>
                            {/*<span className='h-full w-4 border border-red'></span>*/}
                            <hr className='m-h-discount border absolute top-0 border-red' />
                            {/*<div className="inline-block h-full w-0.5 self-stretch bg-red"></div>*/}
                        </div>

                        <p className='darkBlue-color font-bold text-lg w-1/3'>%20</p>
                    </div>

                    <div className='flex justify-center items-center gap-4 w-full '>

                        <p className='darkBlue-color font-bold text-lg w-1/3 text-left'>%30</p>

                        <div className='relative flex justify-center items-center w-1/8'>
                            <span className='bg-red rounded-full absolute red-color w-5 h-5'></span>
                            <hr className='m-h-discount border border-red' />
                        </div>

                        <div className='w-1/3 flex justify-start'>
                            <div className='bg-paleRed rounded-xl w-80 p-5 '>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center gap-4 w-full '>

                        <div className='w-1/3 flex justify-end'>
                            <div className='bg-paleRed rounded-xl w-80 p-5 '>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </div>
                        </div>

                        <div className='relative flex justify-center items-center w-1/8'>
                            <span className='bg-red rounded-full absolute red-color w-5 h-5'></span>
                            <hr className='m-h-discount border border-red' />
                        </div>

                        <p className='darkBlue-color font-bold text-lg w-1/3'>%40</p>
                    </div>

                    <div className='flex justify-center items-center gap-4 w-full '>

                        <p className='darkBlue-color font-bold text-lg w-1/3 text-left'>%50</p>

                        <div className='relative flex justify-center items-center w-1/8'>
                            <span className='bg-red rounded-full absolute red-color w-5 h-5'></span>
                            <hr className='m-h-discount border border-red' />
                        </div>

                        <div className='w-1/3 flex justify-start'>
                            <div className='bg-paleRed rounded-xl w-80 p-5 '>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}