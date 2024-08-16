import { Box, styled, Theme, useTheme } from "@mui/material";

const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: { theme?: Theme; open: boolean }) => ({
  ...theme?.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  paddingLeft: theme?.spacing(open ? 3 : 0),
}));

export default DrawerHeaderStyled;

export function DrawerHeader({ open }: { open?: boolean }) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
        AQUI VA EL LOGO
    </DrawerHeaderStyled>
  );
}
