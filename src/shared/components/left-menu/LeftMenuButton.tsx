import type { JSX } from "@emotion/react/jsx-runtime";
import { Button } from "@mui/material";

export interface LeftMenuButtonProps {
  icon: JSX.Element;
  text: string;
  path: string;
}

export function LeftMenuButton({
  icon,
  text,
  path,
}: Readonly<LeftMenuButtonProps>) {
  return (
    <Button
      startIcon={icon}
      fullWidth
      sx={{ justifyContent: "start" }}
      href={path}
    >
      {text}
    </Button>
  );
}
