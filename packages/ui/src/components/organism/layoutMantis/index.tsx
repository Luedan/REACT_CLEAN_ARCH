import { Box, Theme, Toolbar, useMediaQuery } from "@mui/material";
import { useLayoutStore } from "./layoutStore";
import { useEffect } from "react";
import { Header } from "./header";
import { DrawerComponent } from "./drawer";

export function LayoutMantis({
  children,
  headerRightChildren
}: {
  children: React.ReactNode;
  headerRightChildren?: React.ReactNode;
}) {
  const downXL = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const { handleDrawer } = useLayoutStore();

  useEffect(() => {
    handleDrawer(!downXL);
  }, [downXL, handleDrawer]);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header rightChildren={headerRightChildren} />
      <DrawerComponent />
      <Box
        component="main"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        {/* <Breadcrumbs navigation={navigation} title /> */}
        {children}
      </Box>
    </Box>
  );
}
