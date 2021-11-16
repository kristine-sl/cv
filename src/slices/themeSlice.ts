import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ThemeState = 'light' | 'dark';
const initialState: ThemeState = 'light';

export const themeSlice = createSlice({
    name: 'theme', 
    initialState: initialState as ThemeState, 
    reducers: {
        toggle: (state) => state === 'light' ? 'dark' : 'light'
    }
})

export const { toggle } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme
export default themeSlice.reducer