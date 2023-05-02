import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,useDisclosure
} from '@chakra-ui/react';

export default function BasicUsage(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button className='p-0 bg-transparent' onClick={onOpen}>{props.text}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />

                <ModalContent>

                    {/*<ModalHeader>{props.title}</ModalHeader>*/}
                    {/*<ModalCloseButton />*/}

                    <ModalBody>
                        <p>{props.body}</p>
                    </ModalBody>

                    {/*<ModalFooter>*/}
                    {/*    <Button colorScheme='blue' mr={3} onClick={onClose}>*/}
                    {/*        {props.btnClose}*/}
                    {/*    </Button>*/}
                    {/*    /!*<Button variant='ghost'>Secondary Action</Button>*!/*/}
                    {/*</ModalFooter>*/}

                </ModalContent>
            </Modal>
        </>
    )
}