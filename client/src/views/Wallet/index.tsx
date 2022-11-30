import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {ChangeEvent, useState } from "react";

import Currency, { CurrencyData } from "./Currency";
import Icon, { IconProps } from "./Icon";
import classes from "./wallet.module.css";
import Header from "../../components/CommonHeader";
import { MY_WALLET } from "../../constants";
import clsx from "clsx";
import { ICONS } from "../../constants/icons";
import { useDispatch } from "../../store";
import { saveWallet } from "../../slices/wallet";

const Wallet = () => {
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData>({
    name: "",
    code: "",
  });
  const [walletName, setWalletName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconProps>(ICONS[0]);
  const [initialBalance, setBalance] = useState(0);
  const [isTotalExcluded, setIsTotalExcluded] = useState(false);

  const isButtonEnabled = !!walletName && !!selectedCurrency.name;

  const handleWalletNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWalletName(event.target.value);
  }

  const handleCurrencySelection = (data: CurrencyData) => {
    setSelectedCurrency(data)
  }

  const handleIconSelection = (data: IconProps) => {
    setSelectedIcon(data)
  }

  const handleBalanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBalance(+event.target.value)
  }

  const handleCheckbox = () => {
    setIsTotalExcluded(prevState => !prevState);
  }

  const handleSave = () => {
      dispatch(saveWallet({
        currency: selectedCurrency.name,
        imageId: selectedIcon.id,
        isTotalExcluded,
        initialBalance,
        name: walletName
      }))
  }


  return (
    <>
      <Header name={MY_WALLET} />
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.walletHeader}>
            Add a wallet First!
          </Typography>
          <Divider className={classes.divider} />
          <Grid container>
            <Icon selectedIcon={selectedIcon} handleIconSelection={handleIconSelection}/>
            <Grid item xs={8.5} className={classes.walletBox}>
              <label className={classes.label}>Wallet name</label>
              <TextField
                variant="standard"
                className={classes.field}
                onChange={handleWalletNameChange}
                placeholder="Your wallet name?"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.containerGrid}>
            <Grid className={classes.walletBox} item xs={7}>
              <label className={classes.label}>Currency</label>
              <Currency
                selectedCurrency={selectedCurrency}
                handleSelectedCurrency={handleCurrencySelection}
              />
            </Grid>
            <Grid className={classes.walletBox} item xs={4.5}>
              <label className={classes.label}>Initial Balance</label>
              <TextField
                variant="standard"
                className={classes.field}
                value={initialBalance}
                type={"number"}
                onChange={handleBalanceChange}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          </Grid>
          <FormGroup className={classes.formGroup}>
            <FormControlLabel
              control={<Checkbox  onChange={handleCheckbox} value={isTotalExcluded} />}
              label="Excluded from Total"
            />
            <FormHelperText className={classes.formHelper}>
              Ignore this wallet and its balance in the "Total" mode
            </FormHelperText>
          </FormGroup>
          <Grid className={classes.buttonGrid}>
            <Button
              disabled={!isButtonEnabled}
              className={
                !isButtonEnabled
                  ? clsx(classes.button, classes.buttonDisabled)
                  : classes.button
              }
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Wallet;
