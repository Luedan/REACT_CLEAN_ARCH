import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppTheme } from "./theme";
import { useThemeStore } from "./state";
import { enUS, esES } from "@mui/material/locale";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lng = useThemeStore((state) => state.lng) || "es";

  return (
    <ThemeProvider theme={AppTheme(lng === "es" ? esES : enUS)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
