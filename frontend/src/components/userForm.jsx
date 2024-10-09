import { useState } from "react"

const UserForm = ()=>{

    const [formData,setFormData]= useState({
        name:'',
        email:'',
        image:null
    })


    const formHandler=(e)=>{
        e.preventDefault()
      
    }


    return(
        <>
        <h2>User Form</h2>
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}  />
            <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
            <input type="file" placeholder="File" onChange={(e)=>setFormData({...formData,image:e.target.files[0]})} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UserForm