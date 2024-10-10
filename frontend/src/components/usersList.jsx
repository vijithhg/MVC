import axios from "axios"
import { useEffect, useState } from "react"

const UsersList = ()=>{
    const[users,setUsers] = useState([])
    const fetchUsers = async()=>{
        try{
          const response =   await axios.get('http://localhost:8000/api/user')
          setUsers(response.data.userData)

        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    console.log(users)
    return(
        <div>
            <h5>Users List</h5>
            {users?.map((user)=>{
                return(
                    <div key={user?._id}>
                        <h5>{user?.name}</h5>
                        <h5>{user?.email}</h5>
                        <img src={user?.imageUrl}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default UsersList