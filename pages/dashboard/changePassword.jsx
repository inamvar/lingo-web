import InputText from "../../components/form-inputs/InputText";
import AppRoutes from "../../common/appRoutes";
import {withAuth} from "../../components/Authorized";
import AuthContext from "../../context/authContext";
import {validator} from "../../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {logout, updateMyPass} from "../../services/clientAppService";
import {pushAlert} from "../../common/notifier";
import {getMyPassword} from "../../services/appServices";
import {useContext} from "react";
import {useRouter} from "next/router";

const ChangePassword = (props) =>
{
    const context = props.authContext;
    const router = useRouter();

    if(context.authState.authenticated)
    {
        console.log(props.password);

        const schema = validator.object({
            oldPass:validator.string().required('نوشتن رمز عبور قدیمی اجباری است'),
            newPass:validator.string().required('نوشتن رمز عبور جدید اجباری است'),
            reNewPass:validator.string().required('نوشتن تکرار رمز عبور جدید اجباری است')
        })

        const { register, handleSubmit, watch,
            formState: { errors } } = useForm({
            resolver:yupResolver(schema)
        });

        const onSubmit = async (data) => {

            var result= await updateMyPass({
                currentPassword:data.oldPass,
                newPassword:data.newPass,
                confirmNewPassword:data.reNewPass
            },props.ctx);

            if (result==true)
            {
                pushAlert({
                    type:'success',
                    message:'عملیات با موفقیت انجام شد'
                });
                await logout();
                context.setAuthState({authenticated:false,user:null});
                router.push(AppRoutes.Login);
            }
            else
            {
                pushAlert({
                    type:'error',
                    message:result
                });
            }
        };


        return(
            <>
                <div className='flex justify-center items-center mt-16'>
                    <div className='w-2/3 bg-white gap-8 flex flex-col justify-center items-center p-7 rounded'>

                        <div className='flex justify-evenly items-center gap-1 w-full'>
                            <hr className="border-4 border-red w-2/5 duration-500"/>
                            <p className='darkBlue-color font-bold whitespace-nowrap'>تغییر رمز</p>
                            <hr className="border-4 border-red w-2/5 duration-500"/>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-8'>

                            <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
                                <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                    <p>رمز عبور قدیمی</p>
                                    <InputText type='password' error={errors.oldPass?.message} register={register}  placeholder='رمز عبور قدیمی' name='oldPass'/>
                                </div>
                                <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                    <p>رمز عبور جدید</p>
                                    <InputText type='password' error={errors.newPass?.message} register={register}  placeholder='رمز عبور جدید' name='newPass'/>
                                </div>
                                <div className='flex flex-col w-full md:w-1/3 gap-2'>
                                    <p>تکرار رمز عبور جدید</p>
                                    <InputText type='password' error={errors.reNewPass?.message} register={register}  placeholder='تکرار رمز عبور جدید' name='reNewPass'/>
                                </div>
                            </div>

                            <div className='flex flex-row justify-center'>
                                <button type='submit' className='bg-cyan-500 text-sm btn-page bg-red text-white w-fit px-5 p-btn-big hover:bg-red-800'>ثبت تغییرات</button>
                            </div>
                        </form>

                    </div>
                </div>
            </>
        )
    }
    else
    {
        return(
            <></>
        )
    }
}

export async function getServerSideProps(ctx)
{
    const result= await getMyPassword(ctx);

    if(result!=undefined)
    {
        const password = result;
        return{
            props: { password }
        }
    }
    else
    {
        return{
            props: {  }
        }
    }
}

export default withAuth(ChangePassword);