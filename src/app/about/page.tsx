import { useAppSelector } from "@/lib/store/hooks"
import { useSelector } from "react-redux"


function About(){
    // userSlice --> name, address ma j baseko xa tyo chayeeko / fetch 
   const data =  useAppSelector((store)=>store.huhuuu) // initialState ko access paunu vayo 
   /*
{
        name : "manish", 
        address : null
    }


   */
  data.name 
  data.address 
    return(
        <h1>This is about page hahahahaa</h1>
    )
}


export default About