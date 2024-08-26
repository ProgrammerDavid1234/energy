import React from 'react'
import './login.scss'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <div id='Login'>
            <div className="left row d-none d-md-block">
                <div className="overlay">
                    <span className="material-icons" style={{
                        fontSize: '60px',
                        color: 'white'
                    }}>eco</span> Premium
                </div>
            </div>
            <div className="rigth">
                <span className="material-icons" style={{
                    margin:'0 auto',
                    fontSize: '60px'
                }}>eco</span>
                <form action="" className="form">

                    <div className="inputContainer">
                        <div className="welcome">
                            <h2>Welcome Back!</h2>
                            <span className='line'></span>
                        </div>

                        <div className="email x-space">
                            <label htmlFor="">Email Address/Username</label>
                            <div className="x-space">
                                <input type="email" name="email" placeholder='Email Address/Username' id="email" />
                            </div>
                        </div>

                        <div className="password ">
                            <div className="d-flex justify-content-between">
                                <label htmlFor="">Password</label>
                                <NavLink to=''>Forgot Password</NavLink>
                            </div>

                            <div className="x-space">
                                <input type="password" name="password" placeholder='Password' id="password" />
                            </div>
                        </div>

                        <div className="btn-sub">
                            <input type="submit" value="Submit" />
                        </div>
                        <div className="account">
                            <p>Don't have an account ? <NavLink to='/register'>Create Account</NavLink></p>
                        </div>
                    </div>

                    <div className="help">
                        <div className="d-flex">
                            <div className="">
                                <p>help@premium.com</p>
                            </div>
                            <div className="">
                                <p>(+243)-703-3116-320</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login