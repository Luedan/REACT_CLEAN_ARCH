import {
  Box,
  DrawerProps,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import { useLayoutStore } from "./layoutStore";
import { useMemo } from "react";
import { DrawerContent } from "./drawerContent";
import { DrawerHeader } from "./drawerHeader";

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: { theme: Theme; open: boolean } & DrawerProps) => ({
  width: 260,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "red",
  ...(open && {
    width: 260,
    borderRight: "1px solid",
    borderRightColor: theme.palette.divider,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    overflowX: "hidden",
    boxShadow: "none",
    "& .MuiDrawer-paper": {
      width: 260,
      borderRight: "1px solid",
      borderRightColor: theme.palette.divider,

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

      overflowX: "hidden",
      boxShadow: "none",
    },
  }),
  ...(!open && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    overflowX: "hidden",
    width: 60,
    borderRight: "none",
    boxShadow: theme.shadows[1],
    "& .MuiDrawer-paper": {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      overflowX: "hidden",
      width: 60,
      borderRight: "none",
      boxShadow: theme.shadows[1],
    },
  }),
}));

export function DrawerComponent() {
  const theme = useTheme();
  const { handleDrawer, drawerStatus } = useLayoutStore();

  const matchDownMD = useMediaQuery(() => theme.breakpoints.down("lg"));

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(
    () => <DrawerHeader open={!!drawerStatus} />,
    [drawerStatus]
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1200 }}
      aria-label="mailbox folders"
    >
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={drawerStatus} theme={theme}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={drawerStatus}
          onClose={() => handleDrawer(!drawerStatus)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 260,
              borderRight: "1px solid",
              borderRightColor: "divider",
              backgroundImage: "none",
              boxShadow: "inherit",
            },
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
