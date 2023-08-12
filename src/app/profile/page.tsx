'use client'
import { UserTypes } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Profile() {
    const [user, setUser] = useState<UserTypes>()
    const getUserDetails = async () => {
        const response = await axios.get('api/users/me')
        const user: UserTypes = response.data.user
        setUser(user)
    }

    useEffect(()=>{
        getUserDetails()
    },[])
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Profile</h1>
            <p>Profile page</p>
            <h2>{user ? user.username :"nothing"}</h2>
        </div>
    )
}