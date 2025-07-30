import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import 'animate.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0f1b] text-white shadow-md animate__animated animate__fadeInDown">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
          Wavify
        </Link>

        {/* Search Bar (Desktop only) */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search music..."
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            className={`w-full max-w-sm px-4 py-2 rounded-md bg-[#1a1a2e] text-white focus:outline-none transition-all duration-300 ease-in-out border ${
              searchFocus ? 'border-pink-500 shadow-md scale-105' : 'border-transparent'
            }`}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
          <li><Link to="/explore" className="hover:text-pink-400 transition">Explore</Link></li>
          <li><Link to="/about" className="hover:text-pink-400 transition">About</Link></li>
          <li>
            <Link to="/login">
              <button className="bg-transparent border border-pink-500 hover:bg-pink-500 px-4 py-2 rounded-md text-pink-400 hover:text-white transition text-sm">
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md text-white transition text-sm shadow-md">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1b] px-6 pb-6 pt-2 space-y-4 animate__animated animate__fadeInDown">
          
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search music..."
            className="w-full px-4 py-2 rounded-md bg-[#1a1a2e] text-white focus:outline-none border border-pink-500"
          />

          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-400">Home</Link></li>
            <li><Link to="/explore" onClick={() => setOpen(false)} className="hover:text-pink-400">Explore</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-pink-400">About</Link></li>
            <li>
              <Link to="/login" onClick={() => setOpen(false)}>
                <button className="w-full bg-transparent border border-pink-500 hover:bg-pink-500 px-4 py-2 rounded-md text-pink-400 hover:text-white transition text-sm">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setOpen(false)}>
                <button className="w-full bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md text-white transition text-sm shadow-md">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
