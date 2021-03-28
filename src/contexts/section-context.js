import React from "react";

export const SectionContext = React.createContext({
    data: null,
    header: null,
    fields: null,
    update: () => {}
})
