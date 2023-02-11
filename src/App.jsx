import { CssBaseline } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import Nav from "./components/Nav"
import Wrapper from "./components/panels/Wrapper";

function App({ sections }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <Nav />
        <Wrapper {...{ sections }} />
      </LocalizationProvider>
    </>
  )
}

export default App
