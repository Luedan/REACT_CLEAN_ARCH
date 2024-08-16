import {
  AppBar,
  AppBarOwnProps,
  Box,
  IconButton,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLayoutStore } from "./layoutStore";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: AppBarOwnProps & { open: boolean; theme: Theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  left: 0,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7.5)})`,
    marginLeft: 61,
  }),
  ...(open && {
    marginLeft: 260,
    width: `calc(100% - ${260}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function Header({ rightChildren }: { rightChildren?: React.ReactNode }) {
  const theme = useTheme();
  const downLG = useMediaQuery(() => theme.breakpoints.down("lg"));

  const { handleDrawer, drawerStatus } = useLayoutStore();

  const iconBackColor = "grey.100";
  const iconBackColorOpen = "grey.200";

  const mainHeader = (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => handleDrawer(!drawerStatus)}
        edge="start"
        color="secondary"
        sx={{
          color: "text.primary",
          bgcolor: drawerStatus ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!drawerStatus ? (
          <KeyboardDoubleArrowRight />
        ) : (
          <KeyboardDoubleArrowLeft />
        )}
      </IconButton>

      <Box>{rightChildren}</Box>
    </Toolbar>
  );

  return (
    <>
      {!downLG ? (
        <AppBarStyled
          open={!!drawerStatus}
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            borderBottom: `1px solid ${theme.palette.divider}`,
            ...(drawerStatus ? {} : { width: "100%" }),
          }}
          theme={theme}
        >
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
        >
          {mainHeader}
        </AppBar>
      )}
    </>
  );
}
