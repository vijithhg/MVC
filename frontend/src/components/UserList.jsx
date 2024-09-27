import axios from "axios"
import { useEffect,  } from "react"


const UsersList = ({users,setUsers})=>{

    console.log(users,'users...')
  
    
    console.log(users,'user')
    return(
        <div>
            <h3>Users LIst</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user)=>{
                        return(
                            <div key={user?.id}>
                                <tr>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
                </table>
        </div>
    )}
    export default UsersList
