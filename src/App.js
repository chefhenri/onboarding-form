import React, {Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Nav from "./components/molecules/Nav";
import Main from "./components/molecules/Main";

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
