import React, { useState } from 'react';
import './login.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Set loading to true

        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/login', {
                username,
                password,
            });

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/home');
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    return (
        <div id='Login'>
            <div className="left row d-none d-md-block"></div>
            <div className="right">
                <span className="material-icons"></span>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <div className="welcome">
                            <h2>Welcome Back!</h2>
                            <span className='line'></span>
                        </div>

                        {error && <p className="error">{error}</p>}

                        <div className="username x-space">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='Username'
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="password x-space">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="btn-sub">
                            <input
                                type="submit"
                                value={loading ? 'Loading...' : 'Submit'}
                                disabled={loading} // Disable button when loading
                                style={{ background: 'black' }}
                            />
                        </div>

                        <NavLink to='/forgot-password'>Forgot Password</NavLink>
                        <div className="account">
                            <p>Don't have an account? <NavLink to='/register'>Create Account</NavLink></p>
                        </div>
                    </div>

                    <div className="help">
                        <div className="d-flex">
                            <p>help@premium.com</p>
                            <p>(+243)-703-3116-320</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
