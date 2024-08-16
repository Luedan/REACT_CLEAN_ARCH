import { ButtonProps } from "@mui/material";

export type TActionButton = "save" | "cancel" | "delete" | "edit";

export type TActionToColor = {
  [string in TActionButton]: "success" | "warning" | "error" | "info";
};

export type ButtonActionProps = {
  actionType: TActionButton;
  text: string;
} & ButtonProps;
