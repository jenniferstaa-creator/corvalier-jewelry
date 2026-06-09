"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type NavbarTheme = "dark" | "light";

type NavbarThemeContextValue = {
  theme: NavbarTheme | null;
  setTheme: (theme: NavbarTheme | null) => void;
};

const NavbarThemeContext = createContext<NavbarThemeContextValue>({
  theme: null,
  setTheme: () => {},
});

export function NavbarThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme | null>(null);

  return (
    <NavbarThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}

export function useNavbarTheme() {
  return useContext(NavbarThemeContext);
}

/** Place on a page to override navbar text colors (e.g. initialTheme="light"). */
export function SetNavbarTheme({ theme }: { theme: NavbarTheme }) {
  const { setTheme } = useNavbarTheme();

  useEffect(() => {
    setTheme(theme);
    return () => setTheme(null);
  }, [theme, setTheme]);

  return null;
}
