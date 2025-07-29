import React from 'react';

const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">🎶 My Music Player</h1>
      <p className="text-lg mb-8">Stream your favorite songs anytime, anywhere.</p>
      <a href="/player" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">
        Launch Player
      </a>
    </section>
  );
};

export default Home;
