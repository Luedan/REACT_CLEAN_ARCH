import { createTheme } from "@mui/material";
import { Localization } from "@mui/material/locale";

export const AppTheme = (lang: Localization) =>
  createTheme(
    {
      palette: {
        mode: "light",
        primary: {
          main: "#00586B",
          dark: "#002932",
          light: "#B8FFFB",
        },
        secondary: {
          main: "#FF800C",
          dark: "#F7780C",
          light: "##FFDC98",
        },
        text: {
          secondary: "#545558",
          primary: "#38393B",
          disabled: "#9E9FA6",
        },
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
      components: {},
    },
    lang
  );
