import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react';
import {validator} from "../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import InputText from "./form-inputs/InputText";
import {useEffect, useRef} from 'react';
import {ConfirmPhoneNumber, ConfirmPhoneNumberRequest} from "../services/clientAppService";


export default function BasicUsage(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(()=>
    {
        if(props.setOpen)
        {
            onOpen();
        }
        else
        {
            onClose();
        }
    },[props])

    function close()
    {
        props.onClick();
        onClose();
    }

    const schema = validator.object({
        code:validator.string().required('نوشتن کد تایید اجباری است')
    })

    const { register, handleSubmit, watch,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const OTPCode = useRef(null);

    async function handleClick()
    {
        console.log(OTPCode)
        const OTPCodeNumber = OTPCode.current.value
        const result = await ConfirmPhoneNumber(OTPCodeNumber);
        console.log(result)
        if(result)
        {
            close();
        }
    }

    return (
        <>

            <a className='p-0 bg-inherit'>{props.text}</a>

            <Modal isOpen={isOpen} onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>

                        <div className='bg-white flex flex-col justify-center items-center rounded p-4 gap-4'>
                            <p className='text-gray-500'>لطفا کد فعال سازی دریافت شده را وارد نمایید.</p>

                            <input name='code' ref={OTPCode} type='text' required className="rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none" />

                            <a onClick={handleClick} className='bg-red btn-page text-white text-center text-sm hover:bg-red-600 md:text-base w-4/5 md:w-1/3'>فعالسازی</a>
                        </div>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}