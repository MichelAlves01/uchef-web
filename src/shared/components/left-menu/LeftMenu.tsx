import { Grid } from "@mui/material";
import { LeftMenuButton } from "./LeftMenuButton";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulletedAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./LeftMenu.scss";

export function LeftMenu() {
  return (
    <Grid container className="left-menu" direction={"column"} size={2}>
      <div className="app-title">
        <span>Chef Shop</span>
      </div>
      <LeftMenuButton
        text="Create Shopping List"
        icon={<FormatListBulletedAddIcon />}
        path="list-creation"
      ></LeftMenuButton>
      <LeftMenuButton
        text="Recipes"
        icon={<MenuBookIcon />}
        path="recipes"
      ></LeftMenuButton>
      <LeftMenuButton
        text="Shopping Lists"
        icon={<ShoppingCartIcon />}
        path="shopping-list"
      ></LeftMenuButton>
      <LeftMenuButton
        text="User"
        icon={<PersonIcon />}
        path="user"
      ></LeftMenuButton>
    </Grid>
  );
}
