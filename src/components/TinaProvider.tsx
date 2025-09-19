import React from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

interface TinaProviderProps {
  children: React.ReactNode;
}

const TinaProvider: React.FC<TinaProviderProps> = ({ children }) => {
  return (
    <TinaEditProvider
      editMode={
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Loading Tina CMS...</h2>
            <p>Please wait while the content management system loads.</p>
          </div>
        </div>
      }
    >
      {children}
    </TinaEditProvider>
  );
};

export default TinaProvider;