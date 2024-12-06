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
// add-project
export const addProjectAPI = async (reqbody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqbody,reqHeader)
}
// home-project
export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}
// user-projects
export const userProjectsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}
// all-projects
export const allProjectsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects`,{},reqHeader)
}


