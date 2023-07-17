import {
  Grid,
  Box,
  Typography,
  Divider,
  IconButton,
  Avatar,
} from "@mui/material";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { WALLET_TYPES } from "../../../constants";
import { ICONS } from "../../../constants/icons";
import { Wallet } from "../../../slices/wallet";
import { getCurrencyCode } from "../../../utils/common";
import classes from "./details.module.css";

export interface ListProps {
  excludedList: Wallet[];
  includedList: Wallet[];
  handleWalletDetail: (wallet: Wallet | null) => void;
}

const DetailList: FC<ListProps> = ({
  excludedList,
  includedList,
  handleWalletDetail,
}) => {

  const showList = (walletList: Wallet[]) => {
    return walletList.map((listItem: Wallet) => {
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
              {listItem.initialBalance >= 0 ? '+': '-'}
              {getCurrencyCode(listItem.currency)}{" "}
              {listItem.initialBalance.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <>
      {!!includedList.length && (
        <Grid key={uuidv4()} item xs={5}>
          <Box className={classes.walletBox}>
            <Typography className={classes.name}>{WALLET_TYPES[0]}</Typography>
            <Divider orientation="horizontal"></Divider>
          </Box>
          {showList(includedList)}
        </Grid>
      )}
      {!!excludedList.length && (
        <Grid key={uuidv4()} item xs={5}>
          <Box className={classes.walletBox}>
            <Typography className={classes.name}>{WALLET_TYPES[1]}</Typography>
            <Divider orientation="horizontal"></Divider>
          </Box>
          {showList(excludedList)}
        </Grid>
      )}
    </>
  );
};

export default DetailList;
