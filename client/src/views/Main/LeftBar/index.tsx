import {  AccountBalanceWallet, HelpOutlined , ShoppingCart } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import ReusableIcon from "../../../components/ReusableIcon";

import classes from "./leftbar.module.css";
import SwipeDrawer from "./Drawer";
import { useLocation } from "react-router-dom";
import { green } from "@mui/material/colors";

const LeftBar = () => {
  const location = useLocation();
   return (
    <Box>
      <Drawer variant="permanent" anchor="left">
          <Grid container direction={"column"}>
           <SwipeDrawer />
            <Box className={classes.box}>
              <IconButton>
                <AccountBalanceWallet style={location.pathname.includes("transactions") ? { color: green[500] } : {}} />
              </IconButton>
              <Typography className={location.pathname.includes("transactions") ? classes.iconActive :classes.iconName}  >Transactions</Typography>
            </Box>
            <Box className={classes.box}>
              <IconButton>
              <ReusableIcon className={classes.icon} image="/static/report.png" />
              </IconButton>
              <Typography className={classes.iconName} >Report</Typography>
            </Box>
            <Box className={classes.box}>
              <IconButton>
               <ReusableIcon className={classes.icon} image="/static/budget.png" />
              </IconButton>
              <Typography className={classes.iconName} >Budget</Typography>
            </Box>
            <Box className={classes.box}>
              <IconButton>
                <ShoppingCart />
              </IconButton>
              <Typography className={classes.iconName} >store</Typography>
            </Box>
            <Box className={classes.box}>
              <IconButton>
                <HelpOutlined />
              </IconButton>
              <Typography className={classes.iconName} >Help</Typography>
            </Box>
          </Grid>
      </Drawer>
    </Box>
  );
};

export default LeftBar;
