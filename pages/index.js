import Head from 'next/head';
import {getCredits} from "../services/appServices";
export default  function Home({result}) {
    if (result.isSuccess) {
        return (
            <>
                {result.data.map((x) => {
                    return (
                        <h1 key={x.userId}>
                            {x.fullName}
                        </h1>
                    );
                })}
            </>
        );
    }
        return (<>
 <h1></h1>
        </>);
    return (
    <div>
      <Head>
        <title>لینگو</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}


export async function getStaticProps() {
    var result=await getCredits();
    console.log(result);

    return {
        props: {
        result
        },
    };
}

export async function componentDidUpdate(){

}