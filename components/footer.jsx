import eNamad from '/public/picture/eNamad.png';
import bazaar from '/public/picture/bazaar-badge2 1.png';
import appleStore from '/public/picture/image_sibapp_black_badge 1.png';
import googlePlay from '/public/picture/google-play-download 1.png';
import logo from '/public/picture/Logo.png';
import Image from 'next/image';
import {Constants} from "../common/constants";

export default function footer(siteSetting)
{
    const  result=siteSetting.siteSetting;
   const  instagram=result?.find(x=>x.key===Constants.InstagramAddress)?.value??"#";
   const  whatsapp=result?.find(x=>x.key===Constants.WhatsAppAddress)?.value??"#";
   const  telegram=result?.find(x=>x.key===Constants.TelegramAddress)?.value??"#";
   const  twitter=result?.find(x=>x.key===Constants.TwitterAddress)?.value??"#";
   const  footerDescription=result?.find(x=>x.key===Constants.FooterDescription)?.value??"";

    return(
        <div className='flex flex-col items-center mt-5'>
            <hr className="h-px my-5 sm:my-8 bg-paleBlue w-4/5 border-0"/>
            <div className='p-4 flex sm:flex-row flex-col sm:items-start items-center w-full justify-evenly gap-9 sm:gap-0 text-lg'>
                <Image quality={100} className='block sm:hidden' src={logo} alt='logo'/>
                <div className='flex justify-center items-center text-center block sm:hidden'>
                    <p className='darkBlue-color'>
                        {footerDescription}
                    </p></div>
                <div className='flex justify-evenly block sm:hidden w-full justify-between'>
                    <a>
                        <svg width="29" height="23" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.9262 4.21867C37.5086 4.8458 35.991 5.27725 34.3915 5.47293C36.0235 4.48484 37.2713 2.92188 37.8663 1.05995C36.3355 1.95932 34.6421 2.61075 32.8414 2.97901C31.4058 1.42821 29.3534 0.452271 27.0759 0.452271C22.7098 0.452271 19.1712 4.02179 19.1712 8.42139C19.1712 9.05459 19.2471 9.66228 19.3784 10.2384C12.8106 9.92844 6.98841 6.74419 3.0945 1.9338C2.41038 3.1054 2.02135 4.46661 2.02135 5.94813C2.02135 8.72037 3.41969 11.1511 5.53346 12.5804C4.24111 12.5427 3.02464 12.1817 1.95872 11.5874V11.6834C1.95872 15.5495 4.68073 18.7726 8.29401 19.5067C7.63519 19.6829 6.93181 19.785 6.21758 19.785C5.71052 19.785 5.22634 19.7352 4.74336 19.6452C5.7599 22.81 8.66979 25.1144 12.1385 25.1837C9.44183 27.3166 6.02367 28.5879 2.34053 28.5879C1.71302 28.5879 1.08672 28.5575 0.458008 28.4809C3.97132 30.7415 8.11817 32.0638 12.5974 32.0638C27.1313 32.0638 35.0733 19.9163 35.0733 9.39611C35.0733 9.06067 35.0732 8.71916 35.048 8.37642C36.5981 7.26194 37.9398 5.84969 38.9997 4.24906L38.9262 4.21867Z" fill="#143794"/>
                        </svg>
                    </a>
                    <a>
                        <svg width="29" height="30" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.2915 23.598C27.8084 23.3506 25.4555 22.1893 25.0158 22.0235C24.5761 21.8651 24.2568 21.7822 23.9364 22.2709C23.6231 22.7474 22.7003 23.8381 22.4184 24.1562C22.1365 24.4743 21.8594 24.4986 21.3836 24.2829C20.9005 24.0355 19.3572 23.5273 17.5248 21.8651C16.0936 20.577 15.1406 18.9902 14.8575 18.5016C14.5756 18.019 14.8262 17.746 15.0647 17.5047C15.284 17.2829 15.5478 16.9465 15.7924 16.6541C16.0249 16.3616 16.0996 16.1654 16.2695 15.8485C16.4261 15.5061 16.3454 15.2392 16.2261 14.9979C16.1068 14.7566 15.1467 12.3643 14.7455 11.4113C14.3624 10.4657 13.9612 10.5863 13.666 10.5863C13.3902 10.5607 13.0697 10.5607 12.7504 10.5607C12.4312 10.5607 11.9095 10.6814 11.4698 11.1445C11.0301 11.6331 9.78801 12.8006 9.78801 15.1624C9.78801 17.5303 11.5072 19.8214 11.7457 20.1638C11.9903 20.4807 15.1274 25.3554 19.9403 27.4502C21.0884 27.9389 21.9799 28.2314 22.6762 28.4727C23.8243 28.8407 24.8725 28.7896 25.7001 28.6689C26.6157 28.5166 28.536 27.4941 28.9384 26.3522C29.3468 25.203 29.3468 24.2512 29.2276 24.0355C29.1083 23.8137 28.7951 23.6931 28.312 23.4774L28.2915 23.598ZM19.5632 35.569H19.5379C16.6887 35.569 13.872 34.7878 11.412 33.3279L10.8349 32.9793L4.81126 34.5661L6.43042 28.6372L6.04129 28.0279C4.45346 25.4699 3.60653 22.5183 3.60653 19.485C3.60653 10.6375 10.7663 3.42053 19.5753 3.42053C23.8424 3.42053 27.8457 5.10229 30.8576 8.14896C33.8694 11.17 35.5319 15.2197 35.5319 19.5106C35.5199 28.3521 28.3662 35.569 19.5692 35.569H19.5632ZM33.1478 5.83227C29.483 2.25182 24.664 0.227615 19.5379 0.227615C8.96518 0.227615 0.356162 8.89845 0.350139 19.5545C0.350139 22.957 1.22839 26.2767 2.91019 29.2149L0.1875 39.225L10.3651 36.5403C13.1697 38.0697 16.3261 38.8887 19.5391 38.8948H19.5451C30.1239 38.8948 38.7329 30.2239 38.7389 19.5606C38.7389 14.4007 36.7499 9.54434 33.1237 5.89443L33.1478 5.83227Z" fill="#143794"/>
                        </svg>
                    </a>
                    <a>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0628 0.237434C14.8241 0.237434 14.1712 0.263023 12.121 0.350756C10.0624 0.453111 8.66993 0.776017 7.44126 1.25855C6.17405 1.76058 5.09474 2.4271 4.02869 3.51158C2.95541 4.58996 2.29049 5.68175 1.80143 6.96363C1.32442 8.20651 1.0052 9.61512 0.904018 11.6976C0.811265 13.7727 0.791992 14.4319 0.791992 19.7312C0.791992 25.0305 0.817288 25.691 0.904018 27.7649C1.0052 29.8412 1.32442 31.2559 1.80143 32.4988C2.29771 33.7807 2.95662 34.8725 4.02869 35.9509C5.09474 37.0365 6.17405 37.7092 7.44126 38.2039C8.66993 38.6803 10.0684 39.0093 12.121 39.1117C14.1724 39.2055 14.8241 39.225 20.0628 39.225C25.3015 39.225 25.9544 39.1994 28.0046 39.1117C30.0572 39.0093 31.4557 38.6791 32.6844 38.2039C33.9516 37.7019 35.0309 37.0353 36.097 35.9509C37.1702 34.8725 37.8352 33.7868 38.3242 32.4988C38.7952 31.2559 39.1205 29.8412 39.2216 27.7649C39.3144 25.6897 39.3337 25.0305 39.3337 19.7312C39.3337 14.4319 39.3084 13.7715 39.2216 11.6976C39.1205 9.62121 38.794 8.1992 38.3242 6.96363C37.8279 5.68175 37.169 4.58996 36.097 3.51158C35.0309 2.42588 33.9576 1.75327 32.6844 1.25855C31.4557 0.776017 30.0572 0.453111 28.0046 0.350756C25.9532 0.256931 25.3015 0.237434 20.0628 0.237434ZM20.0628 3.74675C25.2076 3.74675 25.8219 3.77234 27.8552 3.86008C29.7308 3.94903 30.7523 4.26584 31.4304 4.53391C32.3351 4.8885 32.9675 5.30767 33.6517 5.99247C34.3226 6.67119 34.737 7.31822 35.0875 8.23332C35.3525 8.91934 35.6657 9.95264 35.7537 11.8499C35.8404 13.9067 35.8657 14.5294 35.8657 19.7324C35.8657 24.9355 35.8404 25.5581 35.7464 27.615C35.6453 29.5122 35.3321 30.5455 35.0683 31.2315C34.7033 32.1467 34.2961 32.7864 33.624 33.4785C32.9458 34.1572 32.3001 34.5764 31.4027 34.931C30.733 35.199 29.697 35.5158 27.8143 35.6048C25.7701 35.6925 25.1678 35.7181 20.0098 35.7181C14.8518 35.7181 14.2507 35.6925 12.2042 35.5975C10.3286 35.4951 9.2939 35.1783 8.61573 34.9115C7.70025 34.5422 7.07266 34.1304 6.40051 33.4505C5.72233 32.7644 5.29109 32.1113 4.95863 31.2035C4.6888 30.526 4.38043 29.4781 4.28045 27.5736C4.21179 25.5301 4.17927 24.8965 4.17927 19.7032C4.17927 14.5123 4.21179 13.8775 4.28045 11.8084C4.38043 9.9039 4.6888 8.85842 4.95863 8.17849C5.29109 7.2512 5.72354 6.61757 6.40051 5.93155C7.07146 5.25284 7.70025 4.81417 8.61573 4.47055C9.2939 4.2037 10.3033 3.88688 12.1861 3.79184C14.2303 3.71751 14.8326 3.6907 19.9833 3.6907L20.0628 3.74675ZM20.0628 9.726C14.5928 9.726 10.1696 14.2065 10.1696 19.7337C10.1696 25.2669 14.5989 29.7413 20.0628 29.7413C25.5328 29.7413 29.956 25.2608 29.956 19.7337C29.956 14.2004 25.5268 9.726 20.0628 9.726ZM20.0628 26.232C16.5117 26.232 13.6388 23.3258 13.6388 19.7337C13.6388 16.1415 16.5117 13.2353 20.0628 13.2353C23.6139 13.2353 26.4868 16.1415 26.4868 19.7337C26.4868 23.3258 23.6139 26.232 20.0628 26.232ZM32.6675 9.32633C32.6675 10.6216 31.6256 11.6671 30.3511 11.6671C29.0707 11.6671 28.0371 10.6204 28.0371 9.32633C28.0371 8.03836 29.0779 6.99044 30.3511 6.99044C31.6244 6.99044 32.6675 8.03836 32.6675 9.32633Z" fill="#143794"/>
                        </svg>
                    </a>
                    <a>
                        <svg width="29" height="30" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2708 0.237434C8.62463 0.237434 0 8.9631 0 19.7312C0 30.4993 8.62588 39.225 19.2708 39.225C29.917 39.225 38.5417 30.4993 38.5417 19.7312C38.5417 8.9631 29.9158 0.237434 19.2708 0.237434ZM28.7359 13.5926L25.573 28.6694C25.3393 29.7384 24.7102 29.9975 23.8324 29.4944L19.0147 25.9026L16.691 28.1664C16.4349 28.4254 16.2173 28.6455 15.72 28.6455L16.0619 23.6853L24.9899 15.5256C25.3791 15.1797 24.9041 14.9835 24.3907 15.3294L13.3566 22.356L8.60101 20.8543C7.56784 20.5248 7.54422 19.8092 8.81858 19.3061L27.3982 12.0582C28.261 11.7438 29.0144 12.2708 28.7347 13.5913L28.7359 13.5926Z" fill="#143794"/>
                        </svg>
                    </a>
                </div>
                <div className='flex w-full sm:w-1/2 flex-col gap-9 items-center justify-center'>
                    <a className='font-bold darkBlue-color whitespace-nowrap'>دسترسی های سریع</a>
                    <div className='flex flex-row sm:flex-col items-center gap-6 w-full justify-evenly sm:justify-between'>
                        <a className='darkBlue-color'>سوالات متداول</a>
                        <a className='darkBlue-color'>نمونه پکیج</a>
                        <a className='darkBlue-color'>تخفیف</a>
                    </div>
                </div>
                <div className='hidden sm:block sm:w-1/2 sm:justify-center sm:mt-0 my-9 items-center'>
                    <div className='flex flex-col gap-9 items-center sm:w-2/3'>
                        <a className='font-bold darkBlue-color'>اطلاعات تماس</a>
                        <div className='flex justify-evenly lg:w-80 w-full justify-between'>
                            {/*twitter*/}
                            <a target={"_blank"} href={twitter}>
                                <svg width="29" height="23" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.9262 4.21867C37.5086 4.8458 35.991 5.27725 34.3915 5.47293C36.0235 4.48484 37.2713 2.92188 37.8663 1.05995C36.3355 1.95932 34.6421 2.61075 32.8414 2.97901C31.4058 1.42821 29.3534 0.452271 27.0759 0.452271C22.7098 0.452271 19.1712 4.02179 19.1712 8.42139C19.1712 9.05459 19.2471 9.66228 19.3784 10.2384C12.8106 9.92844 6.98841 6.74419 3.0945 1.9338C2.41038 3.1054 2.02135 4.46661 2.02135 5.94813C2.02135 8.72037 3.41969 11.1511 5.53346 12.5804C4.24111 12.5427 3.02464 12.1817 1.95872 11.5874V11.6834C1.95872 15.5495 4.68073 18.7726 8.29401 19.5067C7.63519 19.6829 6.93181 19.785 6.21758 19.785C5.71052 19.785 5.22634 19.7352 4.74336 19.6452C5.7599 22.81 8.66979 25.1144 12.1385 25.1837C9.44183 27.3166 6.02367 28.5879 2.34053 28.5879C1.71302 28.5879 1.08672 28.5575 0.458008 28.4809C3.97132 30.7415 8.11817 32.0638 12.5974 32.0638C27.1313 32.0638 35.0733 19.9163 35.0733 9.39611C35.0733 9.06067 35.0732 8.71916 35.048 8.37642C36.5981 7.26194 37.9398 5.84969 38.9997 4.24906L38.9262 4.21867Z" fill="#143794"/>
                                </svg>
                            </a>
                            {/*whatsapp*/}
                            <a target={"_blank"} href={whatsapp}>
                                <svg width="29" height="30" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.2915 23.598C27.8084 23.3506 25.4555 22.1893 25.0158 22.0235C24.5761 21.8651 24.2568 21.7822 23.9364 22.2709C23.6231 22.7474 22.7003 23.8381 22.4184 24.1562C22.1365 24.4743 21.8594 24.4986 21.3836 24.2829C20.9005 24.0355 19.3572 23.5273 17.5248 21.8651C16.0936 20.577 15.1406 18.9902 14.8575 18.5016C14.5756 18.019 14.8262 17.746 15.0647 17.5047C15.284 17.2829 15.5478 16.9465 15.7924 16.6541C16.0249 16.3616 16.0996 16.1654 16.2695 15.8485C16.4261 15.5061 16.3454 15.2392 16.2261 14.9979C16.1068 14.7566 15.1467 12.3643 14.7455 11.4113C14.3624 10.4657 13.9612 10.5863 13.666 10.5863C13.3902 10.5607 13.0697 10.5607 12.7504 10.5607C12.4312 10.5607 11.9095 10.6814 11.4698 11.1445C11.0301 11.6331 9.78801 12.8006 9.78801 15.1624C9.78801 17.5303 11.5072 19.8214 11.7457 20.1638C11.9903 20.4807 15.1274 25.3554 19.9403 27.4502C21.0884 27.9389 21.9799 28.2314 22.6762 28.4727C23.8243 28.8407 24.8725 28.7896 25.7001 28.6689C26.6157 28.5166 28.536 27.4941 28.9384 26.3522C29.3468 25.203 29.3468 24.2512 29.2276 24.0355C29.1083 23.8137 28.7951 23.6931 28.312 23.4774L28.2915 23.598ZM19.5632 35.569H19.5379C16.6887 35.569 13.872 34.7878 11.412 33.3279L10.8349 32.9793L4.81126 34.5661L6.43042 28.6372L6.04129 28.0279C4.45346 25.4699 3.60653 22.5183 3.60653 19.485C3.60653 10.6375 10.7663 3.42053 19.5753 3.42053C23.8424 3.42053 27.8457 5.10229 30.8576 8.14896C33.8694 11.17 35.5319 15.2197 35.5319 19.5106C35.5199 28.3521 28.3662 35.569 19.5692 35.569H19.5632ZM33.1478 5.83227C29.483 2.25182 24.664 0.227615 19.5379 0.227615C8.96518 0.227615 0.356162 8.89845 0.350139 19.5545C0.350139 22.957 1.22839 26.2767 2.91019 29.2149L0.1875 39.225L10.3651 36.5403C13.1697 38.0697 16.3261 38.8887 19.5391 38.8948H19.5451C30.1239 38.8948 38.7329 30.2239 38.7389 19.5606C38.7389 14.4007 36.7499 9.54434 33.1237 5.89443L33.1478 5.83227Z" fill="#143794"/>
                                </svg>
                            </a>
                            {/*instagram*/}
                            <a target={"_blank"} href={instagram}>
                                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0628 0.237434C14.8241 0.237434 14.1712 0.263023 12.121 0.350756C10.0624 0.453111 8.66993 0.776017 7.44126 1.25855C6.17405 1.76058 5.09474 2.4271 4.02869 3.51158C2.95541 4.58996 2.29049 5.68175 1.80143 6.96363C1.32442 8.20651 1.0052 9.61512 0.904018 11.6976C0.811265 13.7727 0.791992 14.4319 0.791992 19.7312C0.791992 25.0305 0.817288 25.691 0.904018 27.7649C1.0052 29.8412 1.32442 31.2559 1.80143 32.4988C2.29771 33.7807 2.95662 34.8725 4.02869 35.9509C5.09474 37.0365 6.17405 37.7092 7.44126 38.2039C8.66993 38.6803 10.0684 39.0093 12.121 39.1117C14.1724 39.2055 14.8241 39.225 20.0628 39.225C25.3015 39.225 25.9544 39.1994 28.0046 39.1117C30.0572 39.0093 31.4557 38.6791 32.6844 38.2039C33.9516 37.7019 35.0309 37.0353 36.097 35.9509C37.1702 34.8725 37.8352 33.7868 38.3242 32.4988C38.7952 31.2559 39.1205 29.8412 39.2216 27.7649C39.3144 25.6897 39.3337 25.0305 39.3337 19.7312C39.3337 14.4319 39.3084 13.7715 39.2216 11.6976C39.1205 9.62121 38.794 8.1992 38.3242 6.96363C37.8279 5.68175 37.169 4.58996 36.097 3.51158C35.0309 2.42588 33.9576 1.75327 32.6844 1.25855C31.4557 0.776017 30.0572 0.453111 28.0046 0.350756C25.9532 0.256931 25.3015 0.237434 20.0628 0.237434ZM20.0628 3.74675C25.2076 3.74675 25.8219 3.77234 27.8552 3.86008C29.7308 3.94903 30.7523 4.26584 31.4304 4.53391C32.3351 4.8885 32.9675 5.30767 33.6517 5.99247C34.3226 6.67119 34.737 7.31822 35.0875 8.23332C35.3525 8.91934 35.6657 9.95264 35.7537 11.8499C35.8404 13.9067 35.8657 14.5294 35.8657 19.7324C35.8657 24.9355 35.8404 25.5581 35.7464 27.615C35.6453 29.5122 35.3321 30.5455 35.0683 31.2315C34.7033 32.1467 34.2961 32.7864 33.624 33.4785C32.9458 34.1572 32.3001 34.5764 31.4027 34.931C30.733 35.199 29.697 35.5158 27.8143 35.6048C25.7701 35.6925 25.1678 35.7181 20.0098 35.7181C14.8518 35.7181 14.2507 35.6925 12.2042 35.5975C10.3286 35.4951 9.2939 35.1783 8.61573 34.9115C7.70025 34.5422 7.07266 34.1304 6.40051 33.4505C5.72233 32.7644 5.29109 32.1113 4.95863 31.2035C4.6888 30.526 4.38043 29.4781 4.28045 27.5736C4.21179 25.5301 4.17927 24.8965 4.17927 19.7032C4.17927 14.5123 4.21179 13.8775 4.28045 11.8084C4.38043 9.9039 4.6888 8.85842 4.95863 8.17849C5.29109 7.2512 5.72354 6.61757 6.40051 5.93155C7.07146 5.25284 7.70025 4.81417 8.61573 4.47055C9.2939 4.2037 10.3033 3.88688 12.1861 3.79184C14.2303 3.71751 14.8326 3.6907 19.9833 3.6907L20.0628 3.74675ZM20.0628 9.726C14.5928 9.726 10.1696 14.2065 10.1696 19.7337C10.1696 25.2669 14.5989 29.7413 20.0628 29.7413C25.5328 29.7413 29.956 25.2608 29.956 19.7337C29.956 14.2004 25.5268 9.726 20.0628 9.726ZM20.0628 26.232C16.5117 26.232 13.6388 23.3258 13.6388 19.7337C13.6388 16.1415 16.5117 13.2353 20.0628 13.2353C23.6139 13.2353 26.4868 16.1415 26.4868 19.7337C26.4868 23.3258 23.6139 26.232 20.0628 26.232ZM32.6675 9.32633C32.6675 10.6216 31.6256 11.6671 30.3511 11.6671C29.0707 11.6671 28.0371 10.6204 28.0371 9.32633C28.0371 8.03836 29.0779 6.99044 30.3511 6.99044C31.6244 6.99044 32.6675 8.03836 32.6675 9.32633Z" fill="#143794"/>
                                </svg>
                            </a>
                            {/*telegram*/}
                            <a target={"_blank"} href={telegram}>
                                <svg width="29" height="30" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2708 0.237434C8.62463 0.237434 0 8.9631 0 19.7312C0 30.4993 8.62588 39.225 19.2708 39.225C29.917 39.225 38.5417 30.4993 38.5417 19.7312C38.5417 8.9631 29.9158 0.237434 19.2708 0.237434ZM28.7359 13.5926L25.573 28.6694C25.3393 29.7384 24.7102 29.9975 23.8324 29.4944L19.0147 25.9026L16.691 28.1664C16.4349 28.4254 16.2173 28.6455 15.72 28.6455L16.0619 23.6853L24.9899 15.5256C25.3791 15.1797 24.9041 14.9835 24.3907 15.3294L13.3566 22.356L8.60101 20.8543C7.56784 20.5248 7.54422 19.8092 8.81858 19.3061L27.3982 12.0582C28.261 11.7438 29.0144 12.2708 28.7347 13.5913L28.7359 13.5926Z" fill="#143794"/>
                                </svg>
                            </a>
                        </div>
                        <span>
                            <Image quality={100} alt='enamad' src={eNamad}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col w-full justify-center items-center gap-5 sm:gap-0'>
                <p className='font-bold block sm:hidden darkBlue-color text-lg'>دانلود اپلیکیشن</p>
                <div className='flex flex-row justify-center items-center flex-wrap'>
                    <a>
                        <Image quality={100} className='h-3' alt='bazaar' src={bazaar}/>
                    </a>
                    <a>
                        <Image quality={100} alt='applestore' src={appleStore}/>
                    </a>
                    <a>
                        <Image quality={100} className='h-3' alt='googleplay' src={googlePlay}/>
                    </a>
                </div>
            </div>
            <div className='bg-paleBlue w-full p-4 mt-3'>
                <p className='darkBlue-color text-center'>© تمامی حقوق مادی و معنوی سایت متعلق به سایت لینگو می باشد.</p>
            </div>
        </div>
    )
}