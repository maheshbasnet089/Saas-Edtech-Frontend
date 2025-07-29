import { Status } from "@/lib/types/type";


export interface ITeacher{
    teacherName : string,
    teacherEmail : string,
    teacherPhoneNumber : string,
}

export interface IInitialTeacherData{
    teacher : ITeacher, 
    status   : Status
}

export interface ITeacherPostData extends ITeacher{
    teacherExperience : string, 
    teacherJoinedDate : string, 
    courseId : string , 
    teacherSalary : string, 
    teacherPhoto : File | null,

}