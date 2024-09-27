import axios from "axios"
import { useState } from "react"

const UserRegistration = ()=>{

    const[name,setName]= useState()
    const[email,setEmail]= useState()

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users',{name,email})
    }
    return(
        <>
        <h2>User Registration</h2>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
           <input type="submit"/>
        </form>
        </>
    )
}

export default UserRegistration