import axios from "axios"

const APIWITHTOKEN = axios.create({
    baseURL : "http://localhost:4000/api/", 
    headers : {
        "Authorization" : localStorage.getItem("token") !== null ||localStorage.getItem("token") !== undefined || localStorage.getItem("token") !== "" ? localStorage.getItem("token") : null,
        "Content-Type" : "application/json", // send vayirako data ko format 
        "Accept" : "application/json" // receive huda kasto type ko format ko receive garne 
    }
})


export default APIWITHTOKEN