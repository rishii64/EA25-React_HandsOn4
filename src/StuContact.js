import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StuContact() {
  let navigate = useNavigate()
  return (
    <div id='data'>
      <div id='inputDetails'>
        <input type='text'></input>
        <input type='text'></input>
      </div>
      <div id='inputDetails'>
        <input type='text'></input>
        <input type='text'></input>
      </div>
        <div id='inputDetails'>
          <button id='back' onClick={()=> navigate(-1)}>Back</button>
          <button id='update'>Submit</button>
        </div>
    </div>
  )
}
