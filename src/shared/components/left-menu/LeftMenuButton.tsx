import type { JSX } from "@emotion/react/jsx-runtime";
import { ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";

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
    <Link to={path}>
      <ToggleButton
        fullWidth
        sx={{ justifyContent: "start" }}
        value={text}
        color="info"
        className="menu-button"
      >
        {icon} {text}
      </ToggleButton>
    </Link>
  );
}
