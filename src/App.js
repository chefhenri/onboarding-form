import React, {Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Nav from "./components/Nav";
import Main from "./components/Main";

const App = (props) => {
    return (
        <Fragment>
            <CssBaseline/>
            <Nav/>
            <Main {...props}/>
        </Fragment>
    );
}

export default App
