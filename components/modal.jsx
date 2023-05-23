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
            <a className='p-0 bg-inherit' onClick={onOpen}>{props.text}</a>

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