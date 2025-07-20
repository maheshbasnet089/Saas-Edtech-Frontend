import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IRegisterData, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../store";
import { ILoginData } from "@/app/auth/login/login.types";
import API from "@/lib/http/Api";

const initialState:IInitialState = {
    user : {
        username : "", 
        token : ""
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

export function registerUser(data:IRegisterData){
    return async function registerUserThunk(dispatch:AppDispatch){
        try {
            const response = await API.post("auth/register",data)
            if(response.status === 201){
                // k garne tw hami ???
                
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}


export function loginUser(data:ILoginData){
    return async function loginUserThunk(dispatch:AppDispatch){
        try {
            const response = await API.post("auth/login",data)
            if(response.status == 200){
                /*
data  : {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1ZmY3ZTE5LTFlNjEtNDJkNS1hMWZkLTI3ZWJkMzJlNzM3YiIsImlhdCI6MTc1Mjg0OTAxNiwiZXhwIjoxNzU1NDQxMDE2fQ.7t_xVivYiOz_iD8sFZRD6TzAtqTBDW2yvgVcQh45sqs",
        "username": "hello"
    }
        response.data.data =---> logged in success 
                */
               dispatch(setUser(response.data.data))
               localStorage.setItem("token", response.data.data.token)
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}