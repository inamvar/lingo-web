import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
} from '@chakra-ui/react';

export default function accordion()
{
    return(
        <>
            <Accordion allowToggle className='flex flex-col gap-2'>
                <AccordionItem className='bg-white rounded'>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='right'>
                                مقدمه
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-3'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70134 13.7759L23.2847 20.1267L9.70134 26.4775V13.7759ZM19.8646 20.1267L11.1493 16.0521V24.2027L19.8646 20.1267ZM0 0H32V32H0V0ZM30.552 1.44797H1.44797V30.552H30.552V1.44797ZM32 9.84616H0V0H32V9.84616ZM1.44797 8.39819H30.552V1.44797H1.44797V8.39819ZM7.67422 5.64706H4.92312V4.19906H7.67422V5.64706ZM13.1765 5.64706H10.4253V4.19906H13.1765V5.64706ZM18.8235 5.64706H16.0724V4.19906H18.8235V5.64706Z" fill="black"/>
                                </svg>
                                <p>معرفی و آشنایی با دوره</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p>نمایش</p>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3345 6.30321e-05C25.2432 0.00406557 32.4637 7.22695 32.4637 16.1363C32.4637 20.5887 30.6604 24.6198 27.7444 27.5394L27.7446 27.5392C24.8061 30.5796 20.6916 32.4672 16.1362 32.4672C7.22443 32.4672 0 25.2428 0 16.331C0 11.7774 1.88617 7.66433 4.91988 4.7305L4.92439 4.72618C7.82828 1.80682 11.8483 0 16.2903 0C16.3059 0 16.3214 0 16.3369 6.30321e-05H16.3345H16.3345ZM16.3345 30.121C24.058 30.121 30.3192 23.8598 30.3192 16.1363C30.3192 8.41274 24.058 2.1516 16.3345 2.1516C8.61091 2.1516 2.34974 8.41271 2.34974 16.1362C2.35873 23.8561 8.61451 30.112 16.3336 30.1209H16.3345V30.121ZM11.1565 7.4672L26.7692 16.1363L11.1565 24.8054V7.4672ZM22.3372 16.1363L13.308 11.1161V21.1564L22.3372 16.1363Z" fill="black"/>
                                </svg>
                            </div>
                        </div>

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-white rounded'>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='right'>
                                یونیت 1 درس A
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem .
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}
