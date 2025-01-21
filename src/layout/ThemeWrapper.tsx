import { ReactElement } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { $primaryColor, $themeName } from '@/layout/store.ts'
import { useAppSelector } from '@/redux/hooks.ts'

export default function ThemeWrapper({ children }: { children: ReactElement }) {
  const primaryColor = useAppSelector($primaryColor)
  const mode = useAppSelector($themeName)

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: primaryColor,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
