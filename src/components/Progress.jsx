import React from 'react';

export const Progress = ({ value = 0, className = '' }) => {
  // We ensure the value stays between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${clampedValue}%` }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};
