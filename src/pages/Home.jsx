import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="min-h-screen  bg-[#0f0f1b] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
          {/* GIF above the logo */}
          <img
            src="/music system.gif" // replace with actual GIF path, e.g., /assets/music-wave.gif
            alt="Animated Music Wave"
            className="h-16 md:h-28  object-contain ml-10"
          />

          {/* Logo Title */}
          <img
            src="/vibe.gif" // replace with actual GIF path, e.g., /assets/music-wave.gif
            alt="Animated Music Wave"
            className="h-16 md:h-28  object-contain"
          />
          <h1
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Wavify
          </h1>
        </div>

        <p
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          className="text-sm text-gray-400"
        >
          {" "}
          Feel Every Beat, Live Every Vibe
        </p>

        <p className="text-lg font-mono text-pink-400 max-w-lg leading-relaxed">
          Your music. Your mood. Stream seamlessly with rich sound and a modern
          vibe.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-5 ">
  <a href="#" className="block transition-transform hover:scale-105">
    <img
      src="/playstore.png"
      alt="Get it on Google Play"
      className="h-12 md:h-14 lg:h-32 object-contain"
    />
  </a>
  <a href="#" className="block transition-transform hover:scale-105">
    <img
      src="/Apple store.png"
      alt="Download on the App Store"
      className="h-12 md:h-14 lg:h-16 object-contain"
    />
  </a>
  <Link
  to="/dashboard" // change this to your actual route
  className=" inline-block px-6 py-2 rounded-xl border border-pink-500 bg-white/10 text-pink-400 backdrop-blur-md hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-pink-500/50"
>
  Continue -{">"}
</Link>

</div>

{/* Continue Button */}


      </div>

      {/* Right Section (Visual or Screenshot Collage) */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative p-4">
        <div className="relative w-full max-w-[550px] h-[700px]">
          {/* layer 1 */}
          <img
            src="/covers/landing page 1.png"
            alt="cover1"
            className="absolute top-[-280px] right-96 w-40 md:w-full rounded-2xl shadow-xl transform rotate-[-2deg] z-30"
          />
          <img
            src="/covers/layer2.png"
            alt="cover1"
            className="absolute top-[-350px] right-48 w-40 md:w-80 rounded-2xl shadow-xl transform rotate-[-2deg] z-30"
          />
          <img
            src="/covers/porofile 1.png"
            alt="cover1"
            className="absolute top-[-310px] right-[-150px] w-40 md:w-96 rounded-2xl shadow-xl transform rotate-[-2deg] z-30"
          />

          {/* layer 2 */}

          <img
            src="/covers/landing page 2.png"
            alt="cover2"
            className="absolute top-[140px] right-[270px] w-40 md:w-[480px] rounded-2xl shadow-xl transform rotate-[-1deg] z-20"
          />
          <img
            src="/covers/SECOND 1.png"
            alt="cover2"
            className="absolute top-[50px] right-[20px] w-40 md:w-80 rounded-2xl shadow-xl transform rotate-[-1deg] z-20"
          />
          <img
            src="/covers/landing page (4) 1.png"
            alt="cover2"
            className="absolute top-[-85px] right-[-250px] w-40 md:w-96 rounded-2xl shadow-xl transform rotate-[-1deg] z-20"
          />

          {/* layer 3 */}

          <img
            src="/covers/landing page 3.png"
            alt="cover4"
            className="absolute top-[380px] right-36 w-40 md:w-[500px] rounded-2xl shadow-xl transform rotate-[-1deg] z-40"
          />
          <img
            src="/covers/THIRD 1.png"
            alt="cover4"
            className="absolute top-[430px] right-[-160px] w-40 md:w-80 rounded-2xl shadow-xl transform rotate-[-1deg] z-40"
          />
          <img
            src="/covers/layer3.png"
            alt="cover4"
            className="absolute top-[100px] right-[-270px] w-40 md:w-80 rounded-2xl shadow-xl transform rotate-[-1deg] z-40"
          />

          <img
            src="/covers/landing page 4.png"
            alt="cover4"
            className="absolute top-[680px] left-2 w-40 md:w-[500px] rounded-2xl shadow-xl transform rotate-[-1deg] z-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
