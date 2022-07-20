import React from 'react'
import { BsCalendarCheck } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiEditLine } from 'react-icons/ri'
import { BiArchive } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import './Archive.css'

export default function Archive() {
    return (
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
                <div className="card">
                    <p>This is my task</p>
                    <div className="functions">
                        <FaRegStar className='icon prio' />
                        <BiArchive className='icon arc' />
                        <RiEditLine className='icon edit' />
                        <AiOutlineDelete className='icon delete' />
                    </div>
                </div>

            </div>
        </div>
    )
}
