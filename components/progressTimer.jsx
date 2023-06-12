import React, { useState, useEffect } from "react";
import {postResetPasswordRequest} from "../services/clientAppService";
import moment from "moment";

const ProgressBarTimer = ({onChildClick,handle}) => {

    let time = 10;

    const [timer, setTimer] = useState(time);
    const [timing,setTiming] = useState(true);

    let progress = (time - timer) / time;

    useEffect(() => {

        setTimer(time);
        console.log(time)
        let progress = (time - timer) / time;
        setTiming(true)

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);

    }, [handle]);

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        if (timer === 0) {
            let progress = 0;
            setTiming(false);
        }
    }, [timer]);

    async function handleClick()
    {
        const email = sessionStorage.getItem("ResetPassword-Key");

        const requestTime = sessionStorage.getItem("ResetPassword-expireTime");
        const expireTime = moment(requestTime);
        let timestamp = moment().format();

        const diffInDays = expireTime.diff(timestamp, "seconds");
        console.log(diffInDays)


        const result = await postResetPasswordRequest(email);
        console.log(result);
        if(result)
        {
            onChildClick("Hello!");
        }
    }

    return (
        <div>
            {timing?
                <div className='bg-grey rounded flex justify-end'
                     style={{
                         height: "10px",
                         width: "100%",
                     }}
                >
                        <div className='bg-darkGreen rounded'
                             style={{
                                 height: "10px",
                                 width: `${100 - progress * 100}%`,
                             }}
                        ></div>
                </div>
            :
                <p onClick={handleClick} className='darkBlue-color text-sm text-center cursor-pointer'>ارسال مجدد پیام</p>
            }
        </div>
    );
};

export default ProgressBarTimer;