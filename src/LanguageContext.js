import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    return translations[currentLanguage][key] || key; // Fallback to key if translation missing
  };

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const value = {
    currentLanguage,
    switchLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};