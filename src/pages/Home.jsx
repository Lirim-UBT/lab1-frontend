import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/coding.jpg'

const Home = () => {
  const navigate = useNavigate();

  return (
   <section style={{ backgroundColor: '#1a1a1a' }} className="text-white min-h-screen flex items-center" >

      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to <span className="text-yellow-300">EduTrack</span></h1>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Track, manage, and enhance your educational journey with our all-in-one platform for students and professors.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Log In
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src={heroImage}
            alt="EduTrack Hero"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
