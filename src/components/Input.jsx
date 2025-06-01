import React from 'react';

export const Input = React.forwardRef(({ 
  type = 'text', 
  className = '', 
  error = false,
  ...props 
}, ref) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const errorStyles = error 
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';

  return (
    <input
      ref={ref}
      type={type}
      className={`${baseStyles} ${errorStyles} ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';
