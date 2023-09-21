import mailPic from "/public/picture/mail.png";
import Image from "next/image";
import InputText from "../../components/form-inputs/InputText";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validator} from "../../common/validator";
import InputTextarea from "../../components/form-inputs/InputTextarea";
import {useContext, useState} from "react";
import {postContactusMessage} from "../../services/clientAppService";
import HeaderContext from "../../context/headerContext";


export default function contactus()
{
    const headerCtx = useContext(HeaderContext);
    headerCtx.setHeaderItemState("/contactus");

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const schema = validator.object({
        firstName:validator.string().required('نوشتن نام اجباری است'),
        lastName:validator.string().required('نوشتن نام خانوادگی اجباری است'),
        email:validator.string().required('انتخاب ایمیل اجباری است'),
        bodyMessage:validator.string().required('نوشتن متن پیام اجباری است'),
        titleMessage:validator.string().required('نوشتن عنوان پیام اجباری است')
    })

    const { register, handleSubmit ,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit = async (data) =>
    {
        console.log(data.phoneNumber);
        setIsButtonDisabled(true);
        const result = await postContactusMessage(data.firstName,data.lastName,data.email,data.phoneNumber,data.bodyMessage,data.titleMessage);
        console.log(result);
        setIsButtonDisabled(false);
    }

    return(
        <>
            <div className='w-full gap-8 flex flex-col justify-center p-6 items-center'>
                <label className='text-center text-white text-xl font-extrabold	darkBlue-color'>تماس با ما</label>
                <div className='flex md:gap-6'>

                    <div className='md:w-1/2 w-full bg-white rounded p-6'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
                            <div className='flex gap-3'>
                                <InputText error={errors.firstName?.message} register={register} required  placeholder='نام'  name='firstName'/>
                                <InputText error={errors.lastName?.message} register={register} required  placeholder='نام خانوادگی'  name='lastName'/>
                            </div>
                            <div className='flex gap-3'>
                                <InputText error={errors.email?.message} register={register} required  placeholder='ایمیل'  name='email'/>
                                <InputText register={register} placeholder='شماره همراه' name='phoneNumber'  />
                            </div>
                            <div>
                                <InputText error={errors.titleMessage?.message} name="titleMessage" placeholder="عنوان پیام شما"  register={register} required/>
                            </div>
                            <div>
                                <InputTextarea error={errors.bodyMessage?.message} name="bodyMessage" rows="7" placeholder="متن پیام شما"  register={register} required/>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <button type='submit' disabled={isButtonDisabled} className={isButtonDisabled?'bg-cyan-500 p-3 text-sm btn-page bg-red-400 text-white w-full':'bg-cyan-500 p-3 text-sm btn-page bg-red text-white w-full hover:bg-red-600'}>ارسال پیام</button>
                            </div>
                        </form>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <Image className='w-3/4 hidden md:block' src={mailPic}/>
                    </div>

                </div>
            </div>
        </>
    )
}