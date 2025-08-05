import React from "react";
import { FaHeart, FaPlay, FaUserCircle } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import fav from "../../public/favourites.jpg"
const Favorites = ({ favorites = [] }) => {

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1f3d] to-[#1c0b3f] text-white px-4 md:px-10 py-6">
      {/* Header Section */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        {/* Left - Back Button + Image */}
        <div className="flex gap-6 items-start">
          <Link to="/">
            <IoArrowBack className="text-2xl text-white hover:text-gray-300" />
          </Link>
          <img
            src={fav}
            alt="Playlist"
            className="w-36 h-36 md:w-48 md:h-48 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              favourite songs <span className="text-pink-400">mix</span>
            </h2>
            <p className="text-gray-300 text-sm mt-2 max-w-md">
              tate mcree, nightmares, the neighborhood, doja cat and ...
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
              <span>{favorites?.length || 0} songs</span>
              <span className="text-pink-400">•</span>
              <span>1h 36m</span>
            </div>
          </div>
        </div>

        {/* Right - Share, About, Premium, Profile */}
        <div className="flex flex-col md:flex-row items-end gap-3">
          <div className="flex gap-4 text-sm text-white/80">
            <button className="hover:text-white">Share</button>
            <button className="hover:text-white">About</button>
            <button className="hover:text-white">Premium</button>
          </div>
          <FaUserCircle className="text-3xl text-white" />
        </div>
      </div>

      {/* Play All Button */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition-all">
          <FaPlay /> Play All
        </button>
      </div>

      {/* Songs Table */}
      <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-md overflow-x-auto">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-white/20 text-gray-300">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Release Date</th>
              <th className="p-3">Album</th>
              <th className="p-3 text-right">Time</th>
              <th className="p-3 text-right">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {favorites?.length > 0 ? (
              favorites.map((song, index) => (
                <tr
                  key={song.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {song.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {song.artist}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-gray-300">{song.releaseDate}</td>
                  <td className="p-3 text-gray-300">{song.album}</td>
                  <td className="p-3 text-right text-gray-300">
                    {song.duration}
                  </td>
                  <td className="p-3 text-right">
                    <FaHeart className="text-pink-400" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-400">
                  No favorite songs added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
