import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
} from '@chakra-ui/react';
import Link from "next/link";
import appRoutes from "../common/appRoutes";
import AppRoutes from "../common/appRoutes";

export default function accordion(props)
{
    const chapters = props.chapters;

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

                                        <Link href={vid.isFree?appRoutes.Video(vid.slug):appRoutes.Cart} className='flex items-center justify-center gap-1 w-1/6 sm:w-1/5'>
                                            {vid.isFree? <p className='text-sm hidden lg:block'>نمایش</p>:<p className='text-white text-sm hidden lg:block'>نمایش</p>}
                                            <div>
                                                {vid.isFree?<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1049 7.96587L2.7474 0.243722C1.6621 -0.383401 0 0.225169 0 1.77628V17.2169C0 18.6084 1.54446 19.447 2.7474 18.7494L16.1049 11.031C17.2965 10.3445 17.3003 8.65237 16.1049 7.96587Z" fill="#525252"/></svg>
                                                    :
                                                    <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.5357 11.375H19.3036V7.71875C19.3036 3.46328 15.8022 0 11.5 0C7.19777 0 3.69643 3.46328 3.69643 7.71875V11.375H2.46429C1.10379 11.375 0 12.4668 0 13.8125V23.5625C0 24.9082 1.10379 26 2.46429 26H20.5357C21.8962 26 23 24.9082 23 23.5625C23 22.2168 23 13.8125 23 13.8125C23 12.4668 21.8962 11.375 20.5357 11.375ZM15.1964 11.375H7.80357V7.71875C7.80357 5.70273 9.46183 4.0625 11.5 4.0625C13.5382 4.0625 15.1964 5.70273 15.1964 7.71875V11.375Z" fill="#9E9E9E"/>
                                                    </svg>

                                                }
                                            </div>
                                        </Link>
                                </div>
                            </AccordionPanel>
                        )}
                    </AccordionItem>
                )}

                {/*<AccordionItem className='bg-white rounded'>*/}
                {/*    <h2>*/}
                {/*        <AccordionButton>*/}
                {/*            <Box as="span" flex='1' textAlign='right'>*/}
                {/*                <p className='text-md font-bold'>مقدمه</p>*/}
                {/*            </Box>*/}
                {/*            <AccordionIcon />*/}
                {/*        </AccordionButton>*/}
                {/*    </h2>*/}

                {/*    <AccordionPanel pb={4}>*/}
                {/*        <div className='flex justify-between gap-1 sm:gap-2'>*/}

                {/*            <div className='flex items-center justify-between w-4/5 gap-2'>*/}
                {/*                <div className='flex items-center gap-1'>*/}
                {/*                    <svg className='w-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                        <path d="M9.70134 13.7759L23.2847 20.1267L9.70134 26.4775V13.7759ZM19.8646 20.1267L11.1493 16.0521V24.2027L19.8646 20.1267ZM0 0H32V32H0V0ZM30.552 1.44797H1.44797V30.552H30.552V1.44797ZM32 9.84616H0V0H32V9.84616ZM1.44797 8.39819H30.552V1.44797H1.44797V8.39819ZM7.67422 5.64706H4.92312V4.19906H7.67422V5.64706ZM13.1765 5.64706H10.4253V4.19906H13.1765V5.64706ZM18.8235 5.64706H16.0724V4.19906H18.8235V5.64706Z" fill="black"/>*/}
                {/*                    </svg>*/}
                {/*                    <p className='text-xs sm:text-sm'>معرفی و آشنایی با دوره</p>*/}
                {/*                </div>*/}
                {/*                <div className='flex w-1/5 items-center justify-center bg-darkGreen rounded-2xl text-white'>*/}
                {/*                    <span className='text-sm p-1'>رایگان</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}


                {/*            <div className='flex items-center justify-start gap-3 w-1/6 sm:w-1/5'>*/}
                {/*                <p className='text-sm'>نمایش</p>*/}
                {/*                <svg className='hidden sm:block' width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                    <path d="M16.3345 6.30321e-05C25.2432 0.00406557 32.4637 7.22695 32.4637 16.1363C32.4637 20.5887 30.6604 24.6198 27.7444 27.5394L27.7446 27.5392C24.8061 30.5796 20.6916 32.4672 16.1362 32.4672C7.22443 32.4672 0 25.2428 0 16.331C0 11.7774 1.88617 7.66433 4.91988 4.7305L4.92439 4.72618C7.82828 1.80682 11.8483 0 16.2903 0C16.3059 0 16.3214 0 16.3369 6.30321e-05H16.3345H16.3345ZM16.3345 30.121C24.058 30.121 30.3192 23.8598 30.3192 16.1363C30.3192 8.41274 24.058 2.1516 16.3345 2.1516C8.61091 2.1516 2.34974 8.41271 2.34974 16.1362C2.35873 23.8561 8.61451 30.112 16.3336 30.1209H16.3345V30.121ZM11.1565 7.4672L26.7692 16.1363L11.1565 24.8054V7.4672ZM22.3372 16.1363L13.308 11.1161V21.1564L22.3372 16.1363Z" fill="black"/>*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </AccordionPanel>*/}

                {/*    <AccordionPanel pb={4}>*/}
                {/*        <div className='flex justify-between'>*/}
                {/*            <div className='flex items-center justify-start w-4/5 gap-2'>*/}
                {/*                <svg className='w-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                    <path d="M9.70134 13.7759L23.2847 20.1267L9.70134 26.4775V13.7759ZM19.8646 20.1267L11.1493 16.0521V24.2027L19.8646 20.1267ZM0 0H32V32H0V0ZM30.552 1.44797H1.44797V30.552H30.552V1.44797ZM32 9.84616H0V0H32V9.84616ZM1.44797 8.39819H30.552V1.44797H1.44797V8.39819ZM7.67422 5.64706H4.92312V4.19906H7.67422V5.64706ZM13.1765 5.64706H10.4253V4.19906H13.1765V5.64706ZM18.8235 5.64706H16.0724V4.19906H18.8235V5.64706Z" fill="black"/>*/}
                {/*                </svg>*/}
                {/*                <p className='text-xs sm:text-sm'>مقدمه ی کتاب</p>*/}
                {/*            </div>*/}
                {/*            <div className='flex items-center w-1/6 sm:w-1/5 gap-4 justify-start'>*/}
                {/*                <p className='grey-color text-sm'>نمایش</p>*/}
                {/*                <svg className='hidden sm:block' width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                    <path d="M0 8.37464H14V21.4485H0V8.37464ZM13.0251 9.34958H0.974899V20.4735H13.0251L13.0251 9.34958ZM6.99997 2.09343e-05C9.83619 0.00333036 12.1345 2.30165 12.1379 5.13756V9.34954H1.86208V5.13789C1.86543 2.30167 4.16374 0.00333038 6.99965 0L6.99997 2.09343e-05ZM11.1629 8.37464V5.13789C11.1629 2.83874 9.2991 0.97492 6.99997 0.97492C4.70084 0.97492 2.837 2.83874 2.837 5.13789V8.37464H11.1629ZM6.99997 12.0989C7.7807 12.0989 8.4136 12.7318 8.4136 13.5125C8.4136 14.2932 7.7807 14.9262 6.99997 14.9262C6.21924 14.9262 5.58634 14.2933 5.58634 13.5126C5.58743 12.7322 6.21968 12.1 6.99986 12.0989H6.99997ZM6.99997 13.9512C7.24227 13.9512 7.43868 13.7548 7.43868 13.5125C7.43868 13.2702 7.24225 13.0738 6.99997 13.0738C6.75767 13.0738 6.56126 13.2702 6.56126 13.5125C6.5618 13.7546 6.7579 13.9507 6.99993 13.9512H6.99997ZM7.48744 18.1727H6.51254V14.4484H7.48746L7.48744 18.1727Z" fill="black" fill-opacity="0.4"/>*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </AccordionPanel>*/}
                {/*</AccordionItem>*/}

                {/*<AccordionItem className='bg-white rounded'>*/}
                {/*    <h2>*/}
                {/*        <AccordionButton>*/}
                {/*            <Box as="span" flex='1' textAlign='right'>*/}
                {/*                <p className='text-md font-bold'>یونیت 1 درس A</p>*/}
                {/*            </Box>*/}
                {/*            <AccordionIcon />*/}
                {/*        </AccordionButton>*/}
                {/*    </h2>*/}
                {/*    <AccordionPanel pb={4}>*/}
                {/*        Lorem*/}
                {/*    </AccordionPanel>*/}
                {/*</AccordionItem>*/}

            </Accordion>
        </>
    )
}
