import { createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "../store";
import axios from "../utils/axios";

export interface WalletState {
    name: string;
    imageId: number;
    currency: string;
    initialBalance: number;
    isTotalExcluded: boolean;
}

const initialState: WalletState = {
    name: "",
    imageId: 1,
    currency: "",
    initialBalance: 0,
    isTotalExcluded: false
}

export const slice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: { }
  });

export const saveWallet = (data: WalletState): AppThunk => async (dispatch) => {
    try {
        const response = await axios.post(
            "/auth/api/wallet/add",
            JSON.stringify(data),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        console.log(response.data)
    } catch (error) {
        console.log("error", error)
    }
}

export const reducer = slice.reducer;