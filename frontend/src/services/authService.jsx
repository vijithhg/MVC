import axios from "axios";

const API_URL = 'http://localhost:8000/api'

export const register =async(user)=>{
    const response = await axios.post(`${API_URL}/auth/register`,user)
    return response.data
}

export const login =async(userAuth)=>{
    const response = await axios.post(`${API_URL}/auth/login`,userAuth)
    return response.data
}