import React from "react";
import {Typography} from "@material-ui/core";

import Summary from "./Summary";

export default function Finish(props) {
    return (
        <div>
            <Typography variant="h4" component="h2">
                Information Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Please verify the information is correct.
            </Typography>

            <Summary sections={props.data}/>
        </div>
    )
}
