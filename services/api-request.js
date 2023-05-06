import axios from "axios";
import server from "../configs/server";
import https from "https";

const AxiosRequester = axios.create({
    baseURL: server,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});
// AxiosRequester.interceptors.request.use(
//     (config) => {
//         debugger;
//         console.log('startttttttttttttttttttttttttttttttttttttttttttttttttt');
//         debugger;
//         const accessToken = localStorage.getItem("token");
//         if (accessToken) {
//             console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
//             config.headers = {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }
//         console.log('asdadasttttttttttttttttttttttttttttttttt');
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );
export const ax=AxiosRequester;