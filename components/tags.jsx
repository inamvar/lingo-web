
export default function tags(props)
{
    if(props.tags.length != 0)
    {
        return(
            <>
                <p className='darkBlue-color font-bold text-lg'>برچسب ها</p>
                <div className='flex gap-5 flex-wrap'>
                    {props.tags.filter(tag=>tag!=='').map((tag)=>
                        <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center cursor-pointer hover:bg-gray-300 w-fit'>{tag}</div>
                    )}
                </div>
            </>
        )
    }
}