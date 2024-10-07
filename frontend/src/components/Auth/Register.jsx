import { useState } from "react"
import { register } from "../../services/authService"
import toast from "react-hot-toast"

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
            toast.success('Successfully Registered')
            setUser({
                name:'',
                email:'',
                password:''
            })
        }catch(error){
            console.error(error)
        }
       
    }
    return(
        <div>
           <h2>Register</h2>
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <input type="email" placeholder="Email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <input type="submit"/>
           </form>
        </div>
    )
}

export default RegisterPage