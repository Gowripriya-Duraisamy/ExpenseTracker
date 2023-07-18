import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./details.module.css";
import { useDispatch, useSelector } from "../../../store";
import { getWallet, Wallet } from "../../../slices/wallet";
import List from "./List";
import ListItem from "./ListItem";
import Header from "../../../components/CommonHeader";
import { MY_WALLET } from "../../../constants";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wallets } = useSelector((state) => state.wallet);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

  const handleWalletDetail = (wallet: Wallet | null) => {
    setSelectedWallet(wallet);
  };

  useEffect(() => {
    dispatch(getWallet());
  }, [dispatch]);

  const handleArrowAction = () => {
    navigate("/expense/transactions")
  }

  return (
    <>
    <Header disabled={!wallets.length} name={MY_WALLET} handleArrowAction={handleArrowAction} />
    <Grid container className={classes.mainGrid}>
      <List
        excludedList={wallets.filter((data: Wallet) => data.isTotalExcluded)}
        includedList={wallets.filter((data: Wallet) => !data.isTotalExcluded)}
        handleWalletDetail={handleWalletDetail}
      />
      {selectedWallet && (
        <ListItem
          walletsLen={wallets.length}
          handleWalletDetail={handleWalletDetail}
          wallet={selectedWallet}
        />
      )}
    </Grid>
    </>
  );
};

export default Details;
