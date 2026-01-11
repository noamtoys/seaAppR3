import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success';
}

export const Tag: React.FC<TagProps> = ({ children, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-green-100 text-green-700',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
};
