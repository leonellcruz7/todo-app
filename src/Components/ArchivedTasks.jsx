import React, { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function ArchivedTasks({ arcProp }) {


    function remove(e) {

        fetch('http://localhost:4000/todo/delete', {
            method: 'Delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: arcProp._id
            })
        }).then(res => res.json()).then(data => {
            alert('Task Removed')
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
                id: arcProp._id,
                priority: !arcProp.priority
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
                id: arcProp._id,
                archived: !arcProp.archived
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
        })
    }

    return (
        <div className="card">
            {arcProp.archived ?
                <p className='archived'>{arcProp.task}</p>
                :

                arcProp.priority ?
                    <p className='priority'>{arcProp.task}</p>
                    :


                    <p>{arcProp.task}</p>
            }


            <div className="functions">
                {arcProp.priority ?
                    <FaStar className='icon prio' onClick={prio} />
                    :
                    <FaRegStar className='icon prio' onClick={prio} />
                }


                <RiEditLine className='icon edit' />
                <BiArchive className='icon arc' onClick={archive} />
                <AiOutlineDelete className='icon delete' onClick={remove} />
            </div>

        </div>
    )
}
