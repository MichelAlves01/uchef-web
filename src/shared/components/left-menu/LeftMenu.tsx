import { Grid, ToggleButtonGroup } from "@mui/material";
import { LeftMenuButton } from "./LeftMenuButton";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulletedAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./LeftMenu.scss";
import { useState } from "react";

export function LeftMenu() {
  const [view, setView] = useState("list");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  return (
    <Grid container className="left-menu" direction={"column"} size={2}>
      <div className="app-title">
        <span>Chef Shop</span>
      </div>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <LeftMenuButton
          text="Create Shopping List"
          icon={<FormatListBulletedAddIcon />}
          path="/recipes/list-creation"
        ></LeftMenuButton>
        <LeftMenuButton
          text="recipes"
          icon={<MenuBookIcon />}
          path="/recipes"
        ></LeftMenuButton>
        <LeftMenuButton
          text="Shopping Lists"
          icon={<ShoppingCartIcon />}
          path="/shopping-list"
        ></LeftMenuButton>
        <LeftMenuButton
          text="User"
          icon={<PersonIcon />}
          path="/user"
        ></LeftMenuButton>
      </ToggleButtonGroup>
    </Grid>
  );
}
