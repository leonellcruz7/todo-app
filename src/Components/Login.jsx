import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import UserContext from './UserContext'



export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)

    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (email !== '' && pass !== '') {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [email, pass])

    function login(e) {
        e.preventDefault()

        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        }).then(res => res.json()).then(data => {
            if (data == false) {
                alert('Login Failed')
            }
            else {

                fetch('http://localhost:4000/users/details', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${data.access}`
                    }
                }).then(res => res.json()).then(data2 => {

                    localStorage.setItem('firstName', data2.firstName,)
                    localStorage.setItem('lastName', data2.lastName,)
                    localStorage.setItem('email', data2.email,)
                    localStorage.setItem('userId', data2._id,)
                    localStorage.setItem('token', data.access,)

                    setUser({
                        firstName: data2.firstName,
                        lastName: data2.lastName,
                        email: data2.email,
                        token: data.access
                    })
                    alert('Login Successful')
                    navigate('/')
                })

            }
        })
    }
    return (
        <div className='login'>
            <div className="row">
                <div className="form">
                    <div className="card">
                        <form onSubmit={login}>
                            <h2>Login</h2>
                            <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
                            <div className="footer">
                                <p>Don't have an account? Register</p>
                                {active ?
                                    <button onClick={login}>Login</button>
                                    :
                                    <button className='inactive' disabled>Login</button>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
