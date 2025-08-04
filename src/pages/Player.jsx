// MusicPlayer.jsx
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaHeart, FaShareAlt, FaVolumeUp } from 'react-icons/fa';
import songs from '../Data/songs'; // adjust the path if needed

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };

  const playPrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex justify-center items-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-md w-full p-6 text-white space-y-6">
        
        {/* Audio Tag */}
        <audio ref={audioRef} src={currentSong.audio} autoPlay={isPlaying}></audio>

        {/* Cover */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <img src={currentSong.cover} alt="cover" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold capitalize">{currentSong.title}</h2>
          <p className="text-sm text-gray-300">{currentSong.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button onClick={playPrev} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
            <FaBackward size={20} />
          </button>
          <button onClick={togglePlay} className="p-4 bg-white/20 rounded-full hover:bg-white/30">
            {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
          </button>
          <button onClick={playNext} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
            <FaForward size={20} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center px-2 mt-4">
          <button className="flex items-center gap-2 hover:text-pink-400">
            <FaHeart /> <span className="text-sm">Fav</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <FaShareAlt /> <span className="text-sm">Share</span>
          </button>
          <button className="flex items-center gap-2 hover:text-yellow-400">
            <FaVolumeUp /> <span className="text-sm">Volume</span>
          </button>
        </div>

        {/* Progress Mock */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
          <div className="w-1/3 h-full bg-white/50 transition-all duration-300"></div>
        </div>

        {/* Song List Button (Optional) */}
        <div className="text-center pt-2">
          <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20">
            🎵 Song List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
