import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type LocaleState = 'no' | 'en';
const initialState: LocaleState = 'no';

export const localeSlice = createSlice({
    name: 'locale', 
    initialState: initialState as LocaleState, 
    reducers: {
        update: (_state, action: PayloadAction<LocaleState>) => action.payload
    }
})

export const { update } = localeSlice.actions
export const selectLocale = (state: RootState) => state.locale
export default localeSlice.reducer