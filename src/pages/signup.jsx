import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make a request to the backend for signup
      const response = await axios.post('http://localhost:8000/api/register', {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      // Handle successful signup
      setSuccessMessage('Account created successfully! Please log in.');

      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (err) {
      setError('Error creating account. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-white font-semibold text-center mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* First Name Input */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Last Name Input */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

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

          {/* Phone Number Input */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-indigo-900 font-bold rounded-md hover:bg-yellow-400 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;