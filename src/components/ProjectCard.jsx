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
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default ProjectCard