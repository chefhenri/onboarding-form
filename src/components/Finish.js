import React from "react";
import {Typography} from "@material-ui/core";

export default function Finish(props) {
    return (
        <div>
            <Typography variant="h4" component="h2">
                Information Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {/* FIXME: Change wording? */}
                Please verify the information is correct.
            </Typography>
            {/* TODO: Make pinned subheader list for form summary */}
        </div>
    )
}
