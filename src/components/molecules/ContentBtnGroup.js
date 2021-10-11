import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}))

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
