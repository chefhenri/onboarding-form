import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {SectionDataContext} from "./utils/app.utils";
import PageHeader from "./components/molecules/PageHeader";
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
            <PageHeader/>
            <Main {...props}/>
        </SectionDataContext.Provider>
    );
}

export default App
