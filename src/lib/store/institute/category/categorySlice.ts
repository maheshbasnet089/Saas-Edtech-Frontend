import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryData, ICategoryInitialData } from "./category.types";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState : ICategoryInitialData  = {
    data : [], 
    status : Status.LOADING
}

const categorySlice = createSlice({
    name : "categorySlice", 
    initialState, 
    reducers : {
        setStatus(state:ICategoryInitialData,action:PayloadAction<Status>){
            state.status = action.payload
        }, 
        setData(state:ICategoryInitialData,action:PayloadAction<ICategoryData[]>){
            state.data = action.payload
        }
    }
})

const {setStatus,setData} = categorySlice.actions
export default categorySlice.reducer 

export function fetchCategories(){
    return async function fetchCategoriesThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("institute/category")
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data.length > 0 && dispatch(setData(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function addCategory(data:ICategoryData){
    return async function addCategoryThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("institute/category",data)
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

export function deleteCategory(id:string){
    return async function deleteCategoryThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.delete("institute/category/" + id)
            if(response.status === 200){
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