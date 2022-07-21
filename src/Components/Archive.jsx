import React, { useContext, useEffect, useState } from 'react'
import { BsCalendarCheck } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import './Archive.css'
import ArchivedTasks from './ArchivedTasks'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'

export default function Archive() {

    const { user } = useContext(UserContext)

    const [archived, setArchived] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/todo/getarchived', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => res.json()).then(data => {
            setArchived(data.map(arc => {
                return (
                    <ArchivedTasks key={arc._id} arcProp={arc} />
                )
            }))
        })
    }, [])
    return (
        (user.token == null) ?
            <Navigate to='/login' />
            :
            <div className="archive">
                <div className="title">
                    <div className="row">
                        <div className="col1">
                            <div className="label">
                                <BiArchive className='icon arc' />
                                <h2>Archived</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasklist">
                    {archived}

                </div>
            </div>
    )
}
