import React from 'react'

export default function Student() {
  return (
    <div className='stu'>
      <div className='title'>
        <h1>Student Details</h1>
        <button id='btn'>Add New Student</button>
      </div>
      <table id='table' border={1}>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Doe</td>
            <td>25</td>
            <td>MERN</td>
            <td>November</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Biden</td>
            <td>26</td>
            <td>MERN</td>
            <td>September</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Barar</td>
            <td>22</td>
            <td>MERN</td>
            <td>September</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Christ</td>
            <td>23</td>
            <td>MERN</td>
            <td>October</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Elent</td>
            <td>24</td>
            <td>MERN</td>
            <td>November</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
          <tr>
            <td>Harshita Sharma</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td><a href='/stuDetails'>Edit</a></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
