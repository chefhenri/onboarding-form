import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {SectionDataContext} from "./utils/app.utils";
import FormProgress from "./components/atoms/FormProgress";
import Main from "./components/organisms/Main";

const App = (props) => {
    const useSectionData = useState({
        account: [],
        resell: [],
        info: [],
        config: [],
        comments: []
    })

    return (
        <SectionDataContext.Provider value={useSectionData}>
            <CssBaseline/>
            <FormProgress/>
            <Main {...props}/>
        </SectionDataContext.Provider>
    );
}

export default App
