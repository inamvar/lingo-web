function Error({ statusCode }) {
    console.log(statusCode);

    if(statusCode == 404)
    {
        return(
            <div className='flex w-full h-screen justify-center items-center'>
                <p className='text-red-600'>صفحه مورد نظر یافت نشد</p>
            </div>
        )
    }

    if(statusCode == 500)
    {
        return(
            <div className='flex w-full h-screen justify-center items-center'>
                <p className='text-red-600'>خطا در سرور</p>
            </div>
        )
    }

    else
    {
        return(
            <div className='flex w-full h-screen justify-center items-center'>
                <p className='text-red-600'>خطایی رخ داده است</p>
            </div>
        )
    }
}

Error.getInitialProps = ({ res, err }) => {
    console.log(res);
    console.log(err);
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;