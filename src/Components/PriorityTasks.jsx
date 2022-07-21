import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function PriorityTasks({ priorProp }) {

    const [onEdit, setOnEdit] = useState(false)
    const [editedTask, setEditedTask] = useState('')


    function remove(e) {

        fetch('https://leonell-todo-app.herokuapp.com/todo/delete', {
            method: 'Delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: priorProp._id
            })
        }).then(res => res.json()).then(data => {
            alert('Task Removed')
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
                id: priorProp._id,
                priority: !priorProp.priority
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
        })
    }

    function archive() {
        fetch('https://leonell-todo-app.herokuapp.com/todo/archive', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: priorProp._id,
                archived: !priorProp.archived
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
            fetch('https://leonell-todo-app.herokuapp.com/todo/update', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: priorProp._id,
                    task: editedTask
                })
            }).then(res => res.json()).then(data => {
                window.location.reload()
            })
        }
    }

    return (
        <div className="card">
            {
                onEdit ?
                    <input type="text" className='edittask' placeholder={priorProp.task} value={editedTask} onChange={e => setEditedTask(e.target.value)} />

                    :

                    priorProp.archived ?
                        <p className='archived'>{priorProp.task}</p>
                        :

                        priorProp.priority ?
                            <p className='priority'>{priorProp.task}</p>
                            :


                            <p>{priorProp.task}</p>
            }


            <div className="functions">
                {onEdit ?
                    <button onClick={update}>Update</button>
                    :
                    <Fragment>
                        {priorProp.priority ?
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
    )
}
