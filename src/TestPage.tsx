import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-green-600">Test Page</h1>
      <p>If you can see this, React and Tailwind are working.</p>
      <div className="mt-4 p-4 bg-green-100 rounded-lg">
        <p className="text-green-800">Tailwind classes are working if this has green background.</p>
      </div>
    </div>
  );
};

export default {};