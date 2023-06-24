import React, { useState, useEffect } from "react";
import { postResetPasswordRequest } from "../services/clientAppService";
import moment from "moment";
import {useRouter} from "next/router";
import appRoutes from "../common/appRoutes";

const ProgressBarTimer = ({ expireTime,requestTime,onProgressFinished,request }) => {

    const router = useRouter();
    const [finished, setFinished] = useState(false);
    let currentTime = new Date().getTime();
    let expTime = new Date(expireTime).getTime();
    let reqTime = new Date(requestTime).getTime();
    let remain = expTime - currentTime;


    const [remainingTime, setRemainingTime] = useState(remain);

    const [finalProgress,setFinalProgress] = useState(100);


    useEffect(() => {

        setFinished(false);
        const interval = setInterval(() => {
            setRemainingTime((prev) =>{
                let currentTime= new Date().getTime();
                let remain= expTime-currentTime;
                return remain;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() =>
    {
        if (remainingTime <= 0)
        {
            setFinished(true);
            setFinalProgress(0);
        }
        else
        {
            setFinalProgress((prev)=>{
                let vv = expTime - currentTime ;
                let total = expTime - reqTime ;
                let res = vv/total ;
                return res;
            });
        }
    }, [remainingTime]);


    return (
        <div className='w-full'>

            <div
                className="bg-grey rounded flex justify-end"
                style={{
                    height: "10px",
                    width: "100%",
                }}
            >
                <div
                    className="bg-darkGreen rounded"
                    style={{
                        height: "10px",
                        width: `${finalProgress * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBarTimer;