import React, {useState} from "react";
import {CssBaseline} from "@mui/material";

import {initSectionData, SectionDataContext} from "./utils/app.utils";
import PageHeader from "./components/molecules/PageHeader";
import Main from "./components/templates/Main";

const App = (props) => {
    const useSectionData = useState(initSectionData(props.sections))

    return (
        <SectionDataContext.Provider value={useSectionData}>
            <CssBaseline/>
            <PageHeader/>
            <Main {...props}/>
        </SectionDataContext.Provider>
    );
}

export default App
