import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import r1 from '../assets/r1.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectsAPI } from '../services/allAPI'

const Home = () => {
  const[homeProjects,setHomeProjects] = useState([])
      const [isLogin,setIsLogin] = useState(false)

      console.log(homeProjects);
      

useEffect(()=>{
  getHomeProjects()
  if(sessionStorage.getItem("token")){
    setIsLogin(true)
  }else{
    setIsLogin(false)
  }
},[])

const getHomeProjects = async()=>{
  try{
    const result = await homeProjectsAPI()
    console.log(result);
    if(result.status==200){
      setHomeProjects(result.data)
    }
    
  }catch(err){
    console.log(err);
    
  }
}

return (
<>
<div className="d-flex justify-content-center align-items-center rounded shadow w-100 " style={{minHeight:'100vh'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 style={{fontSize:'80px'}}> <i className="fa-brands fa-docker"></i> Project Fair </h1>
        <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!
        </p>
        {
          isLogin?
        
        <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>

        :

        <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
}
      </div>
      <div className="col-lg-6">
        <img className='img-fluid' src={r1} alt="" />
      </div>
    </div>
  </div>
</div>

{/* Explore Our Projects */}
<div className="my-5 text-center">
  <h1 className="mb-5">
    Explore Our Projects
  </h1>
  <marquee >
    <div className="d-flex">
     {
      homeProjects?.map(project=>(
        <div className="me-5">
        <ProjectCard displayData={project}/>
      </div>
      ))
     }


    </div>
  </marquee>
  <button className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS</button>
</div>

{/* our testimonials */}

<div className="d-flex justify-content-center align-items-center my-5 flex-column">
  <h1>Our Testimonals</h1>
  <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
    {/* card */}
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=199&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          "This platform has exceeded my expectations with its intuitive design and user-friendly interface. It's a pleasure to use every time."
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          "The attention to detail and seamless functionality make this site a standout. I appreciate the consistent quality and reliability."
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.ZovcbXnkaBJFkARfhq0ktQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          "Navigating this site is a breeze. The layout is clear, and everything works smoothly, making the overall experience highly."
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>



</>
  )
}

export default Home