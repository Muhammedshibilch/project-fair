import React, { useContext, useEffect, useState } from 'react'
 import Add from '../components/Add'
 import Edit from '../components/Edit'
import { userProjectsAPI } from '../services/allAPI'
import { addProjectContext, editProjectContext } from '../contexts/ContextShare'

const View = () => {
  const {editProjectResponse,seteditProjectResponse}= useContext(editProjectContext)
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectContext)
// create steps to store user projects
const [userProjects,setUserProjects]=useState([])
console.log(userProjects);

useEffect(()=>{
  getAllUserProjects()
},[addProjectResponse,editProjectResponse])

    const getAllUserProjects = async()=>{
      const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
          const result = await userProjectsAPI(reqHeader)
          console.log(result);
          if(result.status==200){
            setUserProjects(result.data)
          }
      }catch(err){
        console.log(err);
        
      }
    }
  }

  return (
    <>
    <div className="d-flex justify-content-between mt-5" >
      <h1 className="text-warning ">All Projects</h1>
      <div> <Add/> </div>

    </div>
    {/* project */}
    <div className="mt-2">
   {
   userProjects.length>0?
   userProjects?.map(project=>(
    <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
    <h3>{project?.title}</h3>
    <div className="d-flex align-items-center">
      <div> <Edit project={project}/> </div>
      <button className="btn"><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></button>
      <button className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
    </div>
  </div>
   ))
   :
   <div className="fw-bolder fs-3">You haven't uploaded any project yet.... Add your proejcts</div>
   
  }
    </div>
    
    
    
    
    </>
  )
}

export default View