import axios from "axios";
import apiRoutes from "../common/apiRoutes";
const API_BASE_URL = process.env.Base_API_URL;

const options = {
    method: 'GET',
    url: API_BASE_URL+'/api/server/v1/Credit/GetCredits'
};
export default async function GetData(){
    var res = await axios.get(API_BASE_URL+"/api/server/v1/Credit/GetCredits",options);
    return res.data;
}