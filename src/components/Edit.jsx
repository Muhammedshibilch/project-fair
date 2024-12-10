import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SERVER_BASE_URL from '../services/serverUrl'
import { updateProjectAPI } from '../services/allAPI'
import { editProjectContext } from '../contexts/ContextShare'

const Edit = ({project}) => {
  // project key in the props will hold project data tobe displayed in edit compoenent
  const {editProjectResponse,seteditProjectResponse} = useContext(editProjectContext)
  const [preview,setpreview]= useState("")
  const[uploadFileStatus,setUploadFileStatus]=useState(false)

    const [projectDetails,setProjectDetails]=useState({
 id:project?._id ,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
    })
    // projectImage is used to to hold user uploaded file instead of existing file
    
    console.log(projectDetails);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(projectDetails.projectImage.type=="image/png" || projectDetails.projectImage.type=="image/jpg" || projectDetails.projectImage.type=="image/jpeg"){
      setUploadFileStatus(true)
      setpreview(URL.createObjectURL(projectDetails.projectImage))
    }else{
      // invalid image file
      setUploadFileStatus(false)
      setProjectDetails({...projectDetails,projectImage:""})
    }
  },[projectDetails.projectImage])
  



  const handleClose = () =>{
    setShow(false);
    setProjectDetails({
       id:project?._id ,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
    })
  }
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id:project?._id ,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
   })
  }

  const handleUpdateproject = async ()=>{
    const {id,title,languages,overview,github,website,projectImage}= projectDetails
    if(title && languages && overview && github && website){
      // api call
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project?.projectImage)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
// make api call
try{
  const result = await updateProjectAPI(id,reqBody,reqHeader)
  if(result.status==200){
    alert("Project updated succesfully!!")
    handleClose()
    seteditProjectResponse(result)
  }  

}catch(err){
  console.log(err);
  
}

  }
    }else{
      alert("Please fill the form completely")
    }
  }



  return (
    <>
     <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit"></i></button>
    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton> 
          <Modal.Title>Edit Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} type="file" style={{display:'none'}} />
              <img src={preview?preview:`${SERVER_BASE_URL}/uploads/${project?.projectImage}`} height={'200px'} className='img-fluid' alt="" />
            </label>
            {
              !uploadFileStatus &&
              <div className="text-warning fw-bolder">*upload only the following file types (jpeg,jpg,png) here!</div>
              
            }
          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input type="text" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='form-control' placeholder='Project Title' />
            </div>
            <div className="mb-2">
              <input type="text" value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} className='form-control' placeholder='Project Languages' />
            </div>
            <div className="mb-2">
              <input type="text" value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} className='form-control' placeholder='Project Overview' />
            </div>
            <div className="mb-2">
              <input type="text" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} className='form-control' placeholder='Project github Link' />
            </div>
            <div className="mb-2">
              <input type="text" value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} className='form-control' placeholder='Project website Link' />
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateproject}>Update</Button>
        </Modal.Footer>
      </Modal>
    
    
    
    
    </>
  )
}

export default Edit