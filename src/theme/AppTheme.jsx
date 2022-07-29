import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { pupleTheme } from './purpleTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={pupleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
