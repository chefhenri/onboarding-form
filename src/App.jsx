import { useMemo } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

import Nav from "./components/Nav"
import Wrapper from "./components/panels/Wrapper";

const App = ({ sections }) => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = useMemo(() => createTheme({
    palette: {
      primary: {
        main: '#0066FF'
      },
      ...(prefersLightMode ? {
        mode: 'light',
        background: {
          panel: {
            info: '#E7EAEF'
          }
        },
        text: {
          primary: '#101C2F',
          secondary: '#3F4D62'
        }
      } : {
        mode: 'dark'
      }),
    }
  }), [prefersLightMode])

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Wrapper {...{ sections }} />
      </ThemeProvider>
    </LocalizationProvider>

  )
}

export default App
