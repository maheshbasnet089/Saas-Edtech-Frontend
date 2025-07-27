import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

import { ICoursePostData, IInstituteCourseInitialData } from "./institute-course-type";
import API from "@/lib/http/Api";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState:IInstituteCourseInitialData  = {
    status : Status.LOADING, 
    courses : []
}

const instituteCourseSlice = createSlice({
    name : "institute-course-slice", 
    initialState : initialState, 
    reducers : {
        setStatus(state,action:PayloadAction<Status>){
            state.status = action.payload
        }, 
        setCourse(state, action:PayloadAction<any>){
            state.courses = action.payload
        }, 
        setDeleteCourse(state,action:PayloadAction<string>){
            // id -> 1 
           const index =  state.courses.findIndex(course=>course.id == action.payload) //1
           if(index !== -1){
               state.courses.splice(index,1)
           }
        }, 
        setEditCourse(state,action:PayloadAction<any>){
            const id = action.payload.id 
            const data = action.payload.data
           const index =  state.courses.findIndex(course=>course.id ==id) //0
           if(index !== -1){
               state.courses[1] = data
           }

        }
    }
})

const {setStatus,setCourse,setDeleteCourse,setEditCourse} = instituteCourseSlice.actions
export default instituteCourseSlice.reducer

// thunks 
export function createInstituteCourse(data:ICoursePostData){
    return async function createInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("/institute/course",data)
            if(response.status === 201){
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

export function fetchInstituteCourse(){
    return async function fetchInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("/institute/course")
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data.length > 0 && dispatch(setCourse(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}

export function deleteInstituteCourse(id:string){
    return async function fetchInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await API.delete("/institute/course/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                 dispatch(setDeleteCourse(id))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}


export function editInstituteCourse(id:string, data:any){
    return async function editInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await API.patch("/institute/course/" + id,data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setEditCourse({id,data}))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}