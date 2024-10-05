import { useState } from "react"
import { register } from "../../services/authService"

const RegisterPage = ()=>{

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await register(user)
        }catch(error){
            console.error(error)
        }
       
    }
    return(
        <div>
           <h2>Register</h2>
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <input type="email" placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type="password" placeholder="Password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <input type="submit"/>
           </form>
        </div>
    )
}

export default RegisterPage