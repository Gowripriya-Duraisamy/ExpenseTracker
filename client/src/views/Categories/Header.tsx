import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import classes from "./category.module.css";
import ElevationScroll from "../../utils/ElevationScroll";

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Box className={classes.header}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography className={classes.title}>Categories</Typography>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Toolbar></Toolbar>
    </>
  );
};

export default Header;
