import {
  Avatar,
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
  Done,
} from "@mui/icons-material";
import { ChangeEvent, FC, useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyFlag from "react-currency-flags";

import classes from "./wallet.module.css";
import { CURRENCIES } from "../../constants/currencies";

export interface CurrencyData {
  name: string;
  code: string;
}

export interface CurrencyProps {
  selectedCurrency: CurrencyData,
  handleSelectedCurrency: (currencyData: CurrencyData) => void
}

const Currency: FC<CurrencyProps> = ({
  handleSelectedCurrency,
  selectedCurrency
}) => {
  const [isCurrencyDialogOpen, setCurrencyDialog] = useState(false);
  const [currencyList, setCurrencyList] = useState<CurrencyData[]>(CURRENCIES);
  

  const handleCurrencyDialog = () => {
    setCurrencyDialog((prevState) => !prevState);
  };

  const handleCurrencySelection = (data: CurrencyData) => {
    handleSelectedCurrency(data);
    handleCurrencyDialog();
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
        className={classes.currencyField}
        variant="standard"
        placeholder="Select currency"
        onClick={handleCurrencyDialog}
        value={selectedCurrency.name}
        sx={{ input: { cursor: 'pointer' } }}
        inputProps= {{
          readOnly: true
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                {selectedCurrency.name ?  (
                  <Avatar sx={{ width: 24, height: 24 }}   className={classes.pointer}>
                    <CurrencyFlag
                      currency={selectedCurrency.code}
                      height={18}
                    />
                  </Avatar>
                ): (
                  <MonetizationOn sx={{ background: "#f5f5f5" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton className={classes.pointer}>
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
              const currencySelected =
                selectedCurrency.name === currency.name || false;
              return (
                <Grid
                  container
                  key={index}
                  onClick={() => handleCurrencySelection(currency)}
                  className={classes.currencyBox}
                >
                  <Grid item xs={1} className={classes.flag}>
                    <CurrencyFlag currency={currency.code} height={28} />
                  </Grid>
                  <Grid item xs={7} className={classes.currencyNameGrid}>
                    <Typography className={classes.currencyName}>
                      {currency.name}
                    </Typography>
                    <Typography className={classes.currencyCode}>
                      {currency.code} - {getSymbolFromCurrency(currency.code)}
                    </Typography>
                  </Grid>
                  {currencySelected && (
                    <Grid item xs={2}>
                      <IconButton>
                        <Done sx={{ color: "#5dfa7f" }} />
                      </IconButton>
                    </Grid>
                  )}
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
