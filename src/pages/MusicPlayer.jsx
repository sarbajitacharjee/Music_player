// src/components/LastFmMusicPlayer.jsx
import React, { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const API_KEY = 'f2567acc4d5aad3244275a61319e86d2';
const TAG = 'pop'; // Change to 'rock', 'jazz', etc.

const LastFmMusicPlayer = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fetch top tracks from Last.fm
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${TAG}&api_key=${API_KEY}&format=json&limit=10`
        );
        const data = await res.json();
        setTracks(data.tracks.track);
      } catch (err) {
        console.error('Error fetching tracks:', err);
      }
    };
    fetchTracks();
  }, []);

  const handlePlayPause = (track) => {
    if (currentTrack === track) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(track.url); // Last.fm doesn't provide previews, this will redirect
      audioRef.current = audio;
      audio.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">🎵 {TAG.toUpperCase()} Top Tracks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <img
              src={track.image[2]['#text'] || '/default-cover.jpg'}
              alt={track.name}
              className="w-32 h-32 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{track.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{track.artist.name}</p>

            <button
              onClick={() => handlePlayPause(track)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              {currentTrack === track && isPlaying ? (
                <>
                  <FaPause /> Pause
                </>
              ) : (
                <>
                  <FaPlay /> Play
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastFmMusicPlayer;
