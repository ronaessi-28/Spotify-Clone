import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Users } from 'lucide-react';

export function Player() {
  return (
    <div className="bg-black bg-opacity-95 text-white p-4 border-t border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
            alt="Now playing"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="text-sm font-medium">Song Title</h4>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="h-5 w-5" />
            </button>
            <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform">
              <Play className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full mt-2">
            <div className="bg-gray-600 h-1 rounded-full w-full">
              <div className="bg-white h-1 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-1/3 justify-end">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Users className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            <div className="bg-gray-600 h-1 rounded-full w-24">
              <div className="bg-white h-1 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}