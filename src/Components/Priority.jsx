import React, { useContext, useEffect, useState } from 'react'
import { BsCalendarCheck } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import './Priority.css'
import UserContext from './UserContext'
import PriorityTasks from './PriorityTasks'
import { Navigate } from 'react-router-dom'

export default function Priority() {
    const { user } = useContext(UserContext)

    const [priority, setPriority] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/todo/getpriority', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => res.json()).then(data => {
            setPriority(data.map(prior => {
                return (
                    <PriorityTasks key={prior._id} priorProp={prior} />
                )
            }))
        })
    }, [])
    return (
        (user.token == null) ?
            <Navigate to='/login' />
            :
            <div className="priority">
                <div className="title">
                    <div className="row">
                        <div className="col1">
                            <div className="label">
                                <FaRegStar className='icon prio' />
                                <h2>Priority</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasklist">
                    {priority}

                </div>
            </div>
    )
}
