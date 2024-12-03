import React from 'react'
 import Add from '../components/Add'
 import Edit from '../components/Edit'

const View = () => {
  return (
    <>
    <div className="d-flex justify-content-between mt-5">
      <h1 className="text-warning">All Projects</h1>
      <div> <Add/> </div>

    </div>
    {/* project */}
    <div className="border rounded p-2 d-flex justify-content-between mb-3">
      <h3>title</h3>
      <div className="d-flex align-items-center">
        <div> <Edit/> </div>
        <button className="btn"><a href="https://github.com/Muhammedshibilch/employe-server.git" target='_blank'><i className="fa-brands fa-github"></i></a></button>
        <button className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default View