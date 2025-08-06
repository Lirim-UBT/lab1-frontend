import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          Logo
        </div>

        {/* Navbar Menu */}
        <div className="hidden md:flex space-x-4">
          {/* Add other nav items here if needed */}
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between">
        <div className="text-white text-xl font-semibold">
          Logo
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
