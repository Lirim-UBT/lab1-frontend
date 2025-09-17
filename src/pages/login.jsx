import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a request to the backend for login
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      // Assuming response contains token and user role
      const { token, user } = response.data;

      // Store token and role in localStorage (optional)
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);

      // Redirect based on user role
      if (user.role === 'admin') {
        window.location.href = '/admin'; // Admin page
      } else if (user.role === 'student') {
        window.location.href = '/student'; // Student page
      }
    } catch (err) {
      setError('Invalid credentials or server error.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-white font-semibold text-center mb-6">Log In</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-indigo-900 font-bold rounded-md hover:bg-yellow-400 transition"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-yellow-400 hover:underline">
            Sign Up 
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
