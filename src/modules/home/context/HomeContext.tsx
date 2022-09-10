import React, { createContext, useContext, useState } from 'react';

export type IHomeContextData = {
};
interface Props {
  children: React.ReactNode;
}

const HomeContext = createContext<IHomeContextData>({} as IHomeContextData);

const HomeProvider: React.FC<Props> = ({ children }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

function useHome() {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHome must be used within a HomeProvider');
  }

  return context;
}

export { HomeProvider, useHome };
