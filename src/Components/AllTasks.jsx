import React, { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function AllTasks({ taskProp }) {


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
                id: taskProp._id,
                priority: !taskProp.priority
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            window.location.reload()
        })
    }

    return (
        <div className="row">
            <div className="col1">
                <div className="card">
                    <p>{taskProp.task}</p>
                    <div className="functions">
                        {taskProp.priority ?
                            <FaStar className='icon prio' onClick={prio} />
                            :
                            <FaRegStar className='icon prio' onClick={prio} />
                        }


                        <RiEditLine className='icon edit' />
                        <BiArchive className='icon arc' />
                        <AiOutlineDelete className='icon delete' onClick={remove} />
                    </div>

                </div>
            </div>
        </div>
    )
}
