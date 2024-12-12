import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" className='img-fluid' alt="" />
      <Link to={'/'} className='btn btn-warning mt-4' >Go to Home</Link>
    </div>
  )
}

export default Pnf