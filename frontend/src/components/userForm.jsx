import axios from "axios"
import { useState } from "react"

const UserForm = ()=>{

    const [formData,setFormData]= useState({
        name:'',
        email:'',
        image:null
    })


    const formHandler=async(e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append('name',formData.name)
        data.append('email',formData.email)
        data.append('image',formData.image)
        try{

            await axios.post('http://localhost:8000/api/user',data)
            alert('Uploaded Successfully')
            setFormData({
                name:'',
                email:'',
                image:null
            })

        }catch(error){
            console.error(error)
        }

      
    }


    return(
        <>
        <h2>User Form</h2>
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}  />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} />
            <input type="file" placeholder="File"  onChange={(e)=>setFormData({...formData,image:e.target.files[0]})} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UserForm