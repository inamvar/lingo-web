import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
} from '@chakra-ui/react';
import Link from "next/link";
import appRoutes from "../common/appRoutes";

export default function accordion()
{

    return(
        <>
            <Accordion allowToggle className='flex flex-col gap-2'>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>مزیت استفاده از پکیج آنلاین چیست؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-darkBlue text-white rounded'>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>از چه دیکشنری می توانم در کنار پکیج ها استفاده کنم؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-darkBlue text-white rounded'>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>فرق پکیج های رایگان و پکیج های آموزشی چیست؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-darkBlue text-white rounded'>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

            </Accordion>
        </>
    )
}
