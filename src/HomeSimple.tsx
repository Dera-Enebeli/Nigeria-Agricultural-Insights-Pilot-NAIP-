import React from 'react';
import { Link } from 'react-router-dom';

const HomeSimple: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">AgriPulse</h1>
        </div>
      </nav>
      
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">Agricultural Intelligence Platform</h1>
        <p className="text-lg mb-8">Welcome to AgriPulse - Your trusted source for agricultural data insights.</p>
        
        <div className="space-y-4">
          <Link to="/data" className="block bg-green-600 text-white px-6 py-3 rounded-lg w-fit">
            View Data Catalog
          </Link>
          <Link to="/test" className="block bg-blue-600 text-white px-6 py-3 rounded-lg w-fit">
            Test Page
          </Link>
        </div>
      </main>
    </div>
  );
};

export default {};