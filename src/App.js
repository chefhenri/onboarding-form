import React, {Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import FormProgress from "./components/atoms/FormProgress";
import Main from "./components/organisms/Main";

const App = (props) => {
    return (
        <Fragment>
            <CssBaseline/>
            <FormProgress/>
            <Main {...props}/>
        </Fragment>
    );
}

export default App
