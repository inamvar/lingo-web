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

export default function BasicUsage(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const data = ["دوره تست 1","دوره تست 1"]

    return (
        <>
            <a className='p-0 bg-inherit' onClick={onOpen}>{props.text}</a>

            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />

                <ModalContent>

                    {/*<ModalHeader>{props.title}</ModalHeader>*/}
                    {/*<ModalCloseButton />*/}

                    <ModalBody>
                        <div className='bg-white rounded-lg'>{props.body}</div>

                        {data.length>0&&<div className='bg-white w-full rounded divide-gray-200 divide-y-2 flex flex-col'>{data.map((d)=> <Link href={d} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm'>{d}</Link>)}</div>}
                        {/* {data.length<=0?<ul className='hidden'>:<ul className='bg-white w-full md:w-9/12 p-3 divide-gray-200 divide-y-2'>} */}
                        {/*    {data.map((d)=>*/}
                        {/*        <li className='pt-2 pb-2'>{d}</li>*/}
                        {/*    )}*/}
                        {/*</ul>*/}

                    </ModalBody>

                </ModalContent>


            </Modal>
        </>
    )
}