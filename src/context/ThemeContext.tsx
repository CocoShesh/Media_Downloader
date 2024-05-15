import { createContext, useState, useContext, ReactNode } from "react";

type ThemeContextType = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeTheme: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextType);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: UserProviderProps) => {
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = (): void => {
    setTheme(document.documentElement.classList.toggle("dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
