import React from "react";
import {Button} from "@material-ui/core";

import {styles} from "../../styles/content.styles";

const ContentBtnGroup = ({active, next, back, skip, optional, length}) => {
    const classes = styles()

    return (
        <div>
            <Button disabled={active === 0} onClick={back} className={classes.button}>
                Back
            </Button>
            {optional(active) && (
                <Button variant="contained" color="primary" onClick={skip}
                        className={classes.button}>
                    Skip
                </Button>
            )}
            <Button variant="contained" color="primary" onClick={next}
                    className={classes.button}>
                {active === length ? 'Finish' : 'Next'}
            </Button>
        </div>
    )
}

export default ContentBtnGroup
