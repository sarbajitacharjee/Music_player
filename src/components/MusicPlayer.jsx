import React from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaHeart,
  FaShareAlt,
  FaList,
} from "react-icons/fa";
import { motion } from "framer-motion";
import songs from "../data/songs"; // your song array

const Player = () => {
  const currentSong = songs[0];

  return (
    <div className="w-full mt-12 h-screen bg-gradient-to-br from-[#7a2387] via-[#38047c] to-[#1c1c3c] flex items-center justify-center">
      <motion.div
        className="w-full h-full md:h-[600px] md:rounded-3xl flex flex-col md:flex-row overflow-hidden bg-white/10 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Album Cover */}
        <div className="w-96 md:w-1/2 h-1/2 md:h-96 flex items-center justify-center bg-white/10">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="rounded-xl w-[250px] md:w-[300px] shadow-2xl"
          />
        </div>

        {/* Right: Info and Controls */}
        <div className="w-96 md:w-1/2 h-1/2 md:h-96 p-6 text-white flex flex-col justify-between relative">
          {/* Top Info */}
          <div>
            <p className="text-sm text-gray-300">Now Playing</p>
            <h1 className="text-3xl font-bold mt-1">{currentSong.title}</h1>
            <p className="text-purple-300">{currentSong.artist}</p>
            <p className="text-sm text-gray-400">Woodstock</p>
          </div>

          {/* Side Icons */}
          <div className="absolute top-6 right-6 space-y-5 hidden md:block">
            <FaHeart className="text-purple-300 hover:text-pink-400 text-xl cursor-pointer" />
            <FaList className="text-purple-300 hover:text-blue-400 text-xl cursor-pointer" />
            <FaShareAlt className="text-purple-300 hover:text-green-400 text-xl cursor-pointer" />
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="w-full accent-purple-500"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>2:10</span>
              <span>{currentSong.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button className="bg-purple-600 p-3 rounded-full shadow-lg hover:scale-105 transition">
              <FaBackward className="text-white text-xl" />
            </button>
            <button className="bg-purple-600 p-4 rounded-full shadow-xl hover:scale-110 transition">
              <FaPlay className="text-white text-2xl" />
            </button>
            <button className="bg-purple-600 p-3 rounded-full shadow-lg hover:scale-105 transition">
              <FaForward className="text-white text-xl" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Player;
