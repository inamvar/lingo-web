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

export default function BasicUsage(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialState = [];
    const [data,setData]=useState(initialState);

    useEffect(()=>{

        setData(props.result);

    },[props])

    function close()
    {
        setData(initialState);
        console.log(data)
        onClose();
    }

    return (
        <>
            <a className='p-0 bg-inherit' onClick={onOpen}>{props.text}</a>

            <Modal isOpen={isOpen} onClose={close}>

                <ModalOverlay />

                <ModalContent>

                    <ModalBody>

                        <div className='bg-white rounded-lg'>{props.body}</div>

                        {data.length>0&&
                            <div className='bg-white w-full rounded divide-gray-200 divide-y-2 flex flex-col max-h-[20rem] overflow-y-auto'>
                                { data.map((d)=>d.productType=="Package"?

                                        <Link onClick={close} onClose={close} href={AppRoutes.Package(d.slug)} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm text-xs'>{d.title}</Link>
                                        :
                                        <Link onClick={close} onClose={close} href={AppRoutes.Course(d.slug)} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm text-xs'>{d.title}</Link>
                                )}
                            </div>
                        }

                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    )
}