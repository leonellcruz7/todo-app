import React, { useContext, useEffect } from 'react'
import UserContext from './UserContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        localStorage.clear()
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            token: ''
        })

        navigate('/login')
    }, [])



    return (
        <div></div>
    )
}
