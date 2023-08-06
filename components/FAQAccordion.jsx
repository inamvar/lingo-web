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
                                <p className='text-md font-bold'>راهنمای خرید، قوانین و مقررات ، شرایط استرداد</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                برای تهیه پکیج های آموزشی لینگو4030 ابتدا می‌بایست از قسمت منوی عضویت ، عضو‌ شوید و برای احراز هویت شماره تلفن همراه خود را وارد نمایید، پس از انتخاب پکیج آموزشی و مطالعه توضیحات و شرایط آن، اقدام به خرید نمایید.
                                پس از خرید، محصول در پروفایل شما قرار خواهد گرفت و‌ از طریق منوی « دوره های من »به آنها دسترسی پیدا کنید.<br/>
                                شرایط ارسال : محصولات وبسایت بدون نیاز به ارسال میباشد و از طریق پروفایل کاربری در اختیار شما قرار خواهد گرفت.<br/>
                                شرایط استرداد: ‌با توجه به آنلاین بودن محصولات مشمول حق کپی رایت شده و تماشای محصولات بصورت فردی است.
                                همچنین با توجه به اینکه تعدادی از دروس هر محصول، قبل از خرید و بصورت رایگان در اختیار شما می‌باشد، لذا امکان استرداد برای محصولات وجود نخواهد داشت.
                                در صورت نیاز به اطلاعات بیشتر می‌توانید از طریق پشتیبانی با کارشناسان ما در ارتباط باشید.<br/>
                                مدت زمان استفاده از ویدیو: مدت زمان استفاده از پکیج های آموزشی خریداری شده برای کاربران به صورت مادام العمر می باشد.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>چگونه ثبت ‌نام کنم؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                برای تهیه پکیج های آموزشی لینگو4030 ابتدا می‌بایست از قسمت منوی عضویت ، عضو‌ شوید و برای احراز هویت شماره تلفن همراه خود را وارد نمایید، پس از انتخاب پکیج آموزشی و مطالعه توضیحات و شرایط آن، اقدام به خرید نمایید.
                                نحوه ی دسترسی به محصولات آموزشی از چه طریقی است؟
                                از طریق سایت مجموعه (LINGO4030.COM) شما می توانید از طریق اپلیکیشن های موبایل برای گوشی های اندروید و I.O.S نیز به محصولات دسترسی پیدا کنید.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>اگر بخواهم از پایه شروع کنم آیا باید تعیین سطح شوم؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                خیر، نیازی نیست. شما می توانید بدون پیشینه آموزش زبان، یادگیری خود را شروع کنید. از اینرو برای افراد مبتدی، ما کتاب speak now1 و مجموعه lingo1 را تهیه کردیم.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>برای تحصیل در دوره‌ی بزرگسالان چه کتاب‌هایی باید تهیه کنم؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                PDF کتاب برای تمامی دوره هایی که از روی کتاب تدریس شده است، بعد از خرید دوره برای شما قابل دانلود می باشد.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>نحوه‌ی سطح‌بندی سیستم LINGO4030 چگونه است؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded'>
                            <p>
                                از A1 تا C2
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>هدف از یادگیری/آموزش چیست؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                هدف نهایی در دوره‌های نوجوانان لینگو4030، تربیت زبان‌آموزانی است که روان و صحیح، انگلیسی صحبت می‌کنند و می‌توانند از دانسته‌های خود به بهترین شکل برای ساختن جملات انگلیسی و برقراری ارتباط در موقعیت‌های مختلف استفاده نمایند.
                                مهمترین ویژگی بعد از تمرین دوره‌ها، توانایی آن‌ها در شرکت در مکالمات روزمره انگلیسی بدون مشکل و استرس است
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>فرزند من از چه سنی می تواند در این دوره‌ها شرکت کند؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7	'>
                            <p>
                                دوره آموزش مکالمه نوجوانان لینگو4030 مخصوص رده سنی 8 تا 14 سال است.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>چگونه می‌توانم فرزندم را آنلاین ثبت ‌نام کنم؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7'>
                            <p>
                                برای تهیه پکیج های آموزشی لینگو4030 ابتدا می‌بایست از قسمت منوی عضویت ، عضو‌ شوید و برای احراز هویت شماره تلفن همراه خود را وارد نمایید، پس از انتخاب پکیج آموزشی و مطالعه توضیحات و شرایط آن، اقدام به خرید نمایید.
                                سیستم آموزشی در این گروه سنی بسیار پویا و به‌روز بوده و از اساتید مجربی بهره می‌برد که کلاس‌های ویژه‌ی آموزش و کار با کودکان را فراگرفته‌اند و مسئولیت برگزاری این کلاس‌ها را دارند.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

                <AccordionItem className='hover:bg-blue-900 bg-darkBlue rounded'>

                    <h2>
                        <AccordionButton className='bg-darkBlue hover:bg-darkBlue rounded text-white'>
                            <Box as="span" flex='1' textAlign='right'>
                                <p className='text-md font-bold'>بعد از دیدن ویدیوها و تمرین آن در منزل چه اتفاقاتی می‌افتد؟</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} className='bg-white text-darkBlue rounded leading-7	'>
                            <p>
                                عموما در ویدیئوها کودکان به شکل بازی و سرگرمی، سرود و نمایش به این رده ی سنی ارائه می‌شود.
                            </p>
                        </AccordionPanel>
                    </h2>

                </AccordionItem>

            </Accordion>
        </>
    )
}
