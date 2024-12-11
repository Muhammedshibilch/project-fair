import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import h1 from '../assets/h1.jpg'
import SERVER_BASE_URL from '../services/serverUrl';


const Profile = () => {
  const [open, setOpen] = useState(false);
  const [preview,setpreview] = useState("")
  const [exisitingProfilePic,setExisitingProfilePic]=useState("")
  // profilePic key of userDetails is used to store uploaded user profile pic file 
  const [userDetails,setUserDetails]= useState({
    username:"",email:"",password:"",github:"",linkedin:"",profilePic:""
  })
console.log(userDetails);
// get exisiting user details from the section and store it to userDetails state
useEffect(()=>{
  if(sessionStorage.getItem("user")){
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({
      ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin
    })
    setExisitingProfilePic(user.profilePic)
  }
},[open])

// generate url for upload profile pic
useEffect(()=>{
  if(userDetails.profilePic){
    setpreview(URL.createObjectURL(userDetails.profilePic))
  }else{
    setpreview("")

  }
},[userDetails.profilePic])

const handleUserUpdate = async ()=>{
  // get all user details 
  const {username,email,password,github,linkedin,profilePic}= userDetails
  // if text filed have value
  if(github && linkedin){
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
 preview ?   reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",exisitingProfilePic)
//  reqHeader
const token = sessionStorage.getItem("token")
if(token){
  const reqHeader = {
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
}

  }else{
    alert("Please fill the form completelty")
  }
}



  return (
    <>
    <div className="d-flex justify-content-evenly">
      <h3 className="text-warning">Profile</h3>
      <button onClick={()=>setOpen(!open)} className="btn text-warning"><i className="fa-solid fa-chevron-down"></i></button>
    </div>
    <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
          {/* upload pic */}
          <label className='text-center mb-2' >
<input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} style={{display:'none'}} type="file" />
{
  exisitingProfilePic=="" ?
  <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:h1} alt="" />
  :
  <img width={'200px'} height={'200px'} className='rounded-circle'  src={preview?preview:`${SERVER_BASE_URL}/uploads/${exisitingProfilePic}`} alt="" />

}

</label>





         <div className="mb-2 w-100">
          <input type="text" value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} placeholder='User GitHub Link' className='form-control' />
         </div>
         <div className="mb-2 w-100">
          <input type="text" value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} placeholder='User LinkedIn Link' className='form-control' />
         </div>
         <div className="d-grid w-100">
          <button className="btn btn-warning">Update</button>
         </div>
        </div>
      </Collapse>
    
    
    
    
    </>
  )
}

export default Profile