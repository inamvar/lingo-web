import React, { useState, useEffect } from "react";
import {postResetPasswordRequest} from "../services/clientAppService";
import moment from "moment";

const ProgressBarTimer = ({onChildClick,handle,remainTime}) => {

    const time = 120;
    const [timer, setTimer] = useState(2);
    const [timing,setTiming] = useState(true);
    let progress = (time - timer) / time;


    useEffect(()=>{
        console.log('kkkkk');
       setTimer(time);
        console.log('kkkkk');
    },[]);

    useEffect(()=>{
        console.log('xxxxxxxxx');
        console.log(timer);
        console.log('xxxxxxxxx')
    },[remainTime])

    useEffect(()=>{

        setTiming(true);
        const interval = setInterval(() => {

            console.log('changingtimer');
            let v = timer-1;
            setTimer(v);
            progress = (time - timer) / time;

        }, 1000);
        return () => clearInterval(interval);

    },[]);


    // useEffect(() => {
    //
    //     // setTimer(time);
    //     // console.log(time)
    //     // let progress = (time - timer) / time;
    //     setTiming(true)
    //
    //     const interval = setInterval(() => {
    //        let v= timer-1;
    //         setTimer(v);
    //         //setTimer((prevTimer) => prevTimer - 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //
    // }, [handle]);

    // useEffect(() => {
    //
    //     const interval = setInterval(() => {
    //         setTimer((prevTimer) => prevTimer - 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //
    // }, []);

    useEffect(() => {
        if (timer === 0) {
            progress = 0;
            setTiming(false);
        }
    }, [timer]);

    async function handleClick()
    {
        const email = sessionStorage.getItem("ResetPassword-Key");
        const result = await postResetPasswordRequest(email);
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