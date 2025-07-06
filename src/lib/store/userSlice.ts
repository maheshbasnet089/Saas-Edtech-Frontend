import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";




const userInitialState : IUserInitialState =  {
        name : "manish", 
        address : null
    }

const userSlice = createSlice({
    name : "userSlice", 
    initialState : userInitialState, 
    reducers : {
        // state --> mathi ko intialState 
        // action --> trigger garda pathaune data aaune kura 
        setName(state:IUserInitialState,action:PayloadAction<string>){
         state.name = action.payload //manish
        },

        setAddress(state:IUserInitialState,action:PayloadAction<string>){
          state.address =  action.payload
        }, 
        sethaha(state,action){

        }
    }
})




// action 
const {setName,setAddress,sethaha} = userSlice.actions
export default userSlice.reducer 
export {setName,setAddress,sethaha}

/*
const [name,setName] = useState(null)
const [age,setAge]
const [address,setAddress]= useState()

reducers --> kunai function jasko through bata hami kehi programmed 

*/

// register user 
 function registerUser(data){
 return async function registerUserThunk(){
 try {
     const response = await API.post("user/register",data)
    if(response.status === 200){
        dispatch(setName(response.data.data.name))
  }else{

  }
 } catch (error) {
    console.log(error)
 }
 }
}
//login user 

function loginUser(){
return async function loginUserThunk(){
try {
    const response = await API.post("user/login")
if(response.status === 200){

}else{

}
} catch (error) {
    console.log(error)
}
}
}

// forgot password 
