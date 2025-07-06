
"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { useEffect } from "react"


/* 
nextjs--> default component --> server component --> server side rendering (SEO huncah, browser level features, hooks haru use garna mildainw)
reactjs --> component --> client component --> client side rendering (SEO hudainw, browser level, DOM level, hooks haru use garna milxa)


*/
function Haha(){

  

const {teacherName,teacherPassword} = useAppSelector((store)=>store.teacher)
console.log(data.teacherName,data.teacherPassword)
    return(
        <h1>Nepal best IT training</h1>
    )
}

export default Haha