import {
  Box,
  Button,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  TextField
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import clsx from "clsx";

import { editWallet, Wallet } from "../../../slices/wallet";
import { useDispatch } from "../../../store";
import classes from "./details.module.css";

interface BalanceProps {
  initialBalance: number;
  selectedWallet: Wallet;
  handleExcludeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Balance: FC<BalanceProps> = ({ initialBalance, selectedWallet, handleExcludeCheckBox }) => {
  const dispatch = useDispatch();
  const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);
  const [balance, setBalance] = useState(initialBalance);

  const handleBalanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBalance(+event.target.value);
  };

  const handleBalanceDialog = () => {
    setBalanceDialogOpen((prevState) => !prevState);
  };

  const handleDone = () => {
    selectedWallet?._id &&
      dispatch(
        editWallet(selectedWallet._id, {
          ...selectedWallet,
          initialBalance: balance,
        })
      );
    handleBalanceDialog();
  };

  return (
    <>
      <Divider orientation="horizontal"></Divider>
      <CardContent
        className={classes.balanceCard}
        onClick={handleBalanceDialog}
      >
        <Button className={classes.balance}>Adjust Balance</Button>
      </CardContent>
      <Dialog fullWidth maxWidth="xs" open={balanceDialogOpen}>
        <DialogTitle>Adjust Balance</DialogTitle>
        <Divider orientation="horizontal"></Divider>
        <DialogContent>
          <Box className={classes.fieldBox}>
            <label className={classes.label}>
              Enter current balance for {selectedWallet?.name || "wallet"}
            </label>
            <TextField
              variant="standard"
              className={classes.field}
              value={balance}
              type={"tel"}
              onChange={handleBalanceChange}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleBalanceDialog}
            className={classes.cancelButton}
          >
            cancel
          </Button>
          <Button
            disabled={initialBalance === balance}
            onClick={handleDone}
            className={
              initialBalance === balance
                ? clsx(classes.button, classes.buttonDisabled)
                : classes.button
            }
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Balance;
