import { configureStore } from '@reduxjs/toolkit'
import locale from './slices/localeSlice'
import theme from './slices/themeSlice'

export const store = configureStore({
  reducer: {
      locale,
      theme
  },
})

export type RootState = ReturnType<typeof store.getState>