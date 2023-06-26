import {useState} from "react";

export default function price(props)
{
    return(
        <>
            {props.pricings.map((p)=> {

                if (p.currencyType == "IRR")
                {
                    const price = ((p.amount)/10).toLocaleString();
                    return (<p>{price}</p>)
                }

            })}
        </>
    )
}