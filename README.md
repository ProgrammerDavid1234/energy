GET: Retrieve data (e.g., fetching user data).
POST: Create new data or trigger an action (e.g., user registration, login).
PUT: Replace an existing resource with new data (e.g., updating a user profile).
PATCH: Update part of an existing resource (e.g., changing a user's email).
DELETE: Remove a resource (e.g., deleting a post).


#GET
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState('');
  const [error, setError] =useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.example.com/posts');
        setPosts(response.data); // Store the fetched posts in the state
      } catch (error) {
        alert.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); 
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

#POST
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.example.com/login', {
        username,
        email,
        password
      });

      // Store token and navigate to home page
      localStorage.setItem('token', response.data.token);
      navigate('/home');

    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
            <label>Username</label>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            >
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
# energy
