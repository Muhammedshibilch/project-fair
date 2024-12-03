import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'


const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
     <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://th.bing.com/th?id=OIP.F5GE1m5a2Ei8wY8loW-3AgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img src="https://th.bing.com/th?id=OIP.F5GE1m5a2Ei8wY8loW-3AgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='img-fluid' alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Language Used : <span className='text-danger'>Language</span></h6>
              <p style={{textAlign:'justify'}}>
                <span className='fw-bolder'>Project OverView : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloremque ratione dolorem voluptatibus, beatae, unde vitae, quaerat optio assumenda laboriosam ipsam iure deserunt consectetur? Est laudantium non fuga illum maiores.
              </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/Muhammedshibilch/employee.git" target='_blank' className='btn btn-secondary me-2'><i className="fa-brands fa-github"></i></a>
            <a href="https://github.com/Muhammedshibilch/employee.git" className='btn btn-secondary'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default ProjectCard