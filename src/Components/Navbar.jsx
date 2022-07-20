import React, { Fragment, useContext } from 'react'
import './Navbar.css'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsCalendarCheck } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { BiArchive } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from './UserContext'


export default function Navbar() {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="content">
                <div className="logo">
                    <h2>Todo</h2>
                    <BiMenuAltLeft className='icon' />
                </div>
                <div className="list">
                    {(user.email == '') ?
                        <div className="options hide">
                            <ul>
                                <li>
                                    <div className="title" onClick={() => navigate('/')}>
                                        <BsCalendarCheck className='icon check' />
                                        <h4>All</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="title" onClick={() => navigate('/priority')}>
                                        <FaRegStar className='icon prio' />
                                        <h4>Priority</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="title" onClick={() => navigate('/archive')}>
                                        <BiArchive className='icon arc' />
                                        <h4>Archived</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        :
                        <div className="options">
                            <ul>
                                <li>
                                    <div className="title" onClick={() => navigate('/')}>
                                        <BsCalendarCheck className='icon check' />
                                        <h4>All</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="title" onClick={() => navigate('/priority')}>
                                        <FaRegStar className='icon prio' />
                                        <h4>Priority</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="title" onClick={() => navigate('/archive')}>
                                        <BiArchive className='icon arc' />
                                        <h4>Archived</h4>
                                    </div>
                                    <div className="number">
                                        <p>0</p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    }

                    <div className="userlog">
                        {(user.email == '') ?
                            <Fragment>
                                <button onClick={() => navigate('/register')}>Register</button>
                                <button onClick={() => navigate('/login')}>Login</button>
                            </Fragment>
                            :
                            <button onClick={() => navigate('/logout')}>Logout</button>

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
