import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DataNavigationProps {
  currentPage?: string;
}

const DataNavigation: React.FC<DataNavigationProps> = ({ currentPage }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/data', label: 'All Categories', isActive: location.pathname === '/data' },
    { path: '/data/crop-data', label: 'Crop Data', isActive: location.pathname === '/data/crop-data' },
    { path: '/data/market-data', label: 'Market Data', isActive: location.pathname === '/data/market-data' },
    { path: '/data/risk-analysis', label: 'Risk Analysis', isActive: location.pathname === '/data/risk-analysis' },
    { path: '/data/regional-insights', label: 'Regional Insights', isActive: location.pathname === '/data/regional-insights' },
  ];

  return (
    <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition-all duration-200 font-medium ${
                item.isActive
                  ? 'bg-primary-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataNavigation;