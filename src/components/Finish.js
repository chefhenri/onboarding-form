import React from "react";
import {Typography} from "@material-ui/core";

// TODO: Replace with form end text
const finishText = 'Your order number is #2001539. We have emailed your order confirmation, and will send you an ' +
    'update when your order has shipped.'

export default function Finish() {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                {finishText}
            </Typography>
        </div>
    )
}
