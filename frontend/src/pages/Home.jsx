import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Video Play</h1>
      <Link to="/login" className="mt-6 text-blue-500 hover:underline">
        Go to Login
      </Link>
      <Link to="/register" className="mt-2 text-blue-500 hover:underline">
        Register Here
      </Link>
    </div>
  );
}

export default Home;