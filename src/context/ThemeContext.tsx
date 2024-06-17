import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleChangeTheme = (): void => {
    setTheme(prevTheme => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
