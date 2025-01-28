import React from 'react';
import { Home, Search, Library, Globe, Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-black text-white p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <Menu className="h-8 w-8 text-white" />
        <span className="text-xl font-bold">TuneTalk</span>
      </div>
      
      <div className="space-y-6">
        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
          <Home className="h-6 w-6" />
          <span>Home</span>
        </button>
        
        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
          <Search className="h-6 w-6" />
          <span>Search</span>
        </button>
        
        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
          <Library className="h-6 w-6" />
          <span>Your Library</span>
        </button>
      </div>
      
      <div className="mt-auto">
        <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
          <Globe className="h-4 w-4" />
          <span>English</span>
        </button>
      </div>
    </nav>
  );
}