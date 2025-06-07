import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeContextData {
  theme: string;
}

const ThemeContext = createContext<ThemeContextData | null>(null);

const ToggleLightProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme");

    if (getTheme) {
      setTheme(getTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useGetTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useHasAccountContext must be used within a HasAccountProvider"
    );
  }
  return context;
};

export default ToggleLightProvider;
