import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FC } from "react";

import classes from "./Header.module.css";
import ElevationScroll from "./ElevationScroll";


interface HeaderProps {
    name: string;
    disabled?: boolean;
}

const Header: FC<HeaderProps> = ({name}) => {
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Box className={classes.header}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography className={classes.title}>{name}</Typography>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Toolbar></Toolbar>
    </>
  );
};

export default Header;
