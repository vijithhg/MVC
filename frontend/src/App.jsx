
import { useState,useEffect } from 'react';
import UsersList from './components/UserList'
import UserRegistration from './components/UserRegistration'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function App() {
  const[users,setUsers]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users').then((res)=>setUsers(res?.data?.data))
},[])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <UsersList users={users} setUsers={setUsers} />
        </div>
        <div className='col-6'>
          <UserRegistration />
        </div>
      </div>
    </div>

  )
}

export default App
