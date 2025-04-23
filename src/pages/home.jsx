import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-white tracking-tight leading-tight sm:text-6xl lg:text-7xl">
          Welcome to <span className="text-yellow-400">Utawala Football</span> Registration
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          Your platform to register for Utawala's premier football programs. Join our community of passionate players and take your game to the next level!
        </p>
        <p className="mt-4 text-lg italic text-blue-200">
          Unleash your potential. Join the Utawala Football family today!
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            Register Now
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white hover:border-yellow-400 text-white font-semibold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;