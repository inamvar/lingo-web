import InputText from "../../components/form-inputs/InputText";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validator} from "../../common/validator";
import {getMyProfile} from "../../services/appServices";
import {pushAlert} from "../../common/notifier";
import {updateMyProfile} from "../../services/clientAppService";
import {withAuth} from "../../components/Authorized";
import AuthContext from "../../context/authContext";
import {useContext} from "react";
import Link from "next/link";
import AppRoutes from "../../common/appRoutes";

function myProfile(props)
{
    const context = useContext(AuthContext);

    if(context.authState.authenticated)
    {
        const schema = validator.object({
            firstName:validator.string().required('نوشتن نام اجباری است'),
            lastName:validator.string().required('نوشتن نام خانوادگی اجباری است')
        })

        const { register, handleSubmit, watch,
            formState: { errors } } = useForm({
            resolver:yupResolver(schema),
            defaultValues:{
                firstName:props.profile.firstName,
                lastName:props.profile.lastName,
                phoneNumber:props.profile.phoneNumber,
                email:props.profile.email
            }
        });

        const onSubmit = async (data) => {
            var result= await updateMyProfile({
                firstName:data.firstName,
                lastName:data.lastName,
                phoneNumber:data.phoneNumber
            },props.ctx);

            if (result!=undefined &&  result!=null)
            {
                pushAlert({
                    type:'success',
                    message:'عملیات با موفقیت انجام شد'
                });
            }
        };

        return(
            <div className='flex justify-center items-center mt-16'>
                <div className='w-2/3 bg-white gap-8 flex flex-col justify-center items-center p-7 rounded'>

                    <div className='flex justify-evenly items-center gap-1 w-full'>
                        <hr className="border-4 border-red w-2/5 duration-500"/>
                        <p className='darkBlue-color font-bold whitespace-nowrap'>اطلاعات پروفایل</p>
                        <hr className="border-4 border-red w-2/5 duration-500"/>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-8'>

                        <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
                            <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                <p>نام</p>
                                <InputText error={errors.firstName?.message} register={register}  placeholder='نام' name='firstName'/>
                            </div>
                            <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                <p>نام خانوادگی</p>
                                <InputText error={errors.lastName?.message} register={register}  placeholder='نام خانوادگی' name='lastName'/>
                            </div>
                            <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                <p>شماره همراه</p>
                                <InputText error={errors.lastName?.message} register={register}  placeholder='شماره همراه' name='phoneNumber'/>
                            </div>
                        </div>

                        {/*<div className='flex flex-col md:flex-row'>*/}
                        {/*    <div className='flex flex-col w-full md:w-1/3 gap-2'>*/}
                        {/*        <p>ایمیل</p>*/}
                        {/*        <InputText error={errors.lastName?.message} register={register}  placeholder='ایمیل' name='email'/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className='flex'>
                            <Link className='text-blue-800' href={AppRoutes.ChangePassword}>قصد تغییر رمز دارم</Link>
                        </div>

                        <div className='flex flex-row justify-center'>
                            <button type='submit' className='bg-cyan-500 text-sm btn-page bg-red text-white w-fit px-5 p-btn-big hover:bg-red-800'>ثبت تغییرات</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
    else
    {
        return(
            <></>
        )
    }

}
export async function getServerSideProps(ctx){

   const result= await getMyProfile(ctx);

    if(result!=undefined)
    {
        const profile = result;
        return{
            props: { profile }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }
}

export default withAuth(myProfile);