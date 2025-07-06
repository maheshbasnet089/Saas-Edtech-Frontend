import axios from 'axios'


const API = axios.create({
    baseURL : "http://localhost:4000/api/", 
    headers : {
        "Content-Type" : "application/json", // send vayirako data ko format 
        "Accept" : "application/json" // receive huda kasto type ko format ko receive garne 
    }
})


export default API 
