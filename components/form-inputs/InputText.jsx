const InputText=({name,register,placeholder,className,type,error})=>
{
    return(
        <>
            <div className='flex-auto'>
            <input name={name}  type={type} className={className} placeholder={placeholder}  {...register(name)} />
            {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
            </div>
        </>
    );
}
InputText.defaultProps={
    type:"text",
    className:"rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none",
}
export default InputText;