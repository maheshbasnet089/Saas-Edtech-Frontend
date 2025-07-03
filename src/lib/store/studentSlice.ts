import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncomingUserPayload, IInitialStudentData } from "./types";


const initialStudentData:IInitialStudentData = {
    data : ""
}

const studentSlice = createSlice({
    name : "studentSlice", 
    initialState :initialStudentData, 
    reducers : {
        setData(state:IInitialStudentData, action:PayloadAction<string|number>){
            state.data = action.payload // {
//     name : "manish", 
//     address : "itahari"
// }
        }, 
    }
})
// reducerName -- actionName
const {setData} = studentSlice.actions
// dispatch(setData({
//     name : "manish", 
//     address : "itahar", 
//     age : 23 
// })) 
export {setData}
export default studentSlice.reducer

function setName(){

}
setName("manish")

// 


