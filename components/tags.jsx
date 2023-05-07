
export default function tags(props)
{
    if(props.tags.length != 0)
    {
        return(
            <>
                <p className='darkBlue-color font-bold'>برچسب ها</p>
                <p>تگ ها</p>
                <div className='flex gap-5 flex-wrap'>
                    {props.tags.map((tag)=>
                        <div className='bg-gray-200 rounded p-1 w-20 whitespace-nowrap text-center'>{tag}</div>
                    )}
                </div>
            </>
        )
    }
}