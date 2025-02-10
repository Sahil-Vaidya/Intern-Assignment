import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const res = await axios.post(url, formData);
      alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
    } catch (err) {
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />}
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;