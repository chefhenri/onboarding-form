import {ThemeProvider, createTheme} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";

import Nav from "./components/Nav";
import SectionPanel from "./components/section/SectionPanel";

const darkTheme = createTheme({
    palette: {
//        mode: "dark"
    }
})

const App = () => {
    return (
            <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <Nav/>
                        <SectionPanel/>
                    </ThemeProvider>
                </LocalizationProvider>
            </div>
    )
}

export default App
