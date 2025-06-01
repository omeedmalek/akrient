import React from 'react';

export const Card = ({ 
  children, 
  className = '', 
  onClick,
  ...props 
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
