import {
  Grid,
  Box,
  Typography,
  Divider,
  IconButton,
  Avatar,
} from "@mui/material";
import { FC, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import getSymbolFromCurrency from "currency-symbol-map";

import { WALLET_TYPES } from "../../../constants";
import { CURRENCIES } from "../../../constants/currencies";
import { ICONS } from "../../../constants/icons";
import { Wallet } from "../../../slices/wallet";
import classes from "./details.module.css";

export interface ListProps {
  walletList: Wallet[];
  handleWalletDetail: (wallet: Wallet | null) => void;
}

interface WalletType {
  id: number;
  name: string;
  value: boolean;
}

const DetailList: FC<ListProps> = ({ walletList, handleWalletDetail }) => {
  const getCurrencyCode = (name: string) => {
    const selectedCurrency = CURRENCIES.find(
      (currency) => currency.name === name
    );
    return getSymbolFromCurrency(selectedCurrency?.code || "USD");
  };
  if (walletList.length) {
    return (
      <>
        {WALLET_TYPES.map((type: WalletType) => {
          const filteredWalletList = walletList.filter(
            (data: Wallet) => data.isTotalExcluded === type.value
          );
          if (!!filteredWalletList.length) {
            return (
              <Grid key={uuidv4()} item xs={5}>
                <Box className={classes.walletBox}>
                  <Typography className={classes.name}>{type.name}</Typography>
                  <Divider orientation="horizontal"></Divider>
                </Box>
                {filteredWalletList.map((listItem) => {
                  return (
                    <Grid
                      key={listItem._id}
                      onClick={() => {
                        handleWalletDetail(listItem);
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
                })}
              </Grid>
            );
          }
          return <Fragment key={uuidv4()}></Fragment>;
        })}
      </>
    );
  }
  return <></>;
};

export default DetailList;
