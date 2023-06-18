import moment from 'moment-jalaali';

export default function dateMaker(props)
{
    const momentDate = moment(props.date);
    const persianDate = momentDate.format('jYYYY/jM/jD');

    return(
        <>
            <p>{persianDate}</p>
        </>
    )
}