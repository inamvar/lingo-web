import moment from "moment";

export default function timeMaker(props)
{
    let timestamp = moment(props.date);
    const time = timestamp.format('HH:mm:ss');

    return(
        <>
            <p>{time}</p>
        </>
    )
}