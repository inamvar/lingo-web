import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
} from '@chakra-ui/react';
import Link from "next/link";
import appRoutes from "../common/appRoutes";
import HardRefreshLink from "./hardRefreshLink";
export default function accordion(props)
{
    const chapters = props.chapters;
    const slug = props.slug;

    const gotoDetail=()=>{
       const hasSession= sessionStorage.getItem('reloadVideo');
        if (hasSession == undefined){
            sessionStorage.setItem('reloadVideo',true);
        }
    }

    return(
        <>
            <Accordion allowToggle className='flex flex-col gap-2'>

                {chapters.map((chapter)=>
                    <AccordionItem key={chapter.id} className='bg-white rounded'>

                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    <p className='text-md font-bold'>{chapter.title}</p>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        { chapter.videos.map((vid)=>
                            <AccordionPanel key={vid.id} pb={4}>
                                <div className='flex justify-between gap-1 sm:gap-2'>

                                    <div className='flex items-center justify-between w-4/5 gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.5 0H30V1.30208C30 1.73177 29.6625 2.08333 29.25 2.08333H26.75C26.3375 2.08333 26 1.73177 26 1.30208V0H6V1.30208C6 1.73177 5.6625 2.08333 5.25 2.08333H2.75C2.3375 2.08333 2 1.73177 2 1.30208V0H1.5C0.66875 0 0 0.696615 0 1.5625V23.4375C0 24.3034 0.66875 25 1.5 25H2V23.6979C2 23.2682 2.3375 22.9167 2.75 22.9167H5.25C5.6625 22.9167 6 23.2682 6 23.6979V25H26V23.6979C26 23.2682 26.3375 22.9167 26.75 22.9167H29.25C29.6625 22.9167 30 23.2682 30 23.6979V25H30.5C31.3312 25 32 24.3034 32 23.4375V1.5625C32 0.696615 31.3312 0 30.5 0ZM6 20.0521C6 20.4818 5.6625 20.8333 5.25 20.8333H2.75C2.3375 20.8333 2 20.4818 2 20.0521V17.4479C2 17.0182 2.3375 16.6667 2.75 16.6667H5.25C5.6625 16.6667 6 17.0182 6 17.4479V20.0521ZM6 13.8021C6 14.2318 5.6625 14.5833 5.25 14.5833H2.75C2.3375 14.5833 2 14.2318 2 13.8021V11.1979C2 10.7682 2.3375 10.4167 2.75 10.4167H5.25C5.6625 10.4167 6 10.7682 6 11.1979V13.8021ZM6 7.55208C6 7.98177 5.6625 8.33333 5.25 8.33333H2.75C2.3375 8.33333 2 7.98177 2 7.55208V4.94792C2 4.51823 2.3375 4.16667 2.75 4.16667H5.25C5.6625 4.16667 6 4.51823 6 4.94792V7.55208ZM23 21.0938C23 21.5234 22.6625 21.875 22.25 21.875H9.75C9.3375 21.875 9 21.5234 9 21.0938V14.8437C9 14.4141 9.3375 14.0625 9.75 14.0625H22.25C22.6625 14.0625 23 14.4141 23 14.8437V21.0938ZM23 10.1562C23 10.5859 22.6625 10.9375 22.25 10.9375H9.75C9.3375 10.9375 9 10.5859 9 10.1562V3.90625C9 3.47656 9.3375 3.125 9.75 3.125H22.25C22.6625 3.125 23 3.47656 23 3.90625V10.1562ZM30 20.0521C30 20.4818 29.6625 20.8333 29.25 20.8333H26.75C26.3375 20.8333 26 20.4818 26 20.0521V17.4479C26 17.0182 26.3375 16.6667 26.75 16.6667H29.25C29.6625 16.6667 30 17.0182 30 17.4479V20.0521ZM30 13.8021C30 14.2318 29.6625 14.5833 29.25 14.5833H26.75C26.3375 14.5833 26 14.2318 26 13.8021V11.1979C26 10.7682 26.3375 10.4167 26.75 10.4167H29.25C29.6625 10.4167 30 10.7682 30 11.1979V13.8021ZM30 7.55208C30 7.98177 29.6625 8.33333 29.25 8.33333H26.75C26.3375 8.33333 26 7.98177 26 7.55208V4.94792C26 4.51823 26.3375 4.16667 26.75 4.16667H29.25C29.6625 4.16667 30 4.51823 30 4.94792V7.55208Z" fill="#525252"/>
                                            </svg>
                                            <p className='text-xs sm:text-sm'>{vid.title}</p>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            {vid.isFree?<span className='text-sm bg-darkGreen rounded-2xl text-white py-1 px-2'>رایگان</span>:<span></span>}
                                        </div>
                                    </div>

                                        <Link onClick={gotoDetail}  href={vid.isFree?appRoutes.Video(vid.slug):appRoutes.PaymentDetail(slug)} className='flex items-center justify-center gap-1 w-1/6 sm:w-1/5'>
                                            {vid.isFree? <p className='text-sm hidden lg:block'>نمایش</p>:<p className='text-white text-sm hidden lg:block'>نمایش</p>}
                                            <div>
                                                {vid.isFree?<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1049 7.96587L2.7474 0.243722C1.6621 -0.383401 0 0.225169 0 1.77628V17.2169C0 18.6084 1.54446 19.447 2.7474 18.7494L16.1049 11.031C17.2965 10.3445 17.3003 8.65237 16.1049 7.96587Z" fill="#525252"/></svg>
                                                    : <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5357 11.375H19.3036V7.71875C19.3036 3.46328 15.8022 0 11.5 0C7.19777 0 3.69643 3.46328 3.69643 7.71875V11.375H2.46429C1.10379 11.375 0 12.4668 0 13.8125V23.5625C0 24.9082 1.10379 26 2.46429 26H20.5357C21.8962 26 23 24.9082 23 23.5625C23 22.2168 23 13.8125 23 13.8125C23 12.4668 21.8962 11.375 20.5357 11.375ZM15.1964 11.375H7.80357V7.71875C7.80357 5.70273 9.46183 4.0625 11.5 4.0625C13.5382 4.0625 15.1964 5.70273 15.1964 7.71875V11.375Z" fill="#9E9E9E"/></svg>
                                                }
                                            </div>
                                        </Link>
                                </div>
                            </AccordionPanel>
                        )}

                    </AccordionItem>
                )}
            </Accordion>
        </>
    )
}
