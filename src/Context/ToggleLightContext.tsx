import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeContextData {
  theme: string;
  ToggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData | null>(null);

const ToggleLightProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme");

    if (getTheme) {
      setTheme(getTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const ToggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
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
