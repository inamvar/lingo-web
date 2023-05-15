import axios from "axios";
import {Configs} from "../configs/configs";
import https from "https";
import {parseCookies, setCookie} from 'nookies';
import {Constants} from "./constants";
import appRoutes from "./appRoutes";
import API_ROUTES from "./apiRoutes";
import {handleApiError} from "./handleApiError";

const ax = axios.create({
    baseURL: Configs.clientSideUrl,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

ax.interceptors.request.use(function (config) {
        const cookies = parseCookies(config.ctx);

        const token= cookies[Constants.token];

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;

    },
    function (error)
    {
        return Promise.reject(error);
    }
);

// ax.interceptors.response.use(
//     (response) => {
//             return response;
//     },
//     async (error) => {
//
//         if (error!=null && error!=undefined && error.res!=undefined){
//             const originalRequest = error.res;
//         }
//
//
//         const res = error.config.ctx.res;
//         const cookies = parseCookies(error.config.ctx);
//         const refreshToken = cookies[Constants.refreshToken];
//         if (error.response.status === 401) {
//             if (!refreshToken) {
//                 // If there is no refresh token, redirect to the login page
//
//                 res.writeHead(302, { Location: appRoutes.Login });
//                 res.end();
//                 return Promise.reject(error);
//             }
//
//             try {
//                 const response = await ax.post(API_ROUTES.REFRESHTOKEN,{ refreshToken: refreshToken }
//                 );
//
//                 const { accessToken } = response.data;
//
//                 // Update the access token in cookies and the axios instance headers
//                 setCookie(error.config.ctx, Constants.token, accessToken, {
//                     expires:399999
//                 });
//                 ax.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//
//                 // Retry the original request with the new access token
//                 originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                 return ax(originalRequest);
//             } catch (error) {
//
//                 //destroyCookie(error.config.ctx,Constants.token);
//                 // If there is an error while getting a new access token, redirect to the login page
//                 res.writeHead(302, { Location: appRoutes.Login });
//                 res.end();
//                 return Promise.reject(error);
//             }
//         } else {
//             // Handle other errors using the handleApiError function
//             handleApiError(error);
//             return Promise.reject(error);
//         }
//     }
// );


export default ax;
