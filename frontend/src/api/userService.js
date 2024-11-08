// src/api/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/users'; 
console.log(API_URL);


export const registerUser = async (userData) => {
  const formData = new FormData();
  
  for (let key in userData) {
    if (userData[key] instanceof File) {
      formData.append(key, userData[key]); // Avatar and coverImage
    } else {
      formData.append(key, userData[key]);
    }
  }

  const response = await axios.post(`${API_URL}/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true, // Allows cookies to be sent along with CORS requests
  });

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // Allows cookies to be sent along with CORS requests
  });

  return response.data;
};
