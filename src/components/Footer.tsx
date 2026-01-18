import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FarmData</span>
            </div>
            <p className="text-gray-300 mb-4">
              Real-time farm intelligence from Nigerian farmers. Aggregated, anonymous insights for data-driven agriculture.
            </p>
            <p className="text-gray-400 text-sm">
              © 2026 FarmData. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Data Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button className="text-left hover:text-primary-400 transition-colors">Crop Trends</button></li>
              <li><button className="text-left hover:text-primary-400 transition-colors">Yield Data</button></li>
              <li><button className="text-left hover:text-primary-400 transition-colors">Risk Alerts</button></li>
              <li><button className="text-left hover:text-primary-400 transition-colors">Market Insights</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><button className="text-left hover:text-primary-400 transition-colors">Privacy Policy</button></li>
              <li><button className="text-left hover:text-primary-400 transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Protecting farmer privacy through advanced anonymization
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm">GDPR Compliant</span>
              <span className="text-gray-400 text-sm">SOC 2 Type II</span>
              <span className="text-gray-400 text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;