"use client"
import { useState } from "react"



function Button(){
        const [email,setEmail] = useState("")

    return(
      <form>
            <input type="text" placeholder="Enter your email to sent otp" onChange={(e)=>setEmail(e.target.value)}  />
        </form>
    )
}

export default Button