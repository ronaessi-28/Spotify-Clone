import React from 'react';
import { Navigation } from './components/Navigation';
import { Player } from './components/Player';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-indigo-900 to-black">
      <div className="flex-1 flex">
        <div className="w-64 bg-black">
          <Navigation />
        </div>
        
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Welcome to TuneTalk</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Popular Artists</h2>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <img
                    src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&q=80`}
                    alt="Artist"
                    className="w-full aspect-square object-cover rounded-full mb-4"
                  />
                  <h3 className="text-white text-center font-medium">Artist Name</h3>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Featured Playlists</h2>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <img
                    src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&q=80`}
                    alt="Playlist"
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-medium">Playlist Name</h3>
                  <p className="text-gray-400 text-sm">Description</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      
      <Player />
    </div>
  );
}

export default App;