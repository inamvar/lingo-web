import InputText from "./InputText";

const InputSelect=({options,name,className,register,error})=>{
    return(
        <>
        <div className='form-group'>
            <select  className={className} name={name} {...register(name)}>
                <option>---انتخاب کنید ---</option>
                {
                    options.map(x=>{
                             return   <option key={x.value} value={x.value}>{x.name}</option>
                    })
                }
            </select>
            {error && <div className='text-red-900'>{error}</div>}
        </div>
        </>
    );
}

InputSelect.defaultProps={
    className:"rounded w-full py-3 px-3 text-black text-sm bg-grey focus:outline-none"
};
export default InputSelect;