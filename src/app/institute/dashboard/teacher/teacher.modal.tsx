


import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { ICategoryAddData } from "@/lib/store/institute/category/category.types"
import { addCategory } from "@/lib/store/institute/category/categorySlice"
import { fetchInstituteCourse } from "@/lib/store/institute/course/institute-course-slice"
import { Status } from "@/lib/types/type"
import React, { ChangeEvent, useEffect, useState } from "react"

interface ICloseModal{
    closeModal : ()=>void, 
}

const TeacherModal:React.FC<ICloseModal> = ({closeModal}) => {
    const {courses} = useAppSelector((store)=>store.course)
    const dispatch = useAppDispatch()
    const {status} = useAppSelector((store)=>store.category)
    const [categoryData,setCategoryData] = useState<ICategoryAddData>({
        categoryName : "", 
        categoryDescription : ""
    })
    const handleCategoryChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value} = e.target 
        setCategoryData({
            ...categoryData, 
            [name] : value
        })
    }
    const handleCategorySubmission = async (e:ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await dispatch(addCategory(categoryData))
        if(status === Status.SUCCESS){
            closeModal()
        }
        }
    useEffect(()=>{
        dispatch(fetchInstituteCourse())
    },[])
    return(
     <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="fixed inset-0 bg-black/50" />
  <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create Teacher</h3>
      <button onClick={closeModal} id="closeModalButton" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <form onSubmit={handleCategorySubmission} className="space-y-4">
      <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Name</label>
        <input name="teacherName" onChange={handleCategoryChange} type="text" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Hari Bahadur" required />
      </div>
       <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Email</label>
        <input name="teacherEmail" onChange={handleCategoryChange} type="email" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Harib@gmail.com" required />
      </div>
       <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Phone Number</label>
        <input name="teacherPhoneNumber" onChange={handleCategoryChange} type="email" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="98xxxxxxxx" required />
      </div>
      <div className="flex">
           <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Experience</label>
        <input name="teacherExperience" onChange={handleCategoryChange} type="email" id="website_url" className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="2+ months, years " required />
      </div>
         <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Joined Date</label>
        <input name="teacherPhoneNumber" onChange={handleCategoryChange} type="date" id="website_url" className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="98xxxxxxxx" required />
      </div>
      </div>
     <div className="flex">
             <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Salary</label>
        <input name="teacherSalary" onChange={handleCategoryChange} type="text" id="website_url" className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="30k per month" required />
      </div>
           <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Course</label>
{
    courses.length > 0 && courses.map((course)=>{
        return(
            <select name="courseId" id="">
                <option value={course.id}>{course.courseName}</option>
            </select>
        )
    })
}
      </div>
     </div>
      <div className="flex justify-end gap-3">
        <button onClick={closeModal} id="cancelButton" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
          Cancel
        </button>
        <button id="submitUrlButton" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600">
          Create
          <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</div>

    )
}

export default TeacherModal