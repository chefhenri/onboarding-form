import {ThemeProvider, createTheme} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

import Nav from "./components/Nav";
import SectionPanel from "./components/SectionPanel";

const darkTheme = createTheme({
    palette: {
//        mode: "dark"
    }
})

const App = () => {
    return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Nav/>
                    <SectionPanel/>
                </ThemeProvider>
            </div>
    )
}

export default App
