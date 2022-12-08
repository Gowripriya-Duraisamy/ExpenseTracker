import {AnyAction, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {useSelector as selector, useDispatch as dispatch, TypedUseSelectorHook} from "react-redux";

import {reducer as WalletReducer} from "../slices/wallet";

export const store = configureStore({
    reducer: {
        wallet: WalletReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useDispatch: () => AppDispatch = dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = selector;

export default store;



