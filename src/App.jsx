import { CssBaseline } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import Nav from "./components/Nav"
import Wrapper from "./components/panels/Wrapper";

const App = () => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <CssBaseline />
                <Nav />
                <Wrapper/>
            </LocalizationProvider>
        </>
    )
}

export default App
