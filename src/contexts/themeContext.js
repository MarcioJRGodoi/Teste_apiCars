import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext('');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(state => state === 'dark' ? 'light' : 'dark');
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}