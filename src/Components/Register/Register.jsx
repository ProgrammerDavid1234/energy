import React, { useState } from 'react';
import '../Register/register.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    telephone: '',
    email: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    // Basic validation
    if (!formData.username || !formData.password || !formData.email) {
      setErrorMessage('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/register', {
        ...formData,
        unitBalance: 0, 
        createdAt: new Date().toISOString(),
      });
      setSuccessMessage('Registration successful!');
      setErrorMessage('');

      // Redirect to login page after successful registration
      navigate('/');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Error registering. Please try again.'
      );
      setSuccessMessage('');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div id="SignUp">
      <div className="left row d-none d-md-block">
        {/* Your left section code */}
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <div className="welcome">
              <h2>Sign Up!</h2>
              <span className="line"></span>
            </div>

            {Object.keys(formData).map((key) => (
              <div className="email x-space" key={key}>
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <div className="x-space">
                  <input
                    type={key === 'email' ? 'email' : 'text'}
                    name={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={formData[key]}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            ))}

            <div className="password">
              <label htmlFor="password">Password</label>
              <div className="x-space">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="btn-sub">
              <input type="submit" value={isLoading ? 'Submitting...' : 'Submit'} disabled={isLoading} />
            </div>

            <div className="account">
              <p>Already have an account? <NavLink to='/'>Login</NavLink></p>
            </div>

            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
