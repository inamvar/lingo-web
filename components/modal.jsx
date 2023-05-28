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

    const data = props.result;
    console.log(data);
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

                        {data.length>0&&<div className='bg-white w-full rounded divide-gray-200 divide-y-2 flex flex-col'>{data.map((d)=> <Link href={d} className='pt-3 pb-3 hover:bg-gray-200 hover:rounded pr-4 sm:text-sm text-xs'>{d.title}</Link>)}</div>}

                    </ModalBody>

                </ModalContent>


            </Modal>
        </>
    )
}