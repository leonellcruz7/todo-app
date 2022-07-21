import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [active, setActive] = useState(false)
    const [taken, setTaken] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (!taken && email !== '' && pass !== '' && pass2 !== '') {

            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [email, pass, pass2, taken])

    useEffect(() => {
        fetch('https://leonell-todo-app.herokuapp.com/users/checkemail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data == true) {
                setTaken(true)
            }
            else {
                setTaken(false)
            }
        })
    }, [email])

    function register(e) {
        e.preventDefault()


        fetch('https://leonell-todo-app.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: first,
                lastName: last,
                email: email,
                password: pass
            })
        }).then(res => res.json()).then(data => {
            alert('You have successfully registered')
            navigate('/login')
        })
    }


    return (
        <div className='register'>
            <div className="row">
                <div className="form">
                    <div className="card">
                        <form action="">
                            <h2>Registration</h2>
                            <input type="text" placeholder='First Name' value={first} onChange={e => setFirst(e.target.value)} />
                            <input type="text" placeholder='Last Name' value={last} onChange={e => setLast(e.target.value)} />
                            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                            {taken ?
                                <p className='taken'>Email already taken</p>
                                :
                                <p hidden>Email already taken</p>
                            }
                            <input type="password" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
                            <input type="password" placeholder='Verify Password' value={pass2} onChange={e => setPass2(e.target.value)} />
                            <div className="footer">
                                <p>Already have an account? Login</p>
                                {active ?
                                    <button onClick={register}>Register</button>
                                    :
                                    <button className='inactive' disabled>Register</button>
                                }

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
