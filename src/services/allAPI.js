import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";


// registerAPI
export const registerAPI = async (reqbody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqbody)
}

// login
export const loginAPI = async(reqbody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqbody)
}