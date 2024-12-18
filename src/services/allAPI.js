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
export const allProjectsAPI = async(reqHeader,searchKey)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}
// projects/67527b598cf2b6a85e23ea01/edit
export const updateProjectAPI = async(id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reqbody,reqHeader)

}

// /projects/:id/remove
export const deleteProjectAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/projects/${id}/remove`,{},reqHeader)
}
// user/edit
export const updateUserAPI = async(reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqbody,reqHeader)
}
