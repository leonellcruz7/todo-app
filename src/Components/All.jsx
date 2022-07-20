import React, { useContext, useEffect, useState } from 'react'
import './All.css'
import { BsCalendarCheck } from 'react-icons/bs'
import { IoIosCreate } from 'react-icons/io'
import UserContext from '../Components/UserContext'
import AllTasks from './AllTasks'
import { Navigate } from 'react-router-dom'

export default function All() {
    const { user } = useContext(UserContext)
    const [all, setAll] = useState(null)
    const [task, setTask] = useState('')
    const [active, setActive] = useState(false)

    function addtask() {

        fetch('https://leonell-todo-app.herokuapp.com/todo/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({
                task: task,
                userId: user.userId
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
        })
    }

    useEffect(() => {
        if (task !== '') {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [task])

    useEffect(() => {
        fetch('https://leonell-todo-app.herokuapp.com/todo/getmytask', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setAll(data.map(task => {
                return (
                    <AllTasks key={task._id} taskProp={task} />
                )
            }))
        })
    }, [])


    return (
        (user.token == null) ?
            <Navigate to='/login' />
            :


            <div className="alltask">
                <div className="title">
                    <div className="row">
                        <div className="col1">
                            <div className="label">
                                <BsCalendarCheck className='icon check' />
                                < h2 > All Tasks</h2 >
                            </div >
                        </div >
                    </div >
                </div >
                <div className="addtask">
                    <div className="card">
                        <textarea type="text" value={task} onChange={e => setTask(e.target.value)} />
                        {active ?
                            <button onClick={addtask}>Add task</button>
                            :
                            <button className='inactive' disabled>Add task</button>
                        }
                    </div>
                </div>
                <div className="tasklist">
                    {all}
                </div>
            </div >

    )
}
