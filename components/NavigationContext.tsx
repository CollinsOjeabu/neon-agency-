
import React, { createContext, useContext } from 'react';

export type Page = 'home' | 'works' | 'about' | 'updates' | 'capabilities';

interface NavigationContextType {
  currentPage: string;
  navigateTo: (page: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode, value: NavigationContextType }> = ({ children, value }) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
