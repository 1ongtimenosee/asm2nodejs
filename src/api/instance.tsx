import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
})
instance.interceptors.request.use(async (config:any)=>{
    try {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    } catch (error) {
        console.log(error)
    }
    return config
})
export default instance
