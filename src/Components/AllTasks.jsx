import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function AllTasks({ taskProp }) {

    const [onEdit, setOnEdit] = useState(false)
    const [editedTask, setEditedTask] = useState('')


    function remove(e) {

        fetch('http://localhost:4000/todo/delete', {
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

        fetch('http://localhost:4000/todo/prioritize', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: taskProp._id,
                priority: !taskProp.priority
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
        })
    }

    function archive() {
        fetch('http://localhost:4000/todo/archive', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: taskProp._id,
                archived: !taskProp.archived
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
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
            fetch('http://localhost:4000/todo/update', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: taskProp._id,
                    task: editedTask
                })
            }).then(res => res.json()).then(data => {
                window.location.reload()
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

                            taskProp.archived ?
                                <p className='archived'>{taskProp.task}</p>
                                :

                                taskProp.priority ?
                                    <p className='priority'>{taskProp.task}</p>
                                    :


                                    <p>{taskProp.task}</p>



                    }


                    <div className="functions">


                        {onEdit ?
                            <button onClick={update}>Update</button>

                            :
                            <Fragment>
                                {taskProp.priority ?
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
