import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-4">
        <h1>All Projects</h1>
        <input type="text" placeholder='Search Projects by their Language' className='form-control w-25' />
      </div>
      <Row>
        <Col className='mb-3' sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
      </Row>
    </div>
    
    
    </>
  )
}

export default Projects