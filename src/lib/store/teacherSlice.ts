import { createSlice } from "@reduxjs/toolkit";


const teacherSlice  = createSlice({
    name : "teacherSlice", 
    initialState : {
        teacherName : "asdf", 
        teacherPassword : "asdfadf", 
    }, 
    reducers : {
        setTeacherName(state,action){
            state.teacherName = "haha"
        }, 
        setTeacherPassword(state,action){
            state.teacherPassword = "hehe"
        }
    }
})

// const setTeacherName = teacherSlice.actions.setTeacherName
// const setTeacherPasssword  = teacherSlice.actions.setTeacherPassword
const {setTeacherName,setTeacherPassword} = teacherSlice.actions
export default teacherSlice.reducer 
export {setTeacherName,setTeacherPassword}
// setTeacherName()
// const teacherSlice = {
// createSlice functions always returns an object jaha vitra actions haru automatic generate vayerw aairako huncha 
// note : reducer ko name j xa , actions ko name pani smae tehi nahi huncha action invoke garne bitikai vitra reducer automatic call huncha 



/* 
FLOW 

reducers ---> action 

reducer --> communication --> action lai call garnu parxa 
jaile pani action call huncha, reducer hune hainw 


*/