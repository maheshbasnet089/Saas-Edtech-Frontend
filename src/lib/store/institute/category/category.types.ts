import { Status } from "@/lib/types/type"

export interface ICategoryData{
     id : string, 
    categoryName : string, 
    categoryDescription : string, 
    createdAt : string
}

export interface ICategoryInitialData{
   data : ICategoryData[], 
   status : Status
}


