import React from 'react';

interface TinaWrapperProps {
  children: React.ReactNode;
}

export const TinaWrapper: React.FC<TinaWrapperProps> = ({ children }) => {
  // For now, just return children without Tina wrapping
  // This prevents the lazy loading error while keeping the structure
  return <>{children}</>;
};