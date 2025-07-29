import React, { useState, useRef, useEffect } from "react";
import songs from "../data/songs";

const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Auto move to next song on end
  useEffect(() => {
    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
      setIsPlaying(true);
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-xl">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h2 className="text-2xl font-bold mb-1">{currentSong.title}</h2>
        <p className="text-sm text-gray-300 mb-4">{currentSong.artist}</p>

        <audio ref={audioRef} src={currentSong.audio} preload="auto" />

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() =>
              setCurrentSongIndex(
                (currentSongIndex - 1 + songs.length) % songs.length
              )
            }
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            ⏮ Prev
          </button>

          <button
            onClick={togglePlayPause}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
          >
            {isPlaying ? "⏸ Pause" : "▶️ Play"}
          </button>

          <button
            onClick={() => setCurrentSongIndex((currentSongIndex + 1) % songs.length)}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Next ⏭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
