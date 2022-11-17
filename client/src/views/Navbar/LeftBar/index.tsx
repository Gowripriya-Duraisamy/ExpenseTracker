import {  AccountBalanceWallet, HelpOutlined ,Menu, ShoppingCart } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import ReusableIcon from "../../../components/ReusableIcon";

import classes from "./leftbar.module.css";

const LeftBar = () => {
  return (
    <Box>
      <Drawer variant="permanent" anchor="left">
          <Grid container direction={"column"}>
            <Box className={classes.box}>
              <IconButton>
                <Menu />
              </IconButton>
            </Box>
            <Box className={classes.box}>
              <IconButton>
                <AccountBalanceWallet />
              </IconButton>
              <Typography className={classes.iconName}  >Transactions</Typography>
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
