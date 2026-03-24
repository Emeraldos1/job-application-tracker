"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins), Roboto, Helvetica, Arial, sans-serif",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#6366f1",
        },
        background: {
          default: "#f1f5f9",
          paper: "#ffffff",
        },
        text: {
          primary: "#334155",
          secondary: "#64748b",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#6366f1",
        },
        background: {
          default: "#0f172a",
          paper: "#1e293b",
        },
      },
    },
  },
});

export default theme;
