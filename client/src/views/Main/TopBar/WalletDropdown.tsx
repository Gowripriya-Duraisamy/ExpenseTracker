import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ICON, ICONS } from "../../../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import clsx from "clsx";

import { Wallet } from "../../../slices/wallet";
import { useSelector } from "../../../store";
import { getCurrencyCode } from "../../../utils/common";
import classes from "./topBar.module.css";
import { EXCLUDED_WALLET, INCLUDED_WALLET, SELECT_WALLET, TOTAL } from "../../../constants";
import { Done } from "@mui/icons-material";

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

  const showSelectWallet = (wallets: Wallet[]) => {
    let balance = 0;
    wallets.forEach(wallet => {
      if(!wallet.isTotalExcluded) balance += wallet.initialBalance;
    })
    return (
      <>
        {!!wallets.length && (
          <>
            <Divider />
            <Typography className={clsx(classes.header, classes.selectHeader)}>{SELECT_WALLET}</Typography>
            <Divider />
          </>
        )}
        {
            <Grid container className={classes.walletDropdown}>
              <Grid
                item
                xs={10}
                onClick={() => {}}
                container
                className={classes.listGrid}
              >
                <Grid item>
                  <IconButton className={classes.walletIcon}>
                    <Avatar src={ICON[0].image} />
                  </IconButton>
                </Grid>
                <Grid item className={classes.nameGrid}>
                  <Typography className={classes.walletName}>
                    {TOTAL}
                  </Typography>
                  <Typography className={classes.walletBalance}>
                    {getCurrencyCode("India Rupee")}{" "}
                    {balance.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  {selectedWallet?.name === TOTAL && <Done sx={{ color: "#5dfa7f" }} />}
                </IconButton>
              </Grid>
            </Grid>
        }
      </>
    );
  }

  const showList = (walletList: Wallet[], header: string) => {
    return (
      <>
        {!!walletList.length && (
          <>
            <Divider />
            <Typography className={classes.header}>{header}</Typography>
            <Divider />
          </>
        )}
        {walletList.map((listItem: Wallet) => {
          return (
            <Grid container className={classes.walletDropdown}>
              <Grid
                item
                xs={10}
                key={listItem._id}
                onClick={() => {}}
                container
                className={classes.listGrid}
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
              <Grid item xs={2}>
                <IconButton>
                  {selectedWallet?._id === listItem._id && <Done sx={{ color: "#5dfa7f" }} />}
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </>
    );
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
          classes={{paper: classes.popover}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {showSelectWallet(wallets)}
          {showList(
            wallets.filter((wallet) => !wallet.isTotalExcluded),
            INCLUDED_WALLET
          )}
          {showList(
            wallets.filter((wallet) => !!wallet.isTotalExcluded),
            EXCLUDED_WALLET
          )}
        </Popover>
      </>
    );
  }
  return <></>;
};

export default WalletDropdown;
