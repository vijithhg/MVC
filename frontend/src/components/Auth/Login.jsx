import { useState } from "react"
import { login } from "../../services/authService"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const LoginPage = ()=>{

    const navigate = useNavigate()

    const [userAuth,setUserAuth] = useState({
        email:'',
        password:''
    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await login(userAuth)
            toast.success(response.message)
            navigate('/dashboard')
        }catch(error){
            console.error(error)
        }
    }
    return(
        <div>
            <h2>Login</h2>
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={(e)=>setUserAuth({...userAuth,email:e.target.value})}/>
            <input type="password" placeholder="Password" onChange={(e)=>setUserAuth({...userAuth,password:e.target.value})} />
            <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage