import axios from "axios";
import {Configs} from "../configs/configs";
import https from "https";
import nookies from 'nookies'
import {Constants} from "./constants";
import appRoutes from "./appRoutes";
import API_ROUTES from "./apiRoutes";
import {handleApiError} from "./handleApiError";
import jwt from 'jsonwebtoken';


const ax = axios.create({
    baseURL: Configs.serverSideUrl,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

let isRefreshing = false;
let refreshSubscribers = [];

ax.interceptors.request.use(
    async (config) => {

        console.log('fff');
        const cookies = nookies.get(config.ctx);

        const refreshToken = cookies[Constants.refreshToken];
        const accessTokenExpires = cookies[Constants.tokenExpireTime];

        if (accessTokenExpires) {
            if (await isTokenExpired(accessTokenExpires)===true) {
                console.log('token is expired');
                if (!isRefreshing) {
                    isRefreshing = true;
                    try {
                        const refreshTokenResult = await refreshAccessToken(refreshToken);
                        console.log('refreshToken Result is:');
                        console.log(refreshTokenResult);
                        if (refreshTokenResult==null){
                            console.log('refreshToken NotFound');
                            return config;
                        }

                        console.log('decoding');
                        const decodedToken = jwt.decode(refreshTokenResult.accessToken);

                        const remainingTime = decodedToken.exp - Date.now() / 1000;
                        console.log(remainingTime);
                        console.log('setting cookies');

                        nookies.set(config.ctx, Constants.token, refreshTokenResult.accessToken, {
                            maxAge: remainingTime,
                            path:'/'
                        });
                        nookies.set(config.ctx,Constants.refreshToken,refreshTokenResult.refreshToken,{
                            maxAge:365,
                            path:'/'
                        });
                        nookies.set(config.ctx,Constants.tokenExpireTime,refreshTokenResult.accessTokenExpiresAt,{maxAge:365,path:'/'});

                        console.log('cookies seted');
                        config.headers['Authorization'] = `Bearer ${refreshTokenResult.accessToken}`;

                        isRefreshing = false;

                    } catch (error) {

                        console.log('got error');
                        console.log(error);
                        // Handle refresh token failure
                        handleApiError(error);
                        isRefreshing = false;
                        return config;
                    }
                }
            }
            else
            {
                const token = cookies[Constants.token];
                console.log('token is not expired');
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return config;
    },
    function (error) {
        console.log('--- request rejected ---');
        return Promise.reject(error);
    }
);

async function isTokenExpired(token)
{
    try {
        const expDate = new Date(token);
        const newExpDate = expDate;
        const utcExp= newExpDate.toUTCString();
        console.log(utcExp);
        const currentDate = new Date();
        const currentUtc= currentDate.toUTCString();
        console.log(currentUtc);
        var result= currentUtc >= utcExp;
        console.log('is Token expired:'+result);
        return result;
    }
    catch (e) {
        console.log('checking is tokenexpired got error');
        console.log(e);
        return false;
    }

}

async function refreshAccessToken(refreshToken)
{
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
    }
    catch (error) {
        console.log('got error while trying to get refresh token');
        console.log(error);
        return null;
    }
}
export default ax;
