const InputText=({name,register,placeholder,className,rows,error})=>
{
    return(
        <>
            <div className='flex-auto'>
                <textarea rows={rows} name={name} className={className} placeholder={placeholder}  {...register(name)} />
                {error && <div className="text-red-600 text-xs mt-1">{error}</div>}
            </div>
        </>
    );
}
InputText.defaultProps={
    type:"text",
    className:"rounded w-full py-3 px-3 text-black text-sm bg-grey darkgrey-color focus:outline-none",
}
export default InputText;