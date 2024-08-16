import { BoxUI, TypographyUI } from "@repo/ui";

export const HomeContainer = () => {
  return (
    <BoxUI
      sx={{
        display: "flex",
        flex: 1,
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TypographyUI variant="h6">
        Bienvenido a la nueva plantilla con arquitectura limpia.
      </TypographyUI>
    </BoxUI>
  );
};
