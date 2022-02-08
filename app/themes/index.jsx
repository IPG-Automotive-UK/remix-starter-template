import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@ipguk/react-ui";

const ThemeConfig = ({ children }) => (
  <ThemeProvider>
    <StyledEngineProvider>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  </ThemeProvider>
);

export default ThemeConfig;
