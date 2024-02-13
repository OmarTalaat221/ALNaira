import React from 'react'
import './confcomp.css'
const Confirm3 = ({status,comp,id,cancleoperpaid,confirmoperpaid}) => {
  return (
    <div className='confcomp'>
      <p>Are you sure you want to  make  this {comp} {id} {status}</p>
      <div className="conf_action">
        <button onClick={confirmoperpaid} className='btn btn-success'>Yes</button>
        <button onClick={cancleoperpaid} className='btn btn-danger'>No</button>
      </div>
    </div>
  )
}

export default Confirm3
