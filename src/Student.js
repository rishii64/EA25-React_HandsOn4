import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Student() {
  const [data] = useState([
    {name: 'Rishi', id: 1, age: 22, course: 'MERN', batch: 'October'},
    {name: 'Mahi', id: 2, age: 22, course: 'MEAN', batch: 'November'},
    {name: 'Saptarsi', id: 3, age: 23, course: 'Full Stack', batch: 'October'},
    {name: 'Anshuman', id: 4, age: 22, course: 'MERN', batch: 'November'},
    {name: 'Anuj', id: 5, age: 23, course: 'FrontEnd', batch: 'May'},
    {name: 'Harsh', id: 6, age: 22, course: 'BackEnd', batch: 'September'}
  ])
  let nav = useNavigate()

  return (
    <div className='stu'>
      <div className='title'>
        <h1>Student Details</h1>
        <button id='btn' onClick={()=> nav('/StuContact')}>Add New Student</button>
      </div>

      <table id='table' border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=>{
            return(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link state={data} to={`/student/${item.id}`}>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
