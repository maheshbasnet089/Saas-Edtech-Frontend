import { Status } from "@/lib/types/type";

interface IInstituteCourseInitialDataCourse{
    courseName : string, 
    coursePrice : string, 
    id : string
}

export interface IInstituteCourseInitialData{
    status : Status, 
    courses : IInstituteCourseInitialDataCourse[]
}