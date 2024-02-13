import React from 'react'
import './confcomp.css'
const Confirm = ({status,comp,id,cancleoper,confirmoper}) => {
  return (
    <div className='confcomp'>
      <p>Are you sure you want to {status} This {comp} {id}</p>
      <div className="conf_action">
      <button onClick={confirmoper} className='btn btn-success'>Yes</button>
      <button onClick={cancleoper} className='btn btn-danger'>No</button>
      </div>
    </div>
  )
}

export default Confirm
