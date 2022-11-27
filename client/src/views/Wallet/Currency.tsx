import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close,
  KeyboardArrowRight,
  MonetizationOn,
  Search,
} from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyFlag from "react-currency-flags";

import classes from "./wallet.module.css";
import { CURRENCIES } from "../../constants/currencies";

export interface CurrencyData {
  name: string;
  code: string;
}

const Currency = () => {
  const [isCurrencyDialogOpen, setCurrencyDialog] = useState(false);
  const [currencyList, setCurrencyList] = useState<CurrencyData[]>(CURRENCIES);

  const handleCurrencyDialog = () => {
    setCurrencyDialog((prevState) => !prevState);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredCurrencies = CURRENCIES.filter(
      (currency) =>
        currency.name.toLowerCase().includes(searchValue) ||
        currency.code.toLowerCase().includes(searchValue)
    );
    setCurrencyList(filteredCurrencies);
  };

  return (
    <>
      <TextField
        className={classes.field}
        variant="standard"
        placeholder="Select currency"
        onClick={handleCurrencyDialog}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <MonetizationOn sx={{ background: "#f5f5f5" }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <KeyboardArrowRight />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Dialog maxWidth="sm" open={isCurrencyDialogOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleCurrencyDialog}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
          <Typography className={classes.currencyHeader}>Currency</Typography>
          <Box className={classes.searchBox}>
            <TextField
              variant="standard"
              placeholder="Search"
              onChange={handleSearch}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className={classes.currencyOuterBox}>
            {currencyList.map((currency, index) => {
              return (
                <Grid container key={index} className={classes.currencyBox}>
                  <Grid item xs={1} className={classes.flag}>
                    <CurrencyFlag currency={currency.code} height={30} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography className={classes.currencyName}>
                      {currency.name}
                    </Typography>
                    <Typography className={classes.currencyCode}>
                      {currency.code} - {getSymbolFromCurrency(currency.code)}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Currency;
