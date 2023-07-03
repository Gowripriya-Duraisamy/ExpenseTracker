import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { Menu, Person, AccountBalanceWallet } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./drawer.module.css";
import MenuItem from "./Menu";
import ReusableIcon from "../../../../components/ReusableIcon";
import SwipeTop from "./SwipeTop";
import { useSelector } from "../../../../store";

const SwipeDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { wallets } = useSelector((state) => state.wallet);
  const navigate = useNavigate();

  const handleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  
  return (
    <>
      <Box className={classes.box}>
        <IconButton onClick={handleDrawer}>
          <Menu />
        </IconButton>
      </Box>
      <Drawer open={drawerOpen} onClose={handleDrawer}>
        <SwipeTop />
        <Divider orientation="horizontal" />
        <Box>
          <MenuItem
            icon={<Person />}
            name={"My Account"}
            handleClick={() => {}}
          />
          <MenuItem
            icon={<AccountBalanceWallet />}
            name={"My Wallets"}
            handleClick={() => {
              navigate(!wallets.length ? "/expense/wallet" : "/expense/wallet/details")
            }}
          />
          <MenuItem
            icon={
              <ReusableIcon
                image="/static/categories.png"
                className={classes.icon}
              />
            }
            name={"Categories"}
            handleClick={() => {
              navigate("/categories")
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default SwipeDrawer;
