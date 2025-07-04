
"use client"

import { useAppDispatch } from "@/lib/store/hooks"
import { setAddress, setName } from "@/lib/store/userSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"

function Contact(){
    let address = "Itahari"
    let name = "Manish"
    const dispatch = useAppDispatch()
    dispatch(setName(name))
    dispatch(setAddress(address))
    return (
        <h1>haha hehe huhu</h1>
    )
}

export default Contact