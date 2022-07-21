import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function AllTasks({ taskProp }) {

    const [onEdit, setOnEdit] = useState(false)
    const [editedTask, setEditedTask] = useState('')
    const [priority, setPriority] = useState(taskProp.priority)
    const [archived, setArchived] = useState(taskProp.archived)
    const [task, setTask] = useState(taskProp.task)


    function remove(e) {

        fetch('https://leonell-todo-app.herokuapp.com/todo/delete', {
            method: 'Delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: taskProp._id
            })
        }).then(res => res.json()).then(data => {
            window.location.reload()
        })
    }

    function prio() {

        fetch('https://leonell-todo-app.herokuapp.com/todo/prioritize', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: taskProp._id,
                priority: !taskProp.priority
            })
        }).then(res => res.json()).then(data => {

            setPriority(!priority)
        })
    }

    function archive() {
        fetch('https://leonell-todo-app.herokuapp.com/todo/archive', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: taskProp._id,
                archived: !taskProp.archived
            })
        }).then(res => res.json()).then(data => {

            setArchived(!archived)
        })
    }

    function edit() {
        setOnEdit(true)
    }

    function update() {
        if (editedTask == '') {
            setOnEdit(false)
        }
        else {
            setOnEdit(false)
            fetch('https://leonell-todo-app.herokuapp.com/todo/update', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: taskProp._id,
                    task: editedTask
                })
            }).then(res => res.json()).then(data => {
                setTask(editedTask)
            })
        }

    }

    return (
        <div className="row">
            <div className="col1">
                <div className="card">
                    {
                        onEdit ?
                            <input type="text" className='edittask' placeholder={taskProp.task} value={editedTask} onChange={e => setEditedTask(e.target.value)} />

                            :

                            archived ?
                                <p className='archived'>{task}</p>
                                :

                                priority ?
                                    <p className='priority'>{task}</p>
                                    :


                                    <p>{task}</p>



                    }


                    <div className="functions">


                        {onEdit ?
                            <button onClick={update}>Update</button>

                            :
                            <Fragment>
                                {priority ?
                                    <FaStar className='icon prio' onClick={prio} />
                                    :
                                    <FaRegStar className='icon prio' onClick={prio} />
                                }
                                <RiEditLine className='icon edit' onClick={edit} />
                                <BiArchive className='icon arc' onClick={archive} />
                                <AiOutlineDelete className='icon delete' onClick={remove} />
                            </Fragment>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
