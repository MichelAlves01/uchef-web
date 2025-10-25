import type { JSX } from "@emotion/react/jsx-runtime";
import { Button } from "@mui/material";

export interface LeftMenuButtonProps {
  icon: JSX.Element;
  text: string;
}

export function LeftMenuButton({ icon, text }: Readonly<LeftMenuButtonProps>) {
  return (
    <Button startIcon={icon} fullWidth sx={{ justifyContent: "start" }}>
      {text}
    </Button>
  );
}
