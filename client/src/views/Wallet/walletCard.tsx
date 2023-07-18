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
import {ChangeEvent, FC, useState } from "react";

import Currency, { CurrencyData } from "./Currency";
import Icon, { IconProps } from "./Icon";
import classes from "./wallet.module.css";
import clsx from "clsx";
import { ICONS } from "../../constants/icons";
import { Wallet } from "../../slices/wallet";
import { EDIT } from "../../constants";

export interface WalletCardProps {
  handleClose: () => void;
  handleSave: (data: Wallet) => void;
  title: string;
  type: string;
  data?: Wallet;
}

const WalletCard : FC<WalletCardProps> = ({handleSave, title, data, handleClose, type}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData>({
    name: data?.currency || "",
    code: "",
  });
  
  const [walletName, setWalletName] = useState(data?.name || "");
  const [selectedIcon, setSelectedIcon] = useState<IconProps>(data?.imageId ? ICONS[data.imageId - 1] :ICONS[0]);
  const [initialBalance, setBalance] = useState(data?.initialBalance || 0);
  const [isTotalExcluded, setIsTotalExcluded] = useState(data?.isTotalExcluded || false);

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

  const handleButtonSave = () => {
     handleSave({
        currency: selectedCurrency.name,
        imageId: selectedIcon.id,
        isTotalExcluded,
        initialBalance,
        name: walletName
      });
  }

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.walletHeader}>
            {title}
          </Typography>
          <Divider className={classes.divider} />
          <Grid container>
            <Icon selectedIcon={selectedIcon} handleIconSelection={handleIconSelection} />
            <Grid item xs={8.5} className={classes.walletBox}>
              <label className={classes.label}>Wallet name</label>
              <TextField
                variant="standard"
                className={classes.field}
                onChange={handleWalletNameChange}
                placeholder="Your wallet name?"
                value={walletName}
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
                value={initialBalance > 0 ? initialBalance : ''}
                type={"number"}
                placeholder="0"
                onChange={handleBalanceChange}
                InputProps={{
                  inputProps: { min: 0 },
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
          { type === EDIT && <Button
              className={
                !isButtonEnabled
                  ? clsx(classes.button, classes.buttonDisabled)
                  : classes.button
              }
              onClick={handleClose}
            >
              Cancel
            </Button>}
            <Button
              disabled={!isButtonEnabled}
              className={
                !isButtonEnabled
                  ? clsx(classes.button, classes.buttonDisabled)
                  : classes.button
              }
              onClick={handleButtonSave}
            >
              Save
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default WalletCard;
