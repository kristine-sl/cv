import { configureStore } from '@reduxjs/toolkit'
import locale from './store/localeSlice'
import theme from './store/themeSlice'

export const store = configureStore({
  reducer: {
      locale,
      theme
  },
})

export type RootState = ReturnType<typeof store.getState>