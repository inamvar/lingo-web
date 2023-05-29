import mmoment from "moment";
import moment from 'moment-jalaali';
import jalaali from "jalaali-js";

export default function dateMaker(props)
{

   // let timestamp = mmoment(props.date);
    // let date = timestamp.format('L');
    //
    const momentDate = moment(props.date);
     const persianDate = momentDate.format('jYYYY/jM/jD')
    //
    // console.log(persianDate);

    return(
        <>
            <p>{persianDate}</p>
        </>
    )
}