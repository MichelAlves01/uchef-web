import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LeftMenu } from "../../shared/components/left-menu/LeftMenu";

function Layout() {
  return (
    <Grid container className="list-creation-page" size={2}>
      <LeftMenu></LeftMenu>
      <Outlet></Outlet>
    </Grid>
  );
}

export default Layout;
