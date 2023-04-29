import {withAuth} from "../../components/Authorized";
import {useContext} from "react";
import authContext from "../../context/authContext";
import Meta from "../../components/meta";

const Dashboard = () => {

    const auth= useContext(authContext);

    return(
        <>
            <Meta title='داشبورد'/>
            {auth.authState.user?.email}

            {/*<div className='flex flex-col sm:flex-row'>*/}
            {/*    <div className='dashboard-item flex flex-col'>*/}
            {/*        <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M51.5 0C68.1682 0 81.6805 13.5123 81.6805 30.1806C81.6805 46.849 68.1682 60.3613 51.5 60.3613C34.8316 60.3613 21.3193 46.849 21.3193 30.1806C21.3395 13.5205 34.8398 0.020385 51.498 0H51.5ZM51.5 51.3923C63.2148 51.3923 72.7116 41.8955 72.7116 30.1807C72.7116 18.466 63.2148 8.96909 51.5 8.96909C39.785 8.96909 30.2882 18.4659 30.2882 30.1806C30.301 41.8904 39.7901 51.3795 51.4988 51.3922H51.4998L51.5 51.3923ZM94.1744 103.852L92.5152 94.6499C88.8362 75.0716 71.8757 60.4558 51.5004 60.4511H51.4977C31.1406 60.4511 14.1901 75.0364 10.5257 94.327L10.4846 94.5872L8.82995 103.762L0 102.157L1.6592 92.9637C6.15972 69.2062 26.7567 51.4821 51.4933 51.4821H51.5004H51.5001C76.2603 51.4884 96.87 69.2519 101.287 92.7298L101.336 93.0444L103 102.26L94.1744 103.852Z" fill="#F84C4D"/>*/}
            {/*        </svg>*/}
            {/*        <p>پروفایل من</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export default withAuth(Dashboard);
