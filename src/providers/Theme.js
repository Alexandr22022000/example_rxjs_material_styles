import React, { createContext, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from "@material-ui/core/colors/orange";

export const defaultThemeConfig = {
  palette: {
    type: "dark",
    primary: orange,
  },
  card: {
    size: "400px",
  },
};

export const defaultTheme = createMuiTheme(defaultThemeConfig);

export const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: (theme) => {},
});

const Theme = (props) => {
  const [theme, setThemeHook] = useState(defaultTheme);

  const setTheme = (themeUpdate) => {
    const newTheme = {};
    for (let key in defaultThemeConfig) {
      newTheme[key] = { ...defaultThemeConfig[key] };
    }
    for (let key in themeUpdate) {
      newTheme[key] = { ...newTheme[key], ...themeUpdate[key] };
    }
    setThemeHook(createMuiTheme(newTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <CssBaseline>{props.children}</CssBaseline>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
