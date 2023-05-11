import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
} from '@chakra-ui/react';
import Link from "next/link";
import appRoutes from "../common/appRoutes";

export default function accordion(props)
{
    const chapters = props.chapters;
    console.log(chapters);
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

                                    <div className='flex items-center justify-between w-4/5 gap-2'>
                                        <div className='flex items-center'>
                                            <svg className='w-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.70134 13.7759L23.2847 20.1267L9.70134 26.4775V13.7759ZM19.8646 20.1267L11.1493 16.0521V24.2027L19.8646 20.1267ZM0 0H32V32H0V0ZM30.552 1.44797H1.44797V30.552H30.552V1.44797ZM32 9.84616H0V0H32V9.84616ZM1.44797 8.39819H30.552V1.44797H1.44797V8.39819ZM7.67422 5.64706H4.92312V4.19906H7.67422V5.64706ZM13.1765 5.64706H10.4253V4.19906H13.1765V5.64706ZM18.8235 5.64706H16.0724V4.19906H18.8235V5.64706Z" fill="black"/>
                                            </svg>
                                            <p className='text-xs sm:text-sm'>{vid.title}</p>
                                        </div>
                                        <div className='flex w-1/5 items-center justify-center bg-darkGreen rounded-2xl text-white'>
                                            {vid.isFree?<span className='text-sm p-1'>رایگان</span>:<span className='text-sm p-1'>غیر رایگان</span>}
                                        </div>
                                    </div>

                                        <div className='flex items-center justify-start gap-3 w-1/6 sm:w-1/5'>
                                            <p className='text-sm'>نمایش</p>
                                            <Link  href={appRoutes.Video(vid.id+"/"+vid.title)}>
                                            <svg className='hidden sm:block' width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.3345 6.30321e-05C25.2432 0.00406557 32.4637 7.22695 32.4637 16.1363C32.4637 20.5887 30.6604 24.6198 27.7444 27.5394L27.7446 27.5392C24.8061 30.5796 20.6916 32.4672 16.1362 32.4672C7.22443 32.4672 0 25.2428 0 16.331C0 11.7774 1.88617 7.66433 4.91988 4.7305L4.92439 4.72618C7.82828 1.80682 11.8483 0 16.2903 0C16.3059 0 16.3214 0 16.3369 6.30321e-05H16.3345H16.3345ZM16.3345 30.121C24.058 30.121 30.3192 23.8598 30.3192 16.1363C30.3192 8.41274 24.058 2.1516 16.3345 2.1516C8.61091 2.1516 2.34974 8.41271 2.34974 16.1362C2.35873 23.8561 8.61451 30.112 16.3336 30.1209H16.3345V30.121ZM11.1565 7.4672L26.7692 16.1363L11.1565 24.8054V7.4672ZM22.3372 16.1363L13.308 11.1161V21.1564L22.3372 16.1363Z" fill="black"/>
                                            </svg>
                                            </Link>
                                        </div>


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
