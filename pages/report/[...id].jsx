import {getOrderHistoryPDF} from "../../services/clientAppService";

export default function id({reportPDF})
{
    return(
        <div dangerouslySetInnerHTML={{ __html: reportPDF }} />
    )
}

export async function getServerSideProps(context)
{
    var idReport = context.query.id[0];
    const reportPDF = await getOrderHistoryPDF(idReport,context);

    return{
        props: {reportPDF}
    }
}