import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstitute, IInstituteInitialData } from "./instituteSlice.type";
import { Status } from "@/lib/types/type";


const initialState:IInstituteInitialData = {
    institute : {
        instituteAddress : "", 
        instituteEmail : "", 
        institutePhoneNumber : "", 
        instituteName : ""
    }, 
    status : Status.LOADING
} 

const instituteSlice = createSlice({
    name : "institute", 
    initialState : initialState, 
    reducers : {
        setInstitute(state:IInstituteInitialData,action:PayloadAction<IInstitute>){
            state.institute = action.payload
        }, 
        setStatus(state:IInstituteInitialData,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

const {setInstitute,setStatus} = instituteSlice.actions
export default instituteSlice.reducer