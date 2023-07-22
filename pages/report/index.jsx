import pdfHelper from "../../common/pdfHelper";
import {getOrderHistoryPDF} from "../../services/appServices";

const Index =()=>{

    return (
        <>
            {/*<div dangerouslySetInnerHTML={{ __html:result }} />*/}
        </>
    );
}



Index.getInitialProps =async (context) =>{

    const query = context.query;
    const req = context.req;
    const res = context.res;
    const id = query.id;
    const result = await getOrderHistoryPDF(id,context);

    const isServer = !!req;

    if (isServer) {
        const buffer = await pdfHelper.componentToPDFBuffer(

            `<h1>${result}</h1>`
        );

        // prompt to download pdf
        res.setHeader('Content-disposition', 'attachment; filename="article.pdf');
        // set content type
        res.setHeader('Content-Type', 'application/pdf');
        // output the pdf buffer
        res.end(buffer);
    }

    return {
        props:{

        }
    };
}
// Index.getLayout =(page)=> {
//     return (
//         <>{page}</>
//     )
// }

// export async function getServerSideProps(ctx){
//
//     console.log('ctx:::');
//     console.log(ctx);
//     const query=ctx.query;
//     console.log(query);
//    // const req=context.req;
//     //const res=context.res;
//
//     const  id=query.id;
//     const  resultt= await getOrderHistoryPDF(id,ctx);
//     console.log('result is ::::::::::::::');
//     console.log(resultt);
//     if (resultt!=undefined){
//         return{
//             props: {
//                 result:resultt
//             }
//         }
//     }
//     else
//     {
//         return{
//             props: {  }
//         }
//     }
// }

export default Index;