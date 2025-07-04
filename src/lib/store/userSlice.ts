import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";



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