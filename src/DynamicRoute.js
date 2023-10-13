import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

export default function DynamicRoute() {
  let location = useLocation()
  let navigate = useNavigate()
  const data = useParams()

  let changeHandle = ()=> {
    console.log("input");
  }
  let filterData = location.state.filter((e) => 
    e.id === Number(data.id) ? e : null
  )
  let [details] = useState(filterData[0])
  return (
    <div id='data'>
      <div id='inputDetails'>
        <input type='text' value={details.name} onChange={changeHandle}></input>
        <input type='text' value={details.age} onChange={changeHandle}></input>
      </div>
      <div id='inputDetails'>
        <input type='text' value={details.course} onChange={changeHandle}></input>
        <input type='text' value={details.batch} onChange={changeHandle}></input>
      </div>
        <div id='inputDetails'>
          <button id='back' onClick={()=> navigate(-1)}>Back</button>
          <button id='update'>Update</button>
        </div>
    </div>
  )
}
