import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0f0f1b] text-white">
      <div className="min-h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <img
              src="/music system.gif"
              alt="Animated Music Wave"
              className="h-36 mt-10 md:mt-[-120px] md:h-32 md:ml-8 object-contain"
            />
            <img
              src="/vibe.gif"
              alt="Vibe"
              className="h-16 md:h-28 object-contain"
            />
            <h1
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              className="hidden md:block text-4xl md:text-5xl font-bold leading-tight"
            >
              Wavify
            </h1>
            {/* mobile logo view  */}

            <span style={{ fontFamily: "'Josefin Sans', sans-serif" }} 
            className="block md:hidden absolute top-2 left-4 text-3xl">Wavify</span>
          </div>

          <p
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            className="text-sm text-gray-300 md:text-gray-400"
          >
            Feel Every Beat, Live Every Vibe
          </p>

          <p className="text-lg font-mono text-pink-400 max-w-lg leading-relaxed mx-auto md:mx-0">
            Your music. Your mood. Stream seamlessly with rich sound and a
            modern vibe.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <a href="#" className="block transition-transform hover:scale-105">
              <img
                src="/playstorelogo.png"
                alt="Google Play"
                className="h-10 md:h-10 lg:h-12 object-contain"
              />
            </a>
            <a href="#" className="block transition-transform hover:scale-105">
              <img
                src="/App Store.png"
                alt="App Store"
                className="h-10 md:h-10 lg:h-12 object-contain"
              />
            </a>
            
            <Link
              to="/musicplayer"
              className=" px-6 py-2 rounded-xl border border-pink-500 bg-white/10 text-pink-400 backdrop-blur-md hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-pink-500/50"
            >
              Continue -&gt;
            </Link>
          </div>
        </div>

        {/* Right Section (hidden on small screens) */}
        <div className=" md:flex w-full md:w-1/2 items-center justify-center relative p-4 z-0">
          <div className="relative w-full max-w-[550px] h-[700px]">
            {/* Layer 1 */}
            <img
              src="/covers/landing page 1.png"
              alt="cover1"
              className="absolute top-[-280px] right-96 w-40 md:w-full rounded-2xl shadow-xl rotate-[-2deg] z-30"
            />
            <img
              src="/covers/layer2.png"
              alt="cover1"
              className="absolute top-[-420px] md:top-[-350px] right-60 md:right-48 w-40 opacity-60 md:opacity-100 md:w-80 rounded-2xl shadow-xl rotate-[-2deg] z-30"
            />
            <img
              src="/covers/porofile 1.png"
              alt="cover1"
              className="absolute top-[-450px] md:top-[-310px] right-[-130px] opacity-60 md:opacity-100 md:right-[-150px] w-40 md:w-96 rounded-2xl shadow-xl rotate-[-2deg] z-30"
            />

            {/* Layer 2 */}
            <img
              src="/covers/landing page 2.png"
              alt="cover2"
              className="absolute opacity-60 md:opacity-100 md:top-[140px] right-[270px] w-40 md:w-[480px] rounded-2xl shadow-xl rotate-[-1deg] z-20"
            />
            <img
              src="/covers/SECOND 1.png"
              alt="cover2"
              className="absolute opacity-50 md:opacity-100 md:top-[50px] right-[-30px] md:right-[20px] w-40 md:w-80 rounded-2xl shadow-xl rotate-[-1deg] z-20"
            />
            <img
              src="/covers/landing page (4) 1.png"
              alt="cover2"
              className="absolute top-[-85px] right-[-250px] w-40 md:w-96 rounded-2xl shadow-xl rotate-[-1deg] z-20"
            />

            {/* Layer 3 */}
            <img
              src="/covers/landing page 3.png"
              alt="cover4"
              className="absolute top-[380px] right-36 w-40 md:w-[500px] rounded-2xl shadow-xl rotate-[-1deg] z-40"
            />
            <img
              src="/covers/THIRD 1.png"
              alt="cover4"
              className="absolute top-[430px] right-[-160px] w-40 md:w-80 rounded-2xl shadow-xl rotate-[-1deg] z-40"
            />
            <img
              src="/covers/layer3.png"
              alt="cover4"
              className="absolute top-[100px] right-[-270px] w-40 md:w-80 rounded-2xl shadow-xl rotate-[-1deg] z-40"
            />
            <img
              src="/covers/landing page 4.png"
              alt="cover4"
              className="absolute top-[680px] left-2 w-40 md:w-[500px] rounded-2xl shadow-xl rotate-[-1deg] z-40"
            />
          </div>
        </div>

      <footer className="bg-transparent absolute bottom-0 text-gray-400 py-6 px-4 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left Side - Creator */}
        <p className="text-center md:text-left">
          © 2025 Wavify. Created by <span className="text-pink-400 hover:text-pink-600 font-semibold">Sarbajit Acharjee</span>
        </p>

        {/* Right Side - GitHub Link */}
        <a
          href="https://github.com/sarbajitacharjee/Music_player" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
        >
          <FaGithub className="text-xl" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </footer>
      </div>
    </div>
  );
};

export default Home;
