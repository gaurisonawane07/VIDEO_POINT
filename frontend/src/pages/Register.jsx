// src/pages/Register.jsx
import React, { useState } from 'react';
import { registerUser } from '../api/userService';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    avatar: null,
    coverImage: null,
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setSuccessMessage(response.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-4xl font-extrabold text-center text-blue-600">Create Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none transition duration-200"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none transition duration-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none transition duration-200"
          />
  
          {/* Avatar Upload */}
          <label className="block w-full mt-6 p-4 border border-gray-300 rounded-md cursor-pointer text-gray-500 text-center hover:bg-gray-100 transition duration-200">
            Upload Avatar
            <input
              type="file"
              name="avatar"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
  
          {/* Cover Image Upload */}
          <label className="block w-full mt-4 p-4 border border-gray-300 rounded-md cursor-pointer text-gray-500 text-center hover:bg-gray-100 transition duration-200">
            Upload Cover Image
            <input
              type="file"
              name="coverImage"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
  
          {/* Register Button */}
          <button
            type="submit"
            className="w-full p-4 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 shadow-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
