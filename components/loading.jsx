export default function LoadingSpinner()
{
    return (
        <div id='spinner' style={{display:"none"}}>
            <div className="lds-ring spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}