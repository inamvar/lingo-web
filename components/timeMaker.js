import moment from "moment";

export default function timeMaker(props)
{
    let timestamp = moment(props.date);
    let time = timestamp.format('LT');

    return(
        <>
            <p>{time}</p>
        </>
    )
}