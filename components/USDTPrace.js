export default function price(props)
{
    console.log(props.pricings)
    return(
        <>
            {props.pricings.map((p)=> {
                if (p.currencyType == "USDT") {
                    const price = p.amount.toLocaleString();
                    return (<p>{price}</p>)
                }
            })}
        </>
    )
}