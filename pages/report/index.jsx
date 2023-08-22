import pdfHelper from "../../common/pdfHelper";
import {getOrderHistoryPDF} from "../../services/appServices";
import {router} from "next/router";
import appRoutes from "../../common/appRoutes";

const Index =(props)=>{

    setTimeout(()=>{
        console.log(props.props.pdfBlob);
        const url = window.URL.createObjectURL(new Blob([props.props.pdfBlob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'order-hsistory.pdf');
        document.body.appendChild(link);
        link.click();
         router.push(appRoutes.MyTransactions);
    },1000);

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

    if (isServer) {}

    return {
        props:{
        pdfBlob:result
        }
    };
}

export default Index;