import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,useDisclosure
} from '@chakra-ui/react';
import Link from "next/link";
import AppRoutes from "../common/appRoutes";
import {useEffect, useState} from "react";
import {getSearchResult} from "../services/clientAppService";

export default function BasicUsage(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData]=useState([]);

    function close()
    {
        setData([]);
        onClose();
    }

    async function handleChange(e)
    {
        const resultSearch = await getSearchResult(e.target.value);
        setData(resultSearch);
    }

    return (
        <>
            <a className='p-0 bg-inherit' onClick={onOpen}>{props.text}</a>

            <Modal isOpen={isOpen} onClose={close}>

                <ModalOverlay />

                <ModalContent>

                    <ModalBody>

                        <div className='bg-white rounded-lg'>
                            <div className='flex d-rtl justify-between rounded-lg border-2 border-blue-950'>
                                <input onChange={handleChange} type='text' className='rounded py-4 px-3 text-black text-xs md:text-sm focus:outline-none w-3/4' placeholder='به دنبال یادگیری چه مهارتی هستید ؟'/>
                                {/*<a className='p-4 w-1/4 text-center bg-darkBlue rounded-tl-md rounded-bl-md text-sm text-white hidden md:block'>جست و جو</a>*/}
                                <a className='m-2'>
                                    <svg className='hover:drop-shadow-lg' width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_408_921)">
                                            <path d="M32.5488 28.5334L26.1229 22.1074C25.8328 21.8174 25.4396 21.6562 25.0271 21.6562H23.9766C25.7555 19.3811 26.8125 16.5193 26.8125 13.4062C26.8125 6.00059 20.8119 0 13.4062 0C6.00059 0 0 6.00059 0 13.4062C0 20.8119 6.00059 26.8125 13.4062 26.8125C16.5193 26.8125 19.3811 25.7555 21.6562 23.9766V25.0271C21.6562 25.4396 21.8174 25.8328 22.1074 26.1229L28.5334 32.5488C29.1393 33.1547 30.1189 33.1547 30.7184 32.5488L32.5424 30.7248C33.1482 30.1189 33.1482 29.1393 32.5488 28.5334ZM13.4062 21.6562C8.84941 21.6562 5.15625 17.9695 5.15625 13.4062C5.15625 8.84941 8.84297 5.15625 13.4062 5.15625C17.9631 5.15625 21.6562 8.84297 21.6562 13.4062C21.6562 17.9631 17.9695 21.6562 13.4062 21.6562Z" fill="#143794"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_408_921">
                                                <rect width="33" height="33" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {data.length>0&&
                            <div className='bg-white w-full rounded divide-gray-200 divide-y-2 flex flex-col max-h-[20rem] overflow-y-auto'>
                                { data.map((d)=>d.productType=="Package"?

                                        <Link onClick={close} href={AppRoutes.Package(d.slug)} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm text-xs'>{d.title}</Link>
                                        :
                                        <Link onClick={close} href={AppRoutes.Course(d.slug)} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm text-xs'>{d.title}</Link>
                                )}
                            </div>
                        }

                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    )
}