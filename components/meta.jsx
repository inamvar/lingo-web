import Head from "next/head";

const Meta = ({title,description}) => {

    return (
        <>
            <Head>
                <title>لینگو-{title}</title>
                <meta charSet='utf-8'/>
                <meta name='language' content='fa'/>
                <meta name='expires' content='never'/>
                <meta name="description" content={description}/>
                <meta name="robots" content="index, follow"/>
            </Head>
        </>
    );
}

Meta.defaultProps = {
    title:"",
    description:"آکادمی آموزش زبان"
};
export default Meta;