import React, { Fragment, useContext, useState } from 'react'
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

    const [status, setStatus] = useState('close')

    function toggle(e) {
        e.preventDefault()
        if (status == 'close') {
            setStatus('open')
        }
        else {
            setStatus('close')
        }
    }

    const navVariant = {
        'open': {
            x: 0
        },
        'close': {
            x: -217
        }
    }
    return (
        <div>
            <div className="navbar desktopnav">
                <div className="content">
                    <div className="logo">
                        <h2>Todo</h2>
                        <BiMenuAltLeft className='icon' />
                    </div>
                    <div className="list">
                        {(user.email == null) ?
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
                            {(user.email == null) ?
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
            <motion.div className="navbar mobilenav"
                initial={{ x: -217 }}
                variants={navVariant}
                animate={status}
                transition={{ type: 'spring', duration: .5, bounce: .2 }}>
                <div className="content">
                    <div className="logo">
                        <h2>Todo</h2>
                        <BiMenuAltLeft className='icon' onClick={toggle} />
                    </div>
                    <div className="list">
                        {(user.email == null) ?
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
                            {(user.email == null) ?
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
            </motion.div>
        </div>

    )
}
