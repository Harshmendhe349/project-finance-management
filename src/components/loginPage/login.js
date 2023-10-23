import React, { useState } from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa"

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordtype, setPasswordtype] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash/>);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Basic client-side input validation
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }
      if (email === 'test@gmail.com' && password === 'test123') {
        window.location.href = '/viewExpenses';
      } else {
        // Authentication failed, show an error message
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handltoggle = () =>{
    if (passwordtype==='password') {
      setPasswordtype('text');
      setPasswordIcon(FaEye);
    }else{
      setPasswordtype('password');
      setPasswordIcon(FaEyeSlash);
    }
  };
  return (
    <div className='loginPage min-h-screen flex items-center justify-center bg-gray-100'>
      <form className='bg-dark shadow-md rounded box-border  w-2/6 px-8 pt-6 pb-8 mb-4 ' onSubmit={handleLogin}>
        {error && <p className="error">{error}</p>}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            User Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='email'
            placeholder='Username or Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6 '>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type={passwordtype}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={handltoggle} style={{
            position: 'absolute',
            left:'63%',
            top:'50%'
           }}>{passwordIcon}</span>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
