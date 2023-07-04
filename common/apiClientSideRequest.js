import axios from "axios";
import {Configs} from "../configs/configs";
import https from "https";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {Constants} from "./constants";
import appRoutes from "./appRoutes";
import API_ROUTES from "./apiRoutes";
import {handleApiError} from "./handleApiError";
import {pushAlert} from "./notifier";
import jwt from "jsonwebtoken";

const ax = axios.create({
    baseURL: Configs.clientSideUrl,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

let isRefreshing = false;
let refreshSubscribers = [];

ax.interceptors.request.use(
    async (config) => {
        // Parse
        const cookies = parseCookies();
         console.log(config);
        console.log( cookies );
        //const cookies = nookies.get(config.ctx);
        const token = cookies[Constants.token];
        const refreshToken = cookies[Constants.refreshToken];
        const accessTokenExpires = cookies[Constants.tokenExpireTime];

        if (accessTokenExpires)
        {
            if (await isTokenExpired(accessTokenExpires)===true)
            {
                console.log('token is expired');
                if (!isRefreshing) {
                    isRefreshing = true;
                    try {
                        const refreshTokenResult = await refreshAccessToken(refreshToken);
                        console.log('refreshToken Result is:');
                        console.log(refreshTokenResult);
                        if (refreshTokenResult==null){
                            return Promise.reject('expired');
                        }

                        console.log('decoding');
                        const decodedToken = jwt.decode(refreshTokenResult.accessToken);

                        const remainingTime = decodedToken.exp - Date.now() / 1000;
                        console.log(remainingTime);
                        console.log('setting cookies');

                        setCookie(config.ctx, Constants.token, refreshTokenResult.accessToken, {
                            maxAge: remainingTime,
                            path:'/'
                        });
                        setCookie(config.ctx,Constants.refreshToken,refreshTokenResult.refreshToken,{
                            maxAge:365,
                            path:'/'
                        });
                        setCookie(config.ctx,Constants.tokenExpireTime,refreshTokenResult.accessTokenExpiresAt,{maxAge:365,path:'/'});

                        console.log('cookies seted');
                        config.headers['Authorization'] = `Bearer ${refreshTokenResult.accessToken}`;
                    } catch (error) {
                        console.log('got error');
                        console.log(error);
                        // Handle refresh token failure
                        handleApiError(error);
                        return Promise.reject(error);
                    } finally {
                        isRefreshing = false;
                    }
                }
            }
            else{
                console.log('token is not expired');
                config.headers['Authorization'] = `Bearer ${token}`;

            }
        }

        // Check if token is expired and refresh if needed


        // config.headers['ContentType'] = 'application/json';
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


async function isTokenExpired(token)
{
    const expDate = new Date(token);
    const newExpDate = expDate;
    const utcExp = newExpDate.toUTCString();
    console.log(utcExp);
    const currentDate = new Date();
    const currentUtc= currentDate.toUTCString();
    console.log(currentUtc);
    var result = currentUtc >= utcExp;
    console.log('is Token expired:'+result);
    return result;
}


async function refreshAccessToken(refreshToken) {
    console.log('getting refresh token');
    try {
        const response = await ax.post("/Auth/RefreshToken", {
            refreshToken,
        });
        console.log(response);



        if (response.data.success == true)
        {
            const { accessToken, refreshToken,accessTokenExpiresAt } = response.data.data;
            return { accessToken, refreshToken,accessTokenExpiresAt };
        }
        else {
            return  null;
        }

    } catch (error) {

        // Handle refresh token failure
        throw error;
    }
}
export default ax;
