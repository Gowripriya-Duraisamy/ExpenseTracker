import getSymbolFromCurrency from "currency-symbol-map";
import { CURRENCIES } from "../constants/currencies";

export const getCurrencyCode = (name: string) => {
  const selectedCurrency = CURRENCIES.find(
    (currency) => currency.name === name
  );
  return getSymbolFromCurrency(selectedCurrency?.code || "USD");
};
