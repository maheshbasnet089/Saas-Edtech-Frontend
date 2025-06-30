import { createSlice } from "@reduxjs/toolkit";


createSlice({
    name : "userSlice", 
    initialState : {
        name : null, 
        address : null
    }, 
    reducers : {
        // state --> mathi ko intialState 
        // action --> trigger garda pathaune data aaune kura 
        setName(state,action){
            state.name = "manish"
        },

        setAddress(state,action){
            state.address = "Itahari"
        }, 
        sethaha(state,action){

        }
    }
})



/*
const [name,setName] = useState(null)
const [age,setAge]
const [address,setAddress]= useState()

reducers --> kunai function jasko through bata hami kehi programmed 

*/