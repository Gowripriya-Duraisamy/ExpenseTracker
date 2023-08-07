import { Box, Divider, Dialog, Drawer, IconButton } from "@mui/material";
import { Menu, Person, AccountBalanceWallet } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./drawer.module.css";
import MenuItem from "./Menu";
import ReusableIcon from "../../../../components/ReusableIcon";
import AccountInfo from "./AccountInfo";
import { useSelector } from "../../../../store";
import MyAccount from "./MyAccount";

const SwipeDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accountDialog, setAccountDialog] = useState(false);
  const { wallets } = useSelector((state) => state.wallet);
  const navigate = useNavigate();

  const handleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleMyAccountClick = () => {
    handleDrawer();
    setAccountDialog(true);
  };

  const handleDialogClose = () => {
    setAccountDialog(false);
  }

  return (
    <>
      <Box className={classes.box}>
        <IconButton onClick={handleDrawer}>
          <Menu />
        </IconButton>
      </Box>
      <Drawer open={drawerOpen} onClose={handleDrawer}>
        <AccountInfo />
        <Divider orientation="horizontal" />
        <Box>
          <MenuItem
            icon={<Person />}
            name={"My Account"}
            handleClick={handleMyAccountClick}
          />
          <MenuItem
            icon={<AccountBalanceWallet />}
            name={"My Wallets"}
            handleClick={() => {
              navigate(
                !wallets.length ? "/expense/wallet" : "/expense/wallet/details"
              );
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
              navigate("/expense/categories");
            }}
          />
        </Box>
      </Drawer>
      <Dialog open={accountDialog} onClose={handleDialogClose} fullWidth maxWidth="sm">
        <MyAccount handleClose={handleDialogClose} />
      </Dialog>
    </>
  );
};

export default SwipeDrawer;
