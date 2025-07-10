import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";

const initialState:IInitialState = {
    user : {
        username : "", 
        password : ""
    }, 
    status : Status.LOADING
}

const authSlice = createSlice({
    name : "auth", 
    initialState : initialState, 
    reducers : {
        setUser(state:IInitialState, action:PayloadAction<IUserData>){
            state.user = action.payload
        }, 
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

const {setUser,setStatus} = authSlice.actions
export default authSlice.reducer