import { KeyboardArrowRight } from "@mui/icons-material";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import classes from "./drawer.module.css";

interface MenuItemProps {
  name: string;
  icon: JSX.Element;
  handleClick: () =>  void;
}

const MenuItem: FC<MenuItemProps> = ({ icon, name, handleClick }) => {
  return (
    <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
      <Grid
        container
        className={classes.menuGrid}
        justifyContent={"space-between"}
        onClick={handleClick}
      >
        <IconButton className={classes.drawerIcon}>{icon}</IconButton>
        <Typography className={classes.listName}>{name}</Typography>
        <IconButton className={classes.arrowIcon}>
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
    </Grid>
  );
};

export default MenuItem;
