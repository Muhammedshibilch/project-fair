import React, { useDebugValue, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import w1 from '../assets/w1.jpg'
import { addProjectAPI } from '../services/allAPI'



const Add = () => {
  const [preview,setpreview]= useState("")
  const[uploadFileStatus,setUploadFileStatus]=useState(false)

    const [projectDetails,setProjectDetails]=useState({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
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
    setpreview("")
    setUploadFileStatus(false)
    setProjectDetails({title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
  }
  const handleShow = () => setShow(true);

    const handleAddProject= async ()=>{
      const {title,languages,overview,github,website,projectImage}= projectDetails
      if(title && languages && overview && github && website && projectImage){
          // api call
          const reqBody = new FormData()
          reqBody.append("title",title)
          reqBody.append("languages",languages)
          reqBody.append("overview",overview)
          reqBody.append("github",github)
          reqBody.append("website",website)
          reqBody.append("projectImage",projectImage)

          const token = sessionStorage.getItem("token")
          if(token){
            const reqHeader = {
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }
            // make api call
            try{
              const result = await addProjectAPI(reqBody,reqHeader)
              console.log(result);
              if(result.status==200){
                alert(`${result?.data?.title} uploaded successfully!!!`)
                handleClose()

              }else{
                if(result.response.status==406){
                  alert(result.response.data)
                }
              }
              

            }catch(err){
console.log(err);

            }
          }



      }else{
        alert("please fill the form completely")
      }
    }





  return (
    <>
    <button onClick={handleShow} className="btn btn-primary">+ New Project</button>
    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} type="file" style={{display:'none'}} />
              <img src={preview?preview:w1} height={'200px'} className='img-fluid' alt="" />
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
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add