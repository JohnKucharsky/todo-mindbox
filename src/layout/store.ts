import { indigo } from '@mui/material/colors'
import { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '@/redux/utils.ts'

interface SelectionState {
  $primaryColor: string
  $themeName: 'light' | 'dark'
}

const initialState: SelectionState = {
  $primaryColor: indigo['500'],
  $themeName: 'light',
}

export const themeSlice = createAppSlice({
  name: 'theme',
  initialState,
  reducers: (create) => ({
    handleChangePrimaryColor: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.$primaryColor = action.payload
      },
    ),
    handleChangeTheme: create.reducer(
      (state, action: PayloadAction<'light' | 'dark'>) => {
        state.$themeName = action.payload
      },
    ),
  }),
  selectors: {
    $primaryColor: (state) => state.$primaryColor,
    $themeName: (state) => state.$themeName,
  },
})

export const { handleChangePrimaryColor, handleChangeTheme } =
  themeSlice.actions
export const { $primaryColor, $themeName } = themeSlice.selectors

export default themeSlice.reducer
