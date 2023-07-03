import { Avatar, Grid, IconButton, Popover, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ICONS } from "../../../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Wallet } from "../../../slices/wallet";
import { useSelector } from "../../../store";
import { getCurrencyCode } from "../../../utils/common";
import classes from "./topBar.module.css";

const WalletDropdown = () => {
  const { wallets } = useSelector((state) => state.wallet);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isDropDownClicked, setDropDownClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedWallet && wallets.length) {
      setSelectedWallet(wallets[0]);
    }
  }, [wallets, selectedWallet]);

  const handleWalletClick = (event: any) => {
    isDropDownClicked ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
    setDropDownClick((prevState) => !prevState);
  };

  const showList = (walletList: Wallet[]) => {
    return walletList.map((listItem: Wallet) => {
      return (
        <Grid
          key={listItem._id}
          onClick={() => {
          }}
          container
          className={classes.detailGrid}
        >
          <Grid item>
            <IconButton className={classes.walletIcon}>
              <Avatar src={ICONS[listItem.imageId - 1].image} />
            </IconButton>
          </Grid>
          <Grid item className={classes.nameGrid}>
            <Typography className={classes.walletName}>
              {listItem.name}
            </Typography>
            <Typography className={classes.walletBalance}>
              {getCurrencyCode(listItem.currency)}{" "}
              {listItem.initialBalance.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };

  if (selectedWallet) {
    return (
      <>
        <Grid
          container
          className={classes.detailGrid}
          onClick={handleWalletClick}
        >
          <Grid item>
            <IconButton className={classes.walletIcon}>
              <Avatar src={ICONS[selectedWallet.imageId - 1].image} />
            </IconButton>
          </Grid>
          <Grid item className={classes.nameGrid}>
            <Typography className={classes.walletName}>
              {selectedWallet.name}
              <IconButton className={classes.arrowIcon}>
                <ArrowDropDownIcon fontSize={"small"} />
              </IconButton>
            </Typography>
            <Typography className={classes.walletBalance}>
              {getCurrencyCode(selectedWallet.currency)}{" "}
              {selectedWallet.initialBalance.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Popover
          id={isDropDownClicked ? "simple-popover" : undefined}
          open={isDropDownClicked}
          anchorEl={anchorEl}
          onClose={handleWalletClick}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          
        </Popover>
      </>
    );
  }
  return <></>;
};

export default WalletDropdown;
