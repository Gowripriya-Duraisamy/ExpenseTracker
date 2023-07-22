import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../store";
import axios from "../utils/axios";

export interface Wallet {
    name: string;
    imageId: number;
    currency: string;
    initialBalance: number;
    isTotalExcluded: boolean;
    isArchived?: boolean;
    _id?: string;
}

export interface WalletState {
  wallets: Wallet[];
  selectedWallet : Wallet | null;
}

const initialState: WalletState = {
 wallets: [],
 selectedWallet: null
}

export const slice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {
      setSelectedWallet(state: WalletState, action: PayloadAction<Wallet>) {
        state.selectedWallet = action.payload;
      },
      getWallet(state: WalletState, action: PayloadAction<Wallet[]>) {
        state.wallets = action.payload
      },
      saveWallet(state: WalletState, action: PayloadAction<Wallet>) {
        state.wallets = [...state.wallets, action.payload]
      },
      editWallet(state: WalletState, action: PayloadAction<Wallet>) {
        state.wallets = state.wallets.map(wallet => {
          if(wallet._id === action.payload._id) {
            return action.payload;
          }
          return wallet;
        })
      },
     }
  });

export const saveWallet = (data: Wallet): AppThunk => async (dispatch) => {
    try {
        const response = await axios.post<{wallet: Wallet}>(
            "/auth/api/wallet/add",
            JSON.stringify(data),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          dispatch(slice.actions.saveWallet(response.data.wallet));
    } catch (error) {
        console.log("error", error)
    }
}

export const getWallet = (): AppThunk => async (dispatch) => {
  try {
      const response = await axios.get<{data: Wallet[]}>(
          "/auth/api/wallet/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      dispatch(slice.actions.getWallet(response.data.data))
  } catch (error) {
      console.log("error", error)
  }
}

export const deleteWallet = (walletId: string): AppThunk => async (dispatch) => {
  try {
      const response = await axios.delete<{id: string; wallets: Wallet[]}>(
          `/auth/api/wallet/${walletId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(slice.actions.getWallet(response.data.wallets));
  } catch (error) {
      console.log("error", error)
  }
}

export const editWallet = (walletId: string, data: Wallet): AppThunk => async (dispatch) => {
  try {
      const response = await axios.put<{wallet: Wallet}>(
          `/auth/api/wallet/${walletId}`,
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(slice.actions.editWallet(response.data.wallet));
  } catch (error) {
      console.log("error", error)
  }
}

export const setSelectedWallet = (wallet: Wallet): AppThunk => async (dispatch) => {
  try {
        dispatch(slice.actions.setSelectedWallet(wallet));
  } catch (error) {
      console.log("error", error)
  }
}

export const reducer = slice.reducer;
